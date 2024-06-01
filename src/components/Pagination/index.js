import { memo, useCallback, useEffect, useState } from "react"

import Button from "../Button"

function Pagination({ totalPage, curPage, setCurPage = () => { } }) {
    const [pages, setPages] = useState([])

    const handlePrevPage = useCallback(() => {
        if (curPage > 1) {
            setCurPage(val => val - 1)
        }
    }, [curPage, setCurPage])
    const handleNextPage = useCallback(() => {
        if (curPage < totalPage + 1) {
            setCurPage(val => val + 1)
        }
    }, [curPage, setCurPage, totalPage])
    const handleSetCurPage = useCallback((page) => {
        setCurPage(page)
    }, [setCurPage])

    useEffect(() => {
        const arr = []
        for (let i = curPage - 2; i <= totalPage; i++) {
            if (arr.length < 5 && i > 0) {
                arr.push(i)
            }
        }
        setPages(arr)
    }, [totalPage, curPage])

    return (
        <div className="wrapper">
            <div className="container">
                {pages.length > 0 &&
                    <div className="mt-6 flex justify-end">
                        <Button normal onClick={() => handlePrevPage()}
                            className={curPage === 1 ? 'cursor-not-allowed block text-sm px-3 py-1 m-2' : 'bg-colorSecondary text-white block text-sm px-3 py-1 m-2'}
                        >
                            <i className="fa-solid fa-angle-left"></i>
                        </Button>

                        {pages.map((page) => (
                            <Button key={page} normal onClick={() => handleSetCurPage(page)}
                                className={page === curPage ? 'bg-colorSecondary text-white block text-sm px-3 py-1 m-2' : 'border-2 border-colorSecondary block text-sm px-3 py-1 m-2'}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button normal onClick={() => handleNextPage()}
                            className={curPage === totalPage + 1 ? 'cursor-not-allowed block text-sm px-3 py-1 m-2' : 'bg-colorSecondary text-white block text-sm px-3 py-1 m-2'}
                        >
                            <i className="fa-solid fa-angle-right"></i>
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default memo(Pagination)