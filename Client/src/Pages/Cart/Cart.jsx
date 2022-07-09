import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from "@mui/material"

import { useSelector, useDispatch } from "react-redux"
import { addToCartData, removeFromCartData } from "../../GlobalStore/actions/addToCart"

import Payment from "../Payment/Payment"

import './Cart.scss'

const Cart = (props) => {
    let history = useHistory()
    let dispatch = useDispatch()

    const cartData = useSelector((state) => state.cartData)

    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (data) => {
        dispatch(addToCartData(data))
    }
    const removeFromCart = (data) => {
        dispatch(removeFromCartData(data))
    }

    const calculatingAmount = async () => {
        let singleAmounts = []
        let amount = 0
        let process = cartData.map((data) => {
            singleAmounts.push(data.price * data.qty)
        })
        await Promise.all(process)
        let process2 = singleAmounts.map((val) => {
            amount = amount + val
        })
        await Promise.all(process2)
        setTotalPrice(amount)
    }

    useEffect(() => {
        if (cartData && cartData.length >= 1) {
            calculatingAmount()
        }
    }, [cartData])

    const goToCheckOut = () => {
        props.setTotalPrice(totalPrice)
        props.setPath("checkout")
    }

    return (
        <>
            <div class="cart_container">

                <div class="cart transition is-open">

                    <div class="table">

                        <div class="layout-inline row th">
                            <div class="col col-pro">Product</div>
                            <div class="col col-Price align-center">Size</div>
                            <div class="col col-price align-center">
                                Price
                            </div>
                            <div class="col col-qty align-center">QTY</div>
                            <div class="col end align-center">Total</div>
                        </div>

                        {
                            cartData && cartData.length >= 1 && cartData.map((data) => {
                                return (
                                    <>
                                        <div class="layout-inline row">

                                            <div class="col col-pro layout-inline">
                                                <img src={data.img.public} alt="kitten" />
                                                <p>{data.title}</p>
                                            </div>

                                            <div class="col col-price col-numeric align-center ">
                                                <select name="" id="">
                                                    <option value="XS">XS</option>
                                                    <option value="S">Small</option>
                                                    <option value="M">Medium</option>
                                                    <option value="L">Large</option>
                                                    <option value="XL">XL</option>
                                                </select>
                                            </div>
                                            <div class="col col-price col-numeric align-center ">
                                                <p>${data.price}</p>
                                            </div>

                                            <div class="col col-qty layout-inline">
                                                <div onClick={() => removeFromCart(data)} class="qty qty-minus">-</div>
                                                <input type="numeric" value={data.qty} />
                                                <div onClick={() => addToCart(data)} class="qty qty-plus">+</div>
                                            </div>

                                            <div class="col col-vat col-numeric end align-center">
                                                <p>${data.price * data.qty}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }

                        <div class="tf">
                            <div class="row layout-inline">
                                <div class="col align-center">
                                    <p>SUB TOTAL</p>
                                </div>
                                <div style={{ color: "red", fontWeight: "bold" }} class="col align-center"> {totalPrice} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout_btn">
                    <Button onClick={goToCheckOut} className='btn'> Checkout </Button>
                </div>
            </div>
        </>

    )
}


export default Cart