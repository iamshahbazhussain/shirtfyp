var express = require("express")
var cors = require("cors")
var env = require("dotenv")
const { default: mongoose } = require("mongoose")

const AuthRouter = require("./Routes/AuthRoute")
const CategoryRouter = require("./Routes/CategoryRoute")
const BrandRouter = require("./Routes/BrandRoute")
const ProductRouter = require("./Routes/ProductRoute")
const AddressRouter = require("./Routes/AddressRoute")
const CartRouter = require("./Routes/CartRoute")
const PaymentRouter = require("./Routes/PaymentsRoute")

const app = express()

app.use(express.json())
app.use(cors())
env.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log("DataBase Connection Fail ==== ", err);
})

app.use('/hit', async (req, res) => {
    res.status(200).json({
        message: "Hited"
    })
})

app.use("/api/auth", AuthRouter)
app.use("/api/category", CategoryRouter)
app.use("/api/brand", BrandRouter)
app.use("/api/product", ProductRouter)
app.use("/api/address", AddressRouter)
app.use("/api/cart", CartRouter)
app.use("/api/payment", PaymentRouter)


app.listen(process.env.PORT, () => console.log("ServerStarted"))