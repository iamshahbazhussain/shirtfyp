const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    address: {
        type: String
    },
    country: {
        type: String
    }

})

module.exports = mongoose.model("AddressModel", addressSchema);