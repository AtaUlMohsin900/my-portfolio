
'use client'
import React, { useEffect, useState } from "react"
import data from "../../util/blog.json"
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2"
import BlogCard3 from "./BlogCard3"
import Pagination from "./Pagination"

interface BlogPostProps {
    style?: number
    showItem?: number
    showPagination?: boolean
    
}

export default function BlogPost({ style, showItem, showPagination }: BlogPostProps) {
    const [currentPage, setCurrentPage] = useState<number>(1)
    // const showLimit = showItem 
    const paginationItem: number = 4

    const [pagination, setPagination] = useState<number[]>([])
    const [limit, setLimit] = useState<number>(showItem || 0)
    const [pages, setPages] = useState<number>(Math.ceil(data.length / limit))

    useEffect(() => {
        createPagination()
    }, [limit, pages, data.length])

    const createPagination = (): void => {
        // set pagination
        const arr: number[] = new Array(Math.ceil(data.length / limit))
            .fill(undefined)
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex: number = currentPage * limit - limit
    const endIndex: number = startIndex + limit
    const getPaginatedProducts: any[] = data.slice(startIndex, endIndex)

    const start: number = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    const end: number = start + paginationItem
    const getPaginationGroup: number[] = pagination.slice(start, end)

    const next = (): void => {
        setCurrentPage((page) => page + 1)
    }

    const prev = (): void => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item: number): void => {
        setCurrentPage(item)
    }
    return (
        <>


            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {getPaginatedProducts.map(item => (
                <React.Fragment key={item.id}>
                    {!style && <BlogCard1 item={item} />}
                    {style === 1 && <BlogCard1 item={item} />}
                    {style === 2 && <BlogCard2 item={item} />}
                    {style === 3 && <BlogCard3 item={item} />}
                </React.Fragment>
            ))}

            {showPagination &&
                <Pagination
                    getPaginationGroup={
                        getPaginationGroup
                    }
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}