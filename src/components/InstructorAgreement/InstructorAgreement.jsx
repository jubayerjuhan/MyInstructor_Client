import { InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AgreementForm from "../../AgreementForm/AgreementForm";
import { instructorAgreementFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import Button from "../core/Button/Button";
import MaterialFileSelect from "../MaterialFileSelect/MaterialFileSelect";
import "./InstructorAgreement.scss";

const InstructorAgreement = () => {
  const [signature, setSignature] = useState();
  const handleSignatureChange = (e) => {
    setSignature(e.target.files[0]);
  };
  return (
    <div className="apply__instructor-agreement">
      <AgreementForm
        date={Date.now()}
        instructorName={"Jubayer Hossain"}
        address={"45 Glen Ct, Marcoola, Marceti, QLD - 1320"}
        email={"davidjuhan23@gmail.com"}
        phone={"+8801620692839"}
      />
      <div className="signature">
        <MaterialFileSelect
          handleFileChange={handleSignatureChange}
          title={"Signature"}
          label={"Signature"}
          placeholder={"Please Upload a Clear Image of Your Signature"}
        />
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
                key={key}
                id="outlined-basic"
                label={field.label}
                variant="outlined"
              />
            </>
          );
        })}
      </div>
      <Button width={"100%"} title={"Apply Now"} />
    </div>
  );
};

export default InstructorAgreement;
