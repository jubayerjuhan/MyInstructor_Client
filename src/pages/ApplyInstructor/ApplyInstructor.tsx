import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../assets/apply-instructor.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyInstructorSchema } from "../../utils/validation_schemas/apply_schema";
import { applyInstructorFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import "./ApplyInstructor.scss";
import Button from "../../components/core/Button/Button";
import { applyAsInstructor } from "../../api_calls/apply_api";
import { toast } from "material-react-toastify";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
const ApplyInstructor = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applyInstructorSchema),
  });

  // handle submit
  const onSubmit = (data: any) => submitData(data);

  // submit data
  const submitData = async (data: any) => {
    setLoading(true);
    const { message, success } = await applyAsInstructor(data);

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    toast.success("Successfully Submitted Your Information");
    setLoading(false);
  };

  return (
    <>
      <HelmetTitle title={"Apply As Instructor"} />
      <Navbar />
      <div className="apply__instructor-main sectionPadding">
        <div className="apply__image">
          <img src={image} alt="" />
        </div>
        <div className="apply__instructor">
          <p className="title">Apply As Instructor</p>
          <div className="apply__instructor-fields">
            {applyInstructorFields.map((field, key) => {
              if (field.type === "textarea")
                return (
                  <div className="input__wrapper_w-header" key={key}>
                    <p className="title">{field.label}</p>
                    <textarea
                      style={{ height: 100, width: "100%" }}
                      className="input__element"
                      id=""
                      rows={5}
                      {...register(field.name)}
                    ></textarea>
                  </div>
                );
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
                      <>{errors[field.name as keyof typeof errors]?.message}</>
                    </p>
                  )}
                </div>
              );
            })}
            <Button
              title="Submit"
              width={"100%"}
              loading={loading}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyInstructor;
