import { Form, Input } from "antd";
import Button from "../../components/Button";

const Register = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center page-wrapper h-full">
        <div className="form-container">
          <div className="form-title">Register</div>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                {
                  min: 4,
                  message: "Username must be at least 4 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Full name"
              name="name"
              rules={[
                { required: true, message: "Please input your full name!" },
                {
                  min: 2,
                  message: "Username must be at least 2 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your full name!" },
                {
                  type: "email",
                  message: "Invalid email type!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Configm password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your configm password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="flex justify-between">
              <Button type="link" href="/user/login">
                Available acccount
              </Button>
              <Button type="link" href="/">
                Return home
              </Button>
            </div>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="outline" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
