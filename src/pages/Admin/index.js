import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import { getMalwares, getMalwareById, putMalware, postMalware, delMalware } from '../../services/malwareService'
import Pagination from '../../components/Pagination'

export default function Admin() {
    const [showCreate, setShowCreate] = useState(false)
    const [virus, setVirus] = useState([])
    const [curVir, setCurVir] = useState({})
    const [virName, setVirName] = useState(curVir.name || '')
    const [virDes, setVirDes] = useState(curVir.description || '')
    const [virScore, setVirScore] = useState(curVir.score || '')
    const [virInfec, setVirInfec] = useState(curVir.infection || '')
    const [virPrev, setVirPrev] = useState(curVir.prevention || '')

    const getData = async () => {
        const rs = await getMalwares()
        console.log(rs.data)
        setVirus(rs.data)
    }
    const getCurVir = async (id) => {
        const rs = await getMalwareById(id)
        setCurVir(rs.data)
        setShowCreate(true)
        setVirName(rs.data.name)
        setVirDes(rs.data.description)
        setVirScore(rs.data.score)
        setVirInfec(rs.data.infection)
        setVirPrev(rs.data.prevention)
    }
    const clearData = () => {
        setCurVir({})
        setVirName('')
        setVirDes('')
        setVirScore('')
        setVirInfec('')
        setVirPrev('')
    }
    const handleShowCreateMalware = () => {
        clearData()
        setShowCreate(true)
    }
    const handleSaveMalware = async () => {
        if (curVir.id != null) {
            try {
                const rs = await putMalware(curVir.id, {
                    name: virName,
                    description: virDes,
                    infection: virInfec,
                    prevention: virPrev,
                    score: virScore
                })
                await getData()
                clearData()
                setShowCreate(false)
                alert(`Sửa thành công mã độc ${rs.data.id} !!!`)
            } catch (error) {
                alert('Có lỗi xảy ra')
            }
        } else {
            try {
                const rs = await postMalware({
                    name: virName,
                    description: virDes,
                    infection: virInfec,
                    prevention: virPrev,
                    score: virScore
                })
                await getData()
                clearData()
                setShowCreate(false)
                alert(`Thêm thành công mã độc ${rs.data.id}!!!`)
            } catch (error) {
                alert('Có lỗi xảy ra')
            }
        }
    }
    const hanldeDeleteMalware = async (id) => {
        const rd = Math.floor(Math.random() * 100) + 1;
        const accept = prompt(`Nhập số ${rd} để xác nhận xóa=)))`)
        if (accept - rd === 0) {
            try {
                await delMalware(id)
                await getData()
                alert('Xóa thành công!!!')
            } catch (error) {
                alert('Có lỗi xảy ra')
            }
        } else {
            alert('Nhập sai thì hủy xóa!!!')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='wrapper mt-8'>
            {showCreate ?
                <div className="row">
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Tên mã độc</label>
                            <input className="w-full px-4 py-2" type="text" placeholder="Tên mã độc"
                                value={virName} onChange={e => setVirName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Điểm số</label>
                            <input className="w-full px-4 py-2" type="text" placeholder="Điểm số" value={virScore} onChange={e => setVirScore(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Cách thức tấn công</label>
                            <input className="w-full px-4 py-2" type="text" placeholder="Cách thức tấn công" value={virInfec} onChange={e => setVirInfec(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Phòng tránh</label>
                            <input className="w-full px-4 py-2" type="text" placeholder="Phòng tránh" value={virPrev} onChange={e => setVirPrev(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Mô tả</label>
                            <textarea className="w-full px-4 py-2" value={virDes} onChange={e => setVirDes(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <Button className={'block px-4 py-2 rounded bg-colorPrimaryThin  text-white'}
                            onClick={async () => await handleSaveMalware()}
                        >
                            {Object.keys(curVir).length > 0 ? 'Cập nhật' : 'Thêm'}
                        </Button>
                        <Button className={'block px-4 py-2 rounded bg-colorPrimaryThin  text-white'} onClick={() => setShowCreate(!showCreate)}>Hủy</Button>
                    </div>
                </div> :
                <div className='flex w-full justify-end mb-4'>
                    <Button className={'block px-4 py-2 rounded bg-colorPrimaryThin text-white'} onClick={handleShowCreateMalware}>Thêm mã độc</Button>
                </div>
            }
            {virus.length > 0 ?
                <div>
                    <table className="mt-4 p-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead>
                            <tr>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Tên mã</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Điểm số</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Mô tả</th>
                                <th scope='col' className="px-6 py-3 text-colorPrimary text-sm">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {virus.map((item, i) => (
                                <tr key={i} className='mb-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center text-sm">{item.name}</td>
                                    <td className="text-center text-sm px-6 py-4">{item.score}</td>
                                    <td className="text-center text-sm px-6 py-4">{item.description}</td>
                                    <td className="text-center text-sm px-6 py-4">
                                        <div className='flex w-full justify-around'>
                                            <Button className={'px-2 py-1 bg-colorPrimaryThin text-white block rounded'} onClick={async () => await getCurVir(item.id)}>Sửa</Button>
                                            <Button className={'px-2 py-1 bg-colorPrimaryThin text-white block rounded'}
                                                onClick={async () => await hanldeDeleteMalware(item.id)}
                                            >Xóa</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex mt-4 justify-end'>
                        <Pagination />
                    </div>
                </div>
                :
                <div>
                    <h1 className="text-center text-colorPrimary my-3 font-medium">Không tìm thấy hoặc chưa có dữ liệu!!!</h1>
                </div>
            }
        </div>
    )
}