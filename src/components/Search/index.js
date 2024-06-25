import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../Button"
import { getCategorys } from '../../services/categoryService'

export default function Search() {
    const [categorys, setCategorys] = useState([])
    const [valSearch, setValSearch] = useState('')
    const [curCategory, setCurCategory] = useState(0)
    const navigate = useNavigate()

    const hanldeSearch = () => {
        if (valSearch.length > 0) {
            navigate(`/search/${valSearch}`)
            setValSearch('')
        } else if (curCategory > 0) {
            navigate(`/filter/${curCategory}`)
        } else {
            alert('Nhập tên rồi tìm kiếm bạn ơi!!!')
        }
    }

    const getData = async () => {
        const rs = await getCategorys()
        setCategorys(rs.data)
    }
    const handleSetCategory = (e) => {
        setCurCategory(e.target.value)
        navigate(`/filter/${curCategory}`)
    }

    useEffect(() => {
        getData()
    }, [valSearch, curCategory])

    return (
        <div className="flex w-full items-center">
            <div className="flex-1 relative mr-10">
                <input type="text" className="border-colorPrimaryThin border rounded-md w-full text-sm font-normal px-4 py-1 focus:border-colorPrimary"
                    placeholder="Nhập tên để tìm loại virus..." value={valSearch} onChange={e => setValSearch(e.target.value)} />
                <Button className={'text-xs bg-colorPrimaryThin block px-3 py-1 rounded text-white absolute right-1 top-1/2 translate-y-[-50%]'} onClick={hanldeSearch}>Tìm</Button>
            </div>
            <div className="flex-none w-1/4">
                <select className='w-full p-2 border' onChange={handleSetCategory}>
                    {categorys.map((category, i) => (
                        <option key={i} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}