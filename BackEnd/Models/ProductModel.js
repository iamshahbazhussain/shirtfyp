const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"CategoryModel"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"BrandModel"
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    img: {
        type: Object
    }

})

module.exports = mongoose.model("ProductModel", productSchema);