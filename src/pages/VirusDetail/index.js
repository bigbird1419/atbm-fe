import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getMalwareById } from '../../services/malwareService'
import FormatDate from '../../components/FormatDate'

export default function VirusDetail() {
    const [virus, setVirus] = useState({})
    const { virusId } = useParams()

    const getData = async (virusId) => {
        const rs = await getMalwareById(virusId)
        setVirus(rs.data)
    }

    useEffect(() => {
        getData(virusId)
    }, [virusId])

    return (
        <div className="">
            {Object.keys(virus).length > 0 &&
                <div>
                    <div className="flex items-center w-full p-4 mt-8">
                        <div className="flex flex-none justify-center items-center h-20 w-20 border-4 border-colorSecondary rounded-full mr-4">
                            <p className="text-xl text-colorSecondary">{virus.score}</p>
                        </div>
                        <div className="flex-auto">
                            <p className="text-colorPrimary uppercase text-xl font-medium mb-2">{virus.name}</p>
                            <p className="text-colorPrimaryThin">{virus.description}</p>
                        </div>
                    </div>
                    <table className="mt-4 p-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead>
                            <tr>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Loại virus</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Cách thức tấn công</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Cách phòng tránh</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Ngày tạo</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Ngày cập nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left text-md px-6 py-4">{virus.category.name}</td>
                                <td className="text-left text-md px-6 py-4">{virus.infection}</td>
                                <td className="text-left text-md px-6 py-4">{virus.prevention}</td>
                                <td className="text-left text-md px-6 py-4">
                                    <FormatDate date={virus.createdDate} />
                                </td>
                                <td className="text-left text-md px-6 py-4">
                                    <FormatDate date={virus.updateDate} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}