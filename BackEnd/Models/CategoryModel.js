const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    title: {
        type: String
    }

})

module.exports = mongoose.model("CategoryModel", categorySchema);