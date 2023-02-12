import { Form, Input } from "antd";
import Button from "../../components/Button";

const Login = () => {
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
          <div className="form-title">Login</div>
          <Form
            name="basic"
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
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="flex justify-between">
              <Button type="link" href="/user/register">
                Create account
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

export default Login;
