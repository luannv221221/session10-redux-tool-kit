import { Button, Layout, Modal, Space, Table, Tag } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Checkbox, Form, Input } from 'antd';
import ModalCategory from './ModalCategory';
function Category() {
    const [data, setData] = useState([])
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
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const getCategoriesAPI = () => {
        axios.get("http://localhost:8080/api/v1/admin/categories").then((response) => {
            console.log(response);
            setData(response.data.content);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getCategoriesAPI();
    }, [])

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return (
        <Layout>

            <Layout>

                <Content>

                    <Button onClick={() => setIsModalOpen(true)}>Thêm mới</Button>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Content>
            </Layout>

            <ModalCategory isModalOpen={isModalOpen} handleCancel={handleCancel} />
        </Layout>
    )
}

export default Category