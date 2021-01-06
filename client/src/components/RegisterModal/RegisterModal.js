import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Formik } from "formik";
import * as yup from "yup";
import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { Modal, Form, Button, Container } from "react-bootstrap/";

function RegisterModal(props) {
  const dispatch = useDispatch();

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });

  let RegisterForm = (
    <Container style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
          };

          dispatch(registerUser(dataToSubmit)).then((res) => {
            if (res.payload.success) {
              props.history.push("/login");
            } else {
              alert(res.payload.err.errmsg);
            }
          });

          setSubmitting(false);
          console.log(dataToSubmit);
        }, 500);

        props.handleClose2();
        props.handleClose();
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
          <Form.Group controlId="validationFormik03">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstname}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback>
              {" "}
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik04">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
            />
            <Form.Control.Feedback>
              {" "}
              {errors.lastName && touched.lastName && (
                <div className="input-feedback">{errors.lastName}</div>
              )}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
            />
            <Form.Control.Feedback>
              {" "}
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
          </Form.Group>
          <Form.Group controlId="validationFormik05">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback>
              {" "}
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="input-feedback">{errors.confirmPassword}</div>
              )}
            </Form.Control.Feedback>
          </Form.Group>

          {props.formErrorMessage && (
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
                {props.formErrorMessage}
              </p>
            </label>
          )}
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Accept Terms"
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Üyeliği tamamla</Button>
        </Form>
      )}
    </Formik>
    </Container>
  );

  return (
    <>
      <a href="#" variant="secondary" onClick={props.handleShow2}>
        Hemen üye ol
        <span
          style={{
            borderLeft: "6px solid black",
            height: "500px",
          }}
        ></span>{" "}
      </a>
      <Modal show={props.show2} onHide={props.handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Üye ol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {RegisterForm}
          {/* <Form>
                      <Form.Group>
                        <Form.Label>Ad</Form.Label>
                        <Form.Control type="text" placeholder="Ad" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Soyad</Form.Label>
                        <Form.Control type="text" placeholder="Soyad" />
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Kayıt ol
                      </Button>
                    </Form> */}
        </Modal.Body>
      </Modal>
      <a href="#">Kurumsal üye ol</a>
    </>
  );
}

export default withRouter(RegisterModal);
