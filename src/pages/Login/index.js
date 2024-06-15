import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../Contexts/AuthContext'
import Button from '../../components/Button'
import { accounts } from '../../constants/accounts'

export default function Login() {
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const hanldeSignIn = async (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('Email và mật khẩu không được để trống')
            return
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
            alert('Email chưa đúng định dạng')
            return
        } else if (password.length < 8) {
            alert('Mật khẩu phải từ 8 kí tự')
            return
        } else {
            if (email === accounts.email && btoa(password) === accounts.password) {
                setIsLogin(true)
                navigate('/admin')
            }else{
                alert('Tài khoản hoặc mật khẩu không chính xác!!!')
            }
        }
    }

    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }else{
            navigate('/admin')
        }
    }, [isLogin, navigate])

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content mt-20">
                            <h1 className="text-center font-bold text-6xl text-colorPrimary">Login</h1>
                            <div className={'flex flex-col justify-center items-center mt-10'}>
                                <form className='flex flex-col justify-center items-center'>
                                    <input className={'min-w-80 p-2 mb-2  border focus:border-colorPrimary focus:outline-colorPrimary placeholder:text-sm'} type='text' placeholder='Enter your username...'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <input className={'min-w-80 p-2 mb-4 border focus:border-colorPrimary focus:outline-colorPrimary placeholder:text-sm'} type='password' placeholder='Enter your password...' value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <Button
                                        onClick={e => hanldeSignIn(e)}
                                        className={'min-w-80 bg-colorPrimary p-2 text-md text-white'}>Sign in</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}