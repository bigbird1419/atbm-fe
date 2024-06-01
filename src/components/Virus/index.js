import { useEffect, useState } from "react"

import { getMalwares } from '../../services/malwareService'
import VirusItem from "./VirusItem"
import { KEY } from "../../constants/pathService"
import Pagination from "../Pagination"

export default function Virus({ name = '', page = 1, size = 10, key = KEY }) {
    const [virus, setVirus] = useState([])
    const [curPage, setCurPage] = useState(page)
    const [totalPage, setTotolPage] = useState(0)

    const getData = async (name, page, size, key) => {
        const rs = await getMalwares({ name, page, size, key })
        setVirus(rs.data)
        setTotolPage(rs.totalPage)
    }

    useEffect(() => {
        getData(name, page, size, key)
    }, [name, page, size, key])

    return (
        <div className="wrapper">
            {virus.length > 0 ?
                <div>
                    <div>
                        {virus.map((data, i) => (
                            <VirusItem data={data} key={i} />
                        ))}
                    </div>
                    <div className="flex justify-end items-center mt-4">
                        <Pagination totalPage={totalPage} curPage={curPage} setCurPage={setCurPage} />
                    </div>
                </div> :
                <div>
                    <h1 className="text-center text-colorPrimary my-3 font-medium">Không tìm thấy hoặc chưa có dữ liệu!!!</h1>
                </div>
            }
        </div>
    )
}