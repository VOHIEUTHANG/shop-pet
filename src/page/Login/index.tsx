import { Form, Input } from "antd";
import Button from "../../components/Button";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useLoginMutation } from "../../apis/user";
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import {  useSelector } from "react-redux";
import {  selectCurrentUser, selectCurrentToken } from "../../auth/authSlice";

const Login = function () {
  const [login] = useLoginMutation();
  const user = useSelector(selectCurrentUser);
  const accessToken = useSelector(selectCurrentToken);

  console.log({ user, accessToken });
  const onFinish = async ({ password, username }: { username: string; password: string; }) => {
      await handleLogIn({
        username,
        password,
        typeLogin: "DEFAULT",
        imgUrl: "",
      });
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
    await handleLogIn({
        email: profileObj?.email, 
        fullName: profileObj?.name, 
        typeLogin: "GOOGLE",
        username: profileObj.email,
        imgUrl: profileObj?.imageUrl || "",
    })
  }

  const handleResponseFacebook = async (responseFB: any) => {
    const { data } = responseFB?.picture;
    await handleLogIn({ 
      email: responseFB?.email,
      fullName: responseFB?.name,
      typeLogin: "FACEBOOK",
      username: responseFB?.email, 
      imgUrl: data?.url || "",
    })
  }

  const handleLogIn = async ({ email, fullName, typeLogin, username, password, imgUrl }: 
    { email?: string; fullName?: string; typeLogin: string; username?: string, password?: string, imgUrl: string }) => {
      const toastId = toast.loading("Process is pending...");
      try {
        const response = await login({ username, password, typeLogin, fullName, email, imgUrl }).unwrap();
        toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Login Success", isLoading: false, autoClose: 3000, closeButton: true });
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

            <Form.Item wrapperCol={{ offset: 3 }}>
              <div className="flex justify-evenly">
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
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
                    textButton="Sign in with Facebook"
                    />,
              </div>
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
