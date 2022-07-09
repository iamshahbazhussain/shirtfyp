const Router = require("express").Router()
const mongoose = require("mongoose")

const CategoryModel = require("../Models/CategoryModel")



Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const category = await CategoryModel.findById(id)
            if (category) {
                res.status(200).json({
                    msg: "category Found Success",
                    data: category
                })
            } else {
                res.status(401).json({
                    msg: "category not Found"
                })
            }
        } else {
            const categories = await CategoryModel.find()
            if (categories) {
                res.status(200).json({
                    msg: "All categories Found Success",
                    data: categories
                })
            } else {
                res.status(401).json({
                    msg: "All categories not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Getting categories",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const categoryData = await CategoryModel.create(req.body)
        await categoryData.save()
        res.status(200).json({
            msg: "Category Create Success",
            data: categoryData
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
            let updateCategory = await CategoryModel.findByIdAndUpdate(id, req.body, { new: true })
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
            let deleteCategory = await CategoryModel.findByIdAndDelete(id)
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