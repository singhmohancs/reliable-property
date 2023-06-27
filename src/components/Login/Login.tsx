import React from 'react'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd'

import styles from './Login.module.scss'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const LoginComponent: React.FC = () => (
  <div className={styles.loginWrapper}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      className={styles.loginForm}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Row align="middle">
        <Col span={12}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginButton}>
              Login
            </Button>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
)

export default LoginComponent
