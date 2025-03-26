import React from 'react'
import { Outlet } from 'react-router-dom'

function CategoryLayout() {
    return (
        <>
            <h1 className='text-center'>Quản lý danh mục</h1>
            <Outlet></Outlet>
        </>
    )
}

export default CategoryLayout