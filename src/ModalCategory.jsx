import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
function ModalCategory({ isModalOpen, handleCancel }) {
    const onFinish = values => {
        console.log('Success:', values);
        axios.post("http://localhost:8080/api/v1/admin/categories", values).then((res) => {
            console.log(res);
        }).catch(e => console.log(e))
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };



    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }} onCancel={handleCancel} >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="categoryName"
                        name="categoryName"
                        rules={[{ required: true, message: 'Please input your categoryName!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>


                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Thêm mới
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalCategory