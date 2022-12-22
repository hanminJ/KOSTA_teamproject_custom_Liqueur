import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            )

            state.totalQuantity++

            if (!existingItem) {
                // axios.post('http://localhost:8080/scarpbook/add',{user_id:'1',product_id:newItem.id}).then(re)
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                    
                })
            }

            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)

            console.log(state.totalQuantity)
            console.log(state.cartItems)
            console.log(newItem)
        },


        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)

        }
    },


});

export const cartActions = cartSlice.actions

export default cartSlice.reducer