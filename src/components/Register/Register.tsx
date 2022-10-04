import React from "react";
import Button from "../../components/core/Button/Button";
import loginImage from "../../assets/undraw_Login_re_4vu2.png";
import { useForm } from "react-hook-form";
import "./register.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../utils/validation_schemas/login_schema";
import Navbar from "../../components/Navbar/Navbar";
import { registerFields } from "./registerInputs";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Navbar></Navbar>
      <div className="register__component">
        <div className="register__graphics">
          <img src={loginImage} alt="register Graphics Vector" />
        </div>

        <form
          action=""
          className="register__form sectionPadding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="register__form-header">
            <p className="title">Learner's Register</p>
            <p className="description">
              If You Already Have a Account. <a href="/login">Login Here</a>
            </p>
          </div>
          {registerFields.map((field, key) => {
            return (
              <div className="input__wrapper_w-header">
                <p className="title">
                  {field.label} <span>*</span>
                </p>
                <input
                  key={key}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="form-control input__element login"
                />
              </div>
            );
          })}
          <Button width="100%" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    </>
  );
};

export default Register;
