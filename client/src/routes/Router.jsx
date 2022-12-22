import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='login' element={<Login />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='checkout' element={<ProtectedRoute>
                <Checkout />
            </ProtectedRoute>} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='signup' element={<Signup />} />
            <Route path='cart' element={<Cart />} />

        </Routes>
    )
}

export default Router