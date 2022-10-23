import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./BookingInformation.scss";
import states from "../../utils/australiaState.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/core/Button/Button";
import CustomPopupModal from "../../components/CustomPopupModal/CustomPopupModal";

const BookingInformation = () => {
  const [modal, setModal] = useState({
    visible: false,
    title: "",
    description: "",
  });
  const pickupDetailsField = [
    { name: "pickup_address", label: " Pickup Address", type: "text" },
    { name: "suburb", label: "Suburb", type: "text" },
    { name: "postCode", label: "Post Code", type: "text" },
    { name: "state", label: "State", type: "select", options: states },
  ];

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(billingInfoSchema),
  });

  const handleSubmitClick = () => {
    setModal({
      ...modal,
      visible: true,
      title: "Not Enough Credit On Your Account",
      description: "Buy Some...",
    });
  };

  // handle modal
  const onModalCancel = () => {};
  const onModalClose = () => {};
  const onModalSave = () => {};

  return (
    <>
      <CustomPopupModal
        title={modal.title}
        description={modal.description}
        handleCancel={onModalCancel}
        handleClose={onModalClose}
        handleSave={onModalSave}
        show={modal.visible}
      />
      <Navbar />
      <div className="booking__info-main sectionPadding">
        <div className="booking__details">
          <div className="booking-pickup__details">
            <p className="title">Pickup Details</p>
            <div className="fields">
              {pickupDetailsField.map((field, key) => {
                if (field.type === "select")
                  return (
                    <>
                      <select
                        placeholder={`Enter ${field.label}`}
                        {...register(field.name)}
                        className="form-control input__element login"
                      >
                        <option value="">Select State</option>
                        {field.options?.map((selectOptions, key) => (
                          <option
                            value={JSON.stringify(selectOptions)}
                            key={key}
                          >
                            {selectOptions.name}
                          </option>
                        ))}
                      </select>
                    </>
                  );
                return (
                  <div>
                    <input
                      key={key}
                      type={field.type}
                      placeholder={`Enter ${field.label}`}
                      {...register(field.name)}
                      className="form-control input__element login"
                    />
                    {errors[field.name] && (
                      <p className="input__errorMessage">
                        <> {errors[field.name]?.message}</>
                      </p>
                    )}
                  </div>
                );
              })}
              <Button
                title={"Submit"}
                width={"100%"}
                onClick={handleSubmitClick}
              />
            </div>
          </div>
          <div className="booking-pickup__details"></div>
        </div>
        <div className="booking__cart"></div>
      </div>
      <Footer />
    </>
  );
};

export default BookingInformation;
