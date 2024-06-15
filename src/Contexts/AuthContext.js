import { createContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false)

    const val = {
        isLogin,
        setIsLogin
    }

    return (
        <AuthContext.Provider value={val}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }