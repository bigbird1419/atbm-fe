import { useState } from "react"

import Search from "../../components/Search"
import Virus from "../../components/Virus"
import Button from "../../components/Button"
import logo from '../../assets/icon.png'

export default function Home() {
    const [toggleShow, setToggleShow] = useState(true)
    const hanldeShowList = () => {
        setToggleShow(true)
    }
    const hanldeShowSearch = () => {
        setToggleShow(false)
    }

    return (
        <div className="wrapper">
            <div className="flex justify-center items-center">
                <img src={logo} alt="" className="mr-4" />
                <h1 className="text-5xl text-colorPrimary font-bold">Kho lưu trữ dữ liệu mã độc</h1>
            </div>
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <Button onClick={hanldeShowList} className={toggleShow ? 'text-colorPrimary block border-b-2 border-b-colorPrimary w-full text-center text-md font-medium px-4 py-2' : ' px-4 py-2'}>Xem danh sách virus</Button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <Button onClick={hanldeShowSearch} className={!toggleShow ? 'text-colorPrimary block border-b-2 border-b-colorPrimary w-full text-center text-md font-medium px-4 py-2' : ' px-4 py-2'}>Tìm kiếm</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {toggleShow ?
                        <div>
                            <Virus />
                        </div>
                        :
                        <div>
                            <Search />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}