import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase.config'

const useAuth = () => {
    const [currentUser, setCurrenUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrenUser(user)
            } else {
                setCurrenUser(null)
            }
        })
    })
    return {
        currentUser,
    }
}

export default useAuth