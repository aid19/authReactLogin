// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Flex, Typography, Form, Input } from "antd";

function Register() {
  const handleRegister = (values) => {
    console.log(values);
  };
  return (
    <Card>
      <Flex>
        {/* form */}
        <Flex>
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
                  message: "please input full name!",
                },
              ]}
            >
              <Input placeholder="Enter your full name" />
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
