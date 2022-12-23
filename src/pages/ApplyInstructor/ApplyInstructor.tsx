import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../assets/apply-instructor.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyInstructorSchema } from "../../utils/validation_schemas/apply_schema";
import { applyInstructorFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import "./ApplyInstructor.scss";
import Button from "../../components/core/Button/Button";
import { applyAsInstructor } from "../../api_calls/apply_api";
import { toast } from "material-react-toastify";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import TextField from "@mui/material/TextField";
import { AllLanguages } from "../../json_data/languages";
import { Autocomplete } from "@mui/material";
import { client } from "../../client";
import MaterialFileSelect from "../../components/MaterialFileSelect/MaterialFileSelect";
import InstructorAgreement from "../../components/InstructorAgreement/InstructorAgreement";
import { useForm } from "react-hook-form";

const ApplyInstructor = () => {
  const [suburbs, setSuburbs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextpage, setNextpage] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applyInstructorSchema),
  });

  // handle submit
  const onSubmit = (data: any) => submitData(data);

  // handleSuburbSearch
  const handleSuburbSearch = async (e: any) => {
    if (e.target.value.length === 0) setSuburbs([]);
    if (e.target.value.length < 2) return;
    setLoading(true);
    const { data } = await client.get(`/search-suburbs/${e.target.value}`);
    setLoading(false);
    setSuburbs(data.suburbs);
  };

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

  console.log(suburbs, "suburbs...");

  return (
    <>
      <HelmetTitle title={"Apply As Instructor"} />
      <Navbar />
      <div className="apply__instructor-main sectionPadding">
        <div className="apply__image">
          <img src={image} alt="apply as instructor hero img" />
        </div>
        {!nextpage ? (
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

                // if field type us autocomplete
                if (field.type === "autocomplete") {
                  return (
                    <Autocomplete
                      multiple={true}
                      id="tags-standard"
                      loading={loading}
                      options={
                        field.name === "languages" ? AllLanguages : suburbs
                      }
                      getOptionLabel={(option: any) =>
                        field.name === "languages" ? option.name : option.suburb
                      }
                      renderInput={(params) => (
                        <>
                          <TextField
                            {...params}
                            InputLabelProps={{
                              shrink: field.type === "date" ? true : true,
                            }}
                            onChange={handleSuburbSearch}
                            variant="outlined"
                            label={field.label + " *"}
                            placeholder={field.label}
                          />
                        </>
                      )}
                    />
                  );
                }

                // if field type is select
                if (field.type === "select")
                  return (
                    <>
                      <select name="" className="select__field">
                        <option value={""}>{field.placeholder}</option>
                        {field.options?.map((opt: string | any) => (
                          <option
                            value={field.name === "languages" ? opt?.name : opt}
                          >
                            {field.name === "languages" ? opt?.name : opt}
                          </option>
                        ))}
                      </select>
                    </>
                  );

                // if input type is files
                if (field.type === "file") {
                  return (
                    <MaterialFileSelect
                      title={"Select Photo"}
                      label={field.label}
                      placeholder={field.placeholder}
                    />
                  );
                }
                return (
                  <div className="input__wrapper">
                    <TextField
                      type={field.type}
                      id="outlined-basic"
                      label={field.label + " *"}
                      placeholder={field.placeholder}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: field.type === "date" ? true : true,
                      }}
                      sx={{ width: "100%" }}
                    />
                    {errors[field.name] && (
                      <p className="input__errorMessage">
                        <>
                          {errors[field.name as keyof typeof errors]?.message}
                        </>
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
        ) : (
          <InstructorAgreement />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ApplyInstructor;
