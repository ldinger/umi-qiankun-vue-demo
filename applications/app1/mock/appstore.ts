import { useState, useCallback } from 'react'
export default () => {
    const [user, setUser] = useState({})

    const setUserData = useCallback((userName, password) => {
        setUser({ userName, password })
    }, [])

    return { user, setUserData }
}
 