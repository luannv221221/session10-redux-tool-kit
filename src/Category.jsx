import { Button, FloatButton, Layout, Modal, Pagination, Space, Spin, Table, Tag } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Checkbox, Form, Input } from 'antd';
import ModalCategory from './ModalCategory';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk } from './redux/reducres/categorySlice';
import { data } from 'react-router-dom';

function Category() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'categoryName',
            key: 'categoryName',
            sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
        },
        {
            title: 'Desciption',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => (
                <>
                    <Tag color={status ? 'blue' : 'red'}>
                        {status ? 'active' : 'inactive'}
                    </Tag>

                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEdit(record.id)}>Edit</Button>
                </Space>
            ),
        },
    ];
    // khai báo data 
    const dataCategory = useSelector((state) => {
        // console.log(state);
        return state.categories.data;
    });
    // laasy ve tong so ban ghi 
    const total = useSelector((state) => state.categories.total);
    // const pageSize = useSelector((state) => state.categories.pageSize);
    const isLoading = useSelector((sate) => sate.categories.loading);
    const dispath = useDispatch();

    const [currentPage, setCurrentPage] = useState(1)
    const [size, setSize] = useState(5);
    useEffect(() => {
        dispath(getCategoriesThunk({ page: currentPage, size: size }))

    }, [currentPage, size])

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleEdit = (id) => {
        console.log(id);
        setId(id);
        setIsModalOpen(true);
    }

    const handleAdd = () => {

        setIsModalOpen(true)
    }
    // xử lý sửa 
    const [id, setId] = useState();

    const onChangePage = (page) => {
        // cap nhat lai currentPgae
        setCurrentPage(page);
    }

    const onShowSizeChange = (current, size) => {
        setSize(size);
        // setCurrentPage(current);
    }
    return (
        <Layout>

            <Layout>

                <Content>

                    <Button onClick={handleAdd}>Thêm mới {currentPage}</Button>
                    {isLoading ? <Spin /> :
                        <>
                            <Table columns={columns} dataSource={dataCategory} pagination={false} rowKey={record => record.id} />
                            <Pagination
                                align="center"
                                defaultCurrent={currentPage}
                                total={total}
                                pageSize={size}
                                onChange={(currentPage) => onChangePage(currentPage)}
                                showSizeChanger
                                onShowSizeChange={(current, size) => onShowSizeChange(current, size)}
                                pageSizeOptions={[5, 10, 15, 20, 25, 30]}
                            />
                        </>

                    }

                </Content>
            </Layout>

            <ModalCategory isModalOpen={isModalOpen} handleCancel={handleCancel} id={id} />
        </Layout>
    )
}

export default Category