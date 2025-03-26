import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { getCategoriesThunk } from './redux/reducres/categorySlice';
import { useDispatch } from 'react-redux';
function ModalCategory({ isModalOpen, handleCancel, id }) {
    const [form] = Form.useForm();
    const dispath = useDispatch();
    form.resetFields();
    if (id) {
        // call api lấy chi tiết danh mục 
        axios.get(`http://localhost:8080/api/v1/admin/categories/${id}`).then(res => {
            console.log("Data cần sứaar", res.data);
            form.setFieldsValue(res.data);
        }).catch(err => console.log(err));
    }
    const onFinish = values => {

        if (values.id) {
            axios.put(`http://localhost:8080/api/v1/admin/categories/${id}`, values).then((res) => {
                console.log(res);
                dispath(getCategoriesThunk());
                // gọi hàm đóng modal
                handleCancel();
            }).catch(e => console.log(e))
        } else {
            axios.post("http://localhost:8080/api/v1/admin/categories", values).then((res) => {
                console.log(res);
                dispath(getCategoriesThunk());
                // gọi hàm đóng modal
                handleCancel();
            }).catch(e => console.log(e))
        }
        form.resetFields();
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
                    form={form}
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
                    <Form.Item name="id">
                        <Input hidden={true} value={id} />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            {id ? "Update" : "Thêm mới"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalCategory