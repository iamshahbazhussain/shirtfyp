const Router = require("express").Router()
const mongoose = require("mongoose")
const stripe = require('stripe')("sk_test_51LItchLoNvDBf5Y4aq5egMAyOmqroc8UBBrsZLFXEh8sIJpmX2pU0tFz8HOrwRLH7U7GZmqe18bdcOmbjFRv525p00WPK5lfhi")

const PaymentsModel = require("../Models/PaymentsModel")
const cartModel = require("../Models/CartModel")
const userModel = require("../Models/AuthModel")


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const payment = await PaymentsModel.findById(id)
            if (payment) {
                res.status(200).json({
                    msg: "payment Found Success",
                    data: payment
                })
            } else {
                res.status(401).json({
                    msg: "payment not Found"
                })
            }
        } else {
            const payments = await PaymentsModel.find()
            if (payments) {
                res.status(200).json({
                    msg: "All payments Found Success",
                    data: payments
                })
            } else {
                res.status(401).json({
                    msg: "All payments not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at Getting payments",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { price, products, user } = req.body
    let productsId = []
    try {

        const userData = await userModel.findOne({ email: user })

        let process1 = products.map((data) => {
            productsId.push(data._id)
        })

        await Promise.all(process1)

        const cartData = await cartModel.create({
            user: userData._id,
            price,
            products: productsId
        })

        await cartData.save()


        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'USD',
            amount: price * 100,
            automatic_payment_methods: { enabled: true }
        });
        
        const paymentData = await PaymentsModel.create({
            user: userData._id,
            amount: price,
            status: "Processing",
            cart: cartData._id
        })

        await paymentData.save()
        // Send publishable key and PaymentIntent details to client
        res.status(200).json({
            msg: "ClientSecret Genrated Success",
            data: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error at Adding Payment",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updatePayment = await PaymentsModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updatePayment) {
                res.status(200).json({
                    msg: "Payment Update Success",
                    data: updatePayment
                })
            } else {
                res.status(401).json({
                    msg: "Payment not Found"
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
            msg: "Internal Server Error at Updating Payment",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deletePayment = await PaymentsModel.findByIdAndDelete(id)
            if (deletePayment) {
                res.status(200).json({
                    msg: "Payment Deleted Success",
                    data: deletePayment
                })
            } else {
                res.status(404).json({
                    msg: "Payment not Found",
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
            msg: "Internal Server Error at Deleting Payment",
            error
        })
    }
})

module.exports = Router