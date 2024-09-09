// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Flex, Typography, Form, Input, Button } from "antd";

function Register() {
  const handleRegister = (values) => {
    console.log(values);
  };
  return (
    <Card className="form-container">
      <Flex>
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusice access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input full name!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
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
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="btn"
              >
                Create Account
              </Button>
            </Form.Item>
            <Form.Item>
              <a to="/login">
                {" "}
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </a>
            </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
        <Flex></Flex>
      </Flex>
    </Card>
  );
}

export default Register;
