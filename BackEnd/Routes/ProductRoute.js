const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")
const { cloudinary, uploadCDN } = require("../Middleware/Cloudinary")

const ProductModel = require("../Models/ProductModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const product = await ProductModel.findById(id)
                .populate("category").populate("brand")
            if (product) {
                res.status(200).json({
                    msg: "Product Found Success",
                    data: product
                })
            } else {
                res.status(401).json({
                    msg: "Product not Found"
                })
            }
        } else {
            const products = await ProductModel.find()
            .populate("category").populate("brand")
            if (products) {
                res.status(200).json({
                    msg: "All Products Found Success",
                    data: products
                })
            } else {
                res.status(401).json({
                    msg: "All Products not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Getting Products",
            error
        })
    }
})

Router.post("/", upload.fields([{ name: "img" }]), async (req, res) => {
    const { id, country } = req.query

    try {
        let uploadFiles = {}

        let processing = Object.keys(req.files).map(async (key, index) => {
            let file = req.files[key]
            if (file.length >= 1) {
                let uploadRes = await uploadCDN(file[0].path, file[0].fieldName)
                if (uploadRes.data != null) {
                    uploadFiles = {
                        ...uploadFiles,
                        ...uploadRes.data
                    }
                } else {
                    res.status(400).json(
                        uploadRes.error
                    )
                }
            }
        })
        await Promise.all(processing)
        let savingData = {
            ...req.body,
            ...uploadFiles
        }

        const productData = await ProductModel.create({
            ...savingData
        })
        await productData.save()
        res.status(200).json({
            msg: "Product Create Success",
            data: productData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error at Adding Product",
            error
        })
    }
})

Router.put("/", upload.fields([{ name: "img" }]), async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            if (req.files["img"].length >= 1) {
                let uploadFiles = {}
                let processing = Object.keys(req.files).map(async (key, index) => {
                    let file = req.files[key]
                    if (file.length >= 1) {
                        let uploadRes = await uploadCDN(file[0].path, file[0].fieldName)
                        if (uploadRes.data != null) {
                            uploadFiles = {
                                ...uploadFiles,
                                ...uploadRes.data
                            }
                        } else {
                            res.status(400).json(
                                uploadRes.error
                            )
                        }
                    }
                })
                await Promise.all(processing)
                let savingData = {
                    ...req.body,
                    ...uploadFiles
                }

                const updateProduct = await ProductModel.findByIdAndUpdate(id, savingData, { new: true })
                if (updateProduct) {
                    res.status(200).json({
                        msg: "Product Update with IMGS Success",
                        data: updateProduct
                    })
                } else {
                    res.status(401).json({
                        msg: "Product not Found"
                    })
                }
            } else {
                let updateProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true })
                if (updateProduct) {
                    res.status(200).json({
                        msg: "Product Update Success",
                        data: updateProduct
                    })
                } else {
                    res.status(401).json({
                        msg: "Product not Found"
                    })
                }
            }
        } else {
            res.status(400).json({
                msg: "Filed Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error at Updating Product",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteProduct = await ProductModel.findByIdAndDelete(id)
            if (deleteProduct) {
                res.status(200).json({
                    msg: "Product Deleted Success",
                    data: deleteProduct
                })
            } else {
                res.status(404).json({
                    msg: "Product not Found",
                })
            }
        } else {
            res.status(400).json({
                msg: "Requried Fields Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Deleting Product",
            error
        })
    }
})

module.exports = Router