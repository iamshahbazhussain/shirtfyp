const Router = require("express").Router()
const mongoose = require("mongoose")

const BrandModel = require("../Models/BrandModel")



Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const brand = await BrandModel.findById(id)
            if (brand) {
                res.status(200).json({
                    msg: "brand Found Success",
                    data: brand
                })
            } else {
                res.status(401).json({
                    msg: "brand not Found"
                })
            }
        } else {
            const brands = await BrandModel.find()
            if (brands) {
                res.status(200).json({
                    msg: "All brands Found Success",
                    data: brands
                })
            } else {
                res.status(401).json({
                    msg: "All brands not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Getting brands",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const brandData = await BrandModel.create(req.body)
        await brandData.save()
        res.status(200).json({
            msg: "Category Create Success",
            data: brandData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error at Adding Category",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updateCategory = await BrandModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updateCategory) {
                res.status(200).json({
                    msg: "Category Update Success",
                    data: updateCategory
                })
            } else {
                res.status(401).json({
                    msg: "Category not Found"
                })
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
            msg: "Internal Server Error at Updating Category",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteCategory = await BrandModel.findByIdAndDelete(id)
            if (deleteCategory) {
                res.status(200).json({
                    msg: "Category Deleted Success",
                    data: deleteCategory
                })
            } else {
                res.status(404).json({
                    msg: "Category not Found",
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
            msg: "Internal Server Error at Deleting Category",
            error
        })
    }
})

module.exports = Router