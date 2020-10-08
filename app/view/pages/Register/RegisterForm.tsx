import React from 'react';
import { Form, Input, Button } from 'antd';
import './register.less';
import { MailOutlined, LockOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="back-register">
            <div className="register-box">
                <h3>注册账户</h3>
                <Form layout="vertical" className="register-form">
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: '不是有效的电子邮箱',
                            },
                            {
                                required: true,
                                message: '电子邮箱必填',
                            },
                        ]}>
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="输入您的电子邮箱"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input
                            prefix={<HeartOutlined />}
                            placeholder="请输入用户名"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="请输入你的密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="repassword"
                        rules={[
                            { required: true, message: '请再次输入密码' },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('两次密码不一致');
                                },
                            }),
                        ]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="请输入你的密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                    <Link to="/login" className="trans-login-form">
                        登录账户
                    </Link>
                </Form>
            </div>
        </div>
    );
};
export default RegisterForm;
