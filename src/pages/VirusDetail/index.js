import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getMalwareById } from '../../services/malwareService'

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
                        <div className="flex justify-center items-center h-20 w-20 border-4 border-colorSecondary rounded-full mr-4">
                            <p className="text-xl text-colorSecondary">{virus.score}</p>
                        </div>
                        <div className="flex-auto">
                            <p className="text-colorPrimary uppercase text-xl font-medium">{virus.name}</p>
                            <p className="text-colorPrimaryThin">{virus.description}</p>
                        </div>
                    </div>
                    <table className="mt-4 w-full">
                        <thead>
                            <tr>
                                <th className="text-colorPrimary text-sm">Cách thức tấn công</th>
                                <th className="text-colorPrimary text-sm">Cách phòng tránh</th>
                                <th className="text-colorPrimary text-sm">Ngày tạo</th>
                                <th className="text-colorPrimary text-sm">Ngày cập nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{virus.infection}</td>
                                <td className="text-center">{virus.prevention}</td>
                                <td className="text-center">{virus.createdDate}</td>
                                <td className="text-center">{virus.updateDate || 'Không có'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}