const cloudinary = require("cloudinary").v2
const env = require("dotenv")
env.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

let uploadCDN = async (file, name) => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        let upload = await cloudinary.uploader.upload(file, (err, result) => {
            if (err) {
                resolved.error = {
                    message: "UploadCDN Failed",
                    err
                }
            } else {
                resolved.data = {
                    [name]: {
                        public: result.url,
                        public_id: result.public_id
                    }
                }
            }
        })
    } catch (error) {
        resolved.error = {
            message: "Internal Server Error at UploadCDN",
            error
        }
    }

    return resolved

}

module.exports = { cloudinary, uploadCDN }