// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Card, Flex, Typography, Form, Input, Button, } from "antd";
import { Link } from 'react-router-dom'
import loginImage from '../assets/register.png'


const Login = () => {
  const handleLogin = async (values)=>{
    console.log(values)
  }
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex flex={1}>
          <img src={loginImage} className="auth-image" />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock you world.
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
     
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your password"
              />
            </Form.Item>
            
              {/* {error && <Alert description={error} type='error' showIcon closable className="alert" /> } */}
            
            <Form.Item>
              <Button
                // type={`${loading ? '' : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {/* {leading ? <Spin /> : "Create Account"} */}
                Sign In
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                {" "}
                <Button size="large" className="btn">
                  Create an account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
       
      </Flex>
    </Card>
  )
}

export default Login