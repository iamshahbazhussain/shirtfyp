const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductModel"
        }
    ],
    quantity: {
        type: String
    },
    price: {
        type: String
    },
    status: {
        type: String
    }

})

module.exports = mongoose.model("CartModel", cartSchema);