import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";

function Login() {
  const fomik = useFormik({
    initialValues: {name:""},
    
  })
  const [render, setRender] = useState(false);
  const [cookies, setCookies] = useCookies();
  useEffect(() => {
    const sessionLogin = JSON.parse(sessionStorage.getItem("userData"));
    setIslogin(sessionLogin?.email);
  }, [render]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIslogin] = useState("");
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (userData.email !== "" && userData.password !== "") {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      setCookies("userData", userData, { path: "/", maxAge: 86400 });
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setRender(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setIslogin(null);
    setRender(false);
  };
  console.log("cookies", cookies?.userData && cookies.userData);
  return (
    <div>
      {isLogin == null ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={userData.email}
              onChange={(e) => handleOnChange(e)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={(e) => handleOnChange(e)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <div>
          <h1>logout</h1>
          <Button onClick={handleLogout} variant="primary" type="submit">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Login;
