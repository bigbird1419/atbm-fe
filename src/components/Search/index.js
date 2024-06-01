import { useState } from "react"
import Button from "../Button"
import { useNavigate } from "react-router-dom"

export default function Search() {
    const [valSearch, setValSearch] = useState('')
    const navigate = useNavigate()

    const hanldeSearch = () => {
        if (valSearch.length > 0) {
            navigate(`/search/${valSearch}`)
            setValSearch('')
        } else {
            alert('Nhập tên rồi tìm kiếm bé ơi!!!')
        }
    }

    return (
        <div className="w-full relative">
            <input type="text" className="border-colorPrimaryThin border rounded-md w-full text-sm font-normal px-4 py-1 focus:border-colorPrimary"
                placeholder="Nhập tên để tìm loại virus..." value={valSearch} onChange={e => setValSearch(e.target.value)} />
            <Button className={'text-xs bg-colorPrimaryThin block px-3 py-1 rounded text-white absolute right-1 top-1/2 translate-y-[-50%]'} onClick={hanldeSearch}>Tìm</Button>
        </div>
    )
}