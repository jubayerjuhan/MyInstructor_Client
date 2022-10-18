import React, { useEffect } from "react";
import Button from "../../components/core/Button/Button";
import loginImage from "../../assets/undraw_Login_re_4vu2.png";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../utils/validation_schemas/login_schema";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginLearner } from "../../redux/actions/learner_actions";
import { toast } from "material-react-toastify";
import { CLEAR_ERROR } from "../../redux/reducer/reduxNamings";
import { useLocation } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { error, user } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  useEffect(() => {
    if (user) window.location.href = "/";
  }, [user]);

  // submit form
  const onSubmit = (data) => handleLogin(data);

  const inputFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter Password",
      type: "password",
    },
  ];

  const handleLogin = async (data) => {
    const login = await dispatch(loginLearner(data));
    if (login === true) {
      window.location.href = state ? state.from.location : "/";
    }
  };

  if (error) {
    toast.error(error);
    dispatch({ type: CLEAR_ERROR });
  }
  if (user) return <></>;
  return (
    <>
      <Navbar></Navbar>
      <div className="login__component">
        <div className="login__graphics">
          <img src={loginImage} alt="Login Graphics Vector" />
        </div>

        <form
          action=""
          className="login__form sectionPadding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login__form-header">
            <p className="title">Learner's Login</p>
            <p className="description">
              If You Don't Have Any Account.{" "}
              <a href="/register">Register Here</a>
            </p>
          </div>{" "}
          {inputFields.map((field, key) => {
            return (
              <div>
                <input
                  key={key}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="form-control input__element login"
                />
                {errors[field.name] && (
                  <p className="input__errorMessage">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            );
          })}
          <Button width="100%" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    </>
  );
};

export default Login;
