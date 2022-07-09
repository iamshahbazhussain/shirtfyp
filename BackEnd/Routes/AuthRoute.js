const Router = require("express").Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 8
const UserModel = require("../Models/AuthModel")


Router.post("/", async (req, res) => {
    let { email, password } = req.body

    try {
        if (email && password) {
            let findUser = await UserModel.findOne({ email: email })
            if (findUser) {
                const hashPass = await bcrypt.compare(password, findUser.password)
                if (hashPass) {
                    res.status(200).json({
                        msg: "User Login Success",
                        data: findUser.email
                    })
                } else {
                    res.status(403).json({
                        msg: "Wrong Password",
                    })
                }
            } else {
                res.status(404).json({
                    msg: "User not Found / invalid Email",
                })
            }
        } else {
            res.status(400).json({
                msg: "Requried Fields Missing",
                fields: ["Email", "Password"]
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Auth",
            error
        })
    }
})

Router.post("/add", async (req, res) => {
    let { email, password, firstName, lastName } = req.body

    try {
        if (email && password) {
            const hassedPassword = await bcrypt.hash(password, saltRounds)
            console.log(hassedPassword);
            let userData = await UserModel.create({
                ...req.body,
                password: hassedPassword
            })

            await userData.save().then(() => {
                let { password, ...other } = userData._doc
                res.status(200).json({
                    msg: "UserCreate Success",
                    data: other
                })
            }).catch((error) => {
                res.status(500).json({
                    msg: "Internal Server Error at Auth",
                    error
                })
            })
        } else {
            res.status(400).json({
                msg: "Requried Fields Missing",
                fields: ["Email", "Password"]
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Auth",
            error
        })
    }
})

module.exports = Router