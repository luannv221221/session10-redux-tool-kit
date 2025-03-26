import { Button, FloatButton, Layout, Modal, Space, Spin, Table, Tag } from 'antd'
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
            key: 'categoryName'
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
    const isLoading = useSelector((sate) => sate.categories.loading);
    const dispath = useDispatch();
    useEffect(() => {
        dispath(getCategoriesThunk())

    }, [])

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
    return (
        <Layout>

            <Layout>

                <Content>

                    <Button onClick={handleAdd}>Thêm mới</Button>
                    {isLoading ? <Spin /> : <Table columns={columns} dataSource={dataCategory} pagination={false} rowKey={record => record.id} />}

                </Content>
            </Layout>

            <ModalCategory isModalOpen={isModalOpen} handleCancel={handleCancel} id={id} />
        </Layout>
    )
}

export default Category