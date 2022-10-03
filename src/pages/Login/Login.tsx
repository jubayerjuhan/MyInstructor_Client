import React from "react";
import Button from "../../components/core/Button/Button";
import loginImage from "../../assets/undraw_Login_re_4vu2.png";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../utils/validation_schemas/login_schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
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
  return (
    <>
      <div className="login__component">
        <div className="login__graphics">
          <img src={loginImage} alt="Login Graphics Vector" />
        </div>

        <form
          action=""
          className="login__form sectionPadding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="title">Learner's Login</p>
          {inputFields.map((field, key) => {
            return (
              <input
                key={key}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name)}
                className="form-control input__element login"
              />
            );
          })}
          <Button width="100%" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    </>
  );
};

export default Login;
