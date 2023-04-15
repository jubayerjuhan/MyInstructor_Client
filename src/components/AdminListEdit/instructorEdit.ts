import React from "react";

const additionalInfo = ["abnNumber", "invoiceAddress"];
const paymentInfo = ["bankAccountNumber", "bsbNumber"];

export const handleInstructorEdit = (
  edits: any,
  setEdits: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (paymentInfo.includes(e.target.name))
    return setEdits({
      ...edits,
      paymentInfo: {
        ...edits.paymentInfo,
        [e.target.name]: e.target.value,
      },
    });
  if (additionalInfo.includes(e.target.name))
    return setEdits({
      ...edits,
      additionalInfo: {
        ...edits.paymentInfo,
        [e.target.name]: e.target.value,
      },
    });
  setEdits({ ...edits, [e.target.name]: e.target.value });
  console.log(edits);
};
