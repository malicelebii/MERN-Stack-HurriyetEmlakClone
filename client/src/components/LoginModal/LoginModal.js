import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser, registerUser } from "../../_actions/user_actions";
import { Formik } from "formik";
import * as yup from "yup";
import { Modal, Form, Button, Container } from "react-bootstrap/";
import { useDispatch,useSelector } from "react-redux";
import RegisterModal from "../RegisterModal/RegisterModal";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
  let user = useSelector(state => state.user);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  let LoginForm = (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };
          dispatch(loginUser(dataToSubmit))
            .then((res) => {
              if (res.payload.loginSuccess) {
                window.localStorage.setItem("userId", res.payload.userId);
                console.log("basarılı");
                setShow(false);
                if (rememberMe) {
                  window.localStorage.setItem("rememberMe", values.id);
                  console.log("hatırladı");
                } else {
                  localStorage.removeItem("rememberMe");
                  console.log("asd");
                }
                props.history.push("/");
                console.log("asd1");
              } else {
                setFormErrorMessage("Check out your Account or Password again");
                console.log("asd2");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Check out your Account or Password again");
              console.log(err);
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });

          setSubmitting(false);
          console.log(dataToSubmit);
        }, 500);
      }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
      
            <Form.Group controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
     
          {formErrorMessage && (
            <label>
              <p
                style={{
                  color: "#ff0000bf",
                  fontSize: "0.7rem",
                  border: "1px solid",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                {formErrorMessage}
              </p>
            </label>
          )}
          <Form.Group>
            <Form.Check
              required
              name="rememberMe"
              label="rememberMe"
              onChange={handleRememberMe}
              checked={rememberMe}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Form.Group>
          <a variant="primary" style={{float:"right"}}>Şifremi unuttum</a>
          </Form.Group>
          <Button type="submit" >Giriş Yap</Button>
        </Form>
      )}
    </Formik>
  );

  return (
    <>
    {!user?.userData?.isAuth &&
      <a variant="primary" onClick={handleShow} href="#">
        Giriş yap
      </a>}
      {/* {console.log(props.user)} hoc içinde auth ile kontrol et */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title >Üye girişi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Giriş
            </Button>
            <a href="#">Şifremi unuttum</a>
          </Form> */}
          {LoginForm}

          Üye değil misin ?
        </Modal.Body>
        <Modal.Footer>
          <RegisterModal
            handleShow2={handleShow2}
            show2={show2}
            handleClose={handleClose}
            handleClose2={handleClose2}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(LoginModal);
