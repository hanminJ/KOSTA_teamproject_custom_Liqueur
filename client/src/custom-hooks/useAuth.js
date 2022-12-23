import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const useAuth = () => {
    const [currentUser, setCurrenUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/authcheck').then((res)=>{
            var user =res.data 
        if (user) {
            setCurrenUser(user)
        } else {
            setCurrenUser(null)
        }})
    })
    return {
        currentUser,
    }
}

export default useAuth