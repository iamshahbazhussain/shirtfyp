import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Pages/Home/Home"
import Products from './Pages/Products/Products'
import Payment from './Pages/Payment/Payment'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Completion from './Pages/Payment/Completion'
import Login from "./Pages/Register/Userlogin/Userlogin"
import SignUp from "./Pages/Register/Signup/Signup"

import { useDispatch } from 'react-redux'
import { addProductData } from "./GlobalStore/actions/addProducts"
import { addUserData } from './GlobalStore/actions/addUserData'

import { ToastContainer, toast } from "react-toastify"
import { GettingProductsAPI } from './API/Products'


import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    let dispatch = useDispatch()

    let gettingProducts = async () => {
        let res = await GettingProductsAPI()
        if (res.error != null) {
            toast.error(res.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            dispatch(addProductData(res.data.data))
        }
    }


    useEffect(() => {
        gettingProducts()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/payment" component={Payment} />
                <Route path="/complete" component={Completion} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </>
    )
}

export default App