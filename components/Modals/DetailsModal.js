import React from 'react'
import store from '../../store/store';
import { observer } from 'mobx-react-lite';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Modal
} from 'antd';


function DetailsModal() {

    const [form] = Form.useForm();

    const { Option } = Select;

    const handleCancel = () => {
        store.setpassengerDetailsModel(false);
    };

    const onFinish = (values) => {

        const formData = {
            name: values.name,
            email: values.email,
            age: values.age,
            gender: values.gender,
            nationality: values.nationality,
            passportNumber: values.passportNumber,
            travelDate: values.dot,
        };

        console.log('Form values:', formData);

        form.resetFields();

        store.addToSummary(formData);

        store.setpassengerDetailsModel(false);
        store.setIsModalOpen(true);
    };

    const handleReset = () => {
        form.resetFields(); 
    };

    return (
        <>
            <Modal
                title="Fill Passenger Details"
                open={store.passengerDetailsModel}
                style={{ top: '30px' }}
                footer={null}
                onCancel={handleCancel}>

                <Form
                    form={form}
                    initialValues={{ name: '', email: '', age: '', gender: '', nationality: '', passportNumber: '', dot: null }}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // disabled={componentDisabled}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >

                    <div className='form-details'>
                        <Form.Item

                            name="name"
                            rules={[{  message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>

                        <Form.Item

                            name="email"
                            rules={[{  message: 'Please enter your email' }]}
                        >
                            <Input type="email" placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item

                            name="age"
                            rules={[{  message: 'Please enter your age' }]}
                        >
                            <Input type="number" placeholder="Enter your age" />
                        </Form.Item>

                        <p className='gender'>Gender : </p>
                        <Form.Item

                            name="gender"
                            rules={[{  message: 'Please select your gender' }]}
                        >
                            <Select placeholder = "Select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item

                            name="nationality"
                            rules={[{  message: 'Please enter your nationality' }]}
                        >
                            <Input placeholder="Enter your nationality" />
                        </Form.Item>

                        <Form.Item

                            name="passportNumber"
                            rules={[{  message: 'Please enter your passport number' }]}
                        >
                            <Input placeholder="Enter your passport number" />
                        </Form.Item>

                        <Form.Item

                            name="dot"
                            rules={[{ message: 'Please select your travel date' }]}
                        >
                            <DatePicker style={{ width: '100%' }} placeholder="Select your travel date" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={handleReset} style={{ marginLeft: 8 }}>
                                Reset
                            </Button>
                        </Form.Item>
                    </div>


                </Form>


            </Modal>
        </>
    )
}

export default observer(DetailsModal)