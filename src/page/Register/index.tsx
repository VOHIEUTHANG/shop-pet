import { Form, Input, message } from "antd";
import Button from "../../components/Button";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { useRegisMutation } from "../../apis/user";
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";


const Register = () => {
  const [register, {  } ] = useRegisMutation();
  const onFinish = async ({ email, name, password, username }: { email: string, name: string, password: string, username: string }) => {
    console.log("Success:");
    await registerUser({
      email,
      fullName: name,
      typeLogin: "DEFAULT",
      username,
      password,
      imgUrl: "",
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const clientId = "467108775021-7g8htlvsvjt639qi5o2s3icarar0n8j6.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId });
    });
  });

  if (typeof window !== "undefined") {
    injectStyle();
  }

  const handleResponseGoogle = async (responseGG: any) => {
    const { profileObj } = responseGG || {};
    await registerUser({
        email: profileObj?.email, 
        fullName: profileObj?.name, 
        typeLogin: "GOOGLE",
        username: profileObj.email,
        imgUrl: profileObj?.imageUrl || "",
    })
  }

  const handleResponseFacebook = async (responseFB: any) => {
    const { data } = responseFB?.picture;
    await registerUser({ 
      email: responseFB?.email,
      fullName: responseFB?.name,
      typeLogin: "FACEBOOK",
      username: responseFB?.email, 
      imgUrl: data?.url || "",
    })
  }

  const registerUser = async ({ email, fullName, typeLogin, username, password, imgUrl }: 
    { email: string; fullName: string; typeLogin: string; username: string; password?: string; imgUrl: string }) => {
      const toastId = toast.loading("Process is pending...");
      try {
        const response = await register({
          email,
          fullName,
          typeLogin,
          username,
          password,
          imgUrl,
        }).unwrap();
        toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Register Success", isLoading: false, autoClose: 3000, closeButton: true });
        return response;
      } catch (error: any) {
        toast.update(toastId, { type: toast.TYPE.ERROR, render: error.message, isLoading: false, autoClose: 3000, closeButton: true });
    }
  }

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                { required: true, message: "Please input your email!" },
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
                  message: "Please input your confirm password!",
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

            <Form.Item wrapperCol={{ offset: 2 }}>
              <div className="flex justify-evenly">
                  <GoogleLogin
                    clientId="467108775021-7g8htlvsvjt639qi5o2s3icarar0n8j6.apps.googleusercontent.com"
                    buttonText="Sign up with Google"
                    onSuccess={handleResponseGoogle}
                    onFailure={handleResponseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />,
                  <FacebookLogin
                    appId="1162521731085220"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleResponseFacebook}
                    onFailure={handleResponseFacebook}
                    cssClass="btn-facebook"
                    textButton="Sign up with Facebook"
                    />,

              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
