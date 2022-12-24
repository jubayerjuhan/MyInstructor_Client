import { yupResolver } from "@hookform/resolvers/yup";
import { InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AgreementForm from "../../AgreementForm/AgreementForm";
import { instructorAgreementFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import { instructorAgreementSchema } from "../../utils/validation_schemas/apply_schema";
import Button from "../core/Button/Button";
import MaterialFileSelect from "../MaterialFileSelect/MaterialFileSelect";
import "./InstructorAgreement.scss";

const InstructorAgreement = ({ applyInputs }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [signature, setSignature] = useState();
  const handleSignatureChange = (e) => {
    setSignature(e.target.files[0]);
    setValue("signature", e.target?.files[0]);
  };

  // implement react hook form here for account details and signature
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(instructorAgreementSchema),
  });

  // on form submit
  const onSubmit = (data) => {
    console.log({ ...data, ...applyInputs }, "data.....");
  };

  return (
    <div className="apply__instructor-agreement">
      <AgreementForm
        date={Date.now()}
        instructorName={`${applyInputs?.firstName} ${applyInputs.lastName}`}
        address={applyInputs?.address}
        email={applyInputs?.email}
        phone={applyInputs?.phone}
      />
      <div className="signature">
        <MaterialFileSelect
          handleFileChange={handleSignatureChange}
          title={"Signature"}
          label={"Signature"}
          {...register("signature")}
          placeholder={"Please Upload a Clear Image of Your Signature"}
        />
        <p style={{ color: "red", marginTop: "10px", fontSize: "12px" }}>
          {errors.signature?.message}
        </p>
      </div>
      {signature && (
        <img
          src={URL.createObjectURL(signature)}
          alt="signature"
          style={{ height: 200, width: 200, marginTop: 20 }}
        />
      )}
      <div className="instructor__agreement-inputs">
        {instructorAgreementFields.map((field, key) => {
          return (
            <>
              <InputLabel>{field.label}</InputLabel>
              <TextField
                error={errors[field.name]}
                helperText={errors[field.name]?.message}
                {...register(field.name)}
                key={key}
                id="outlined-basic"
                label={field.label}
                variant="outlined"
              />
            </>
          );
        })}
      </div>
      <Button
        width={"100%"}
        title={"Apply Now"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default InstructorAgreement;
