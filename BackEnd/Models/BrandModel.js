const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    title: {
        type: String
    }

})

module.exports = mongoose.model("BrandModel", brandSchema);