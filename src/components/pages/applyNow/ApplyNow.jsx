import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DatePiker from "../../forAll/DatePiker";
import SnackBar from "../../forAll/SnackBar";
import ProgressIndicator from "../../forAll/ProgressIndicator";

const dateStr = new Date();
const year = dateStr.getFullYear();
const month = dateStr.getMonth();
const date = dateStr.getDate();
const formatedDate = `${year}-${month + 1}-${date}`;
const formInputsObj = {
  appointment_date: formatedDate,
};

const ApplyNow = () => {
  const [formInputs, setFormInputs] = useState(formInputsObj);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="apply-now">
        <div className="content">
          <h1 className="apply-heading">Book an Appointment</h1>
          <form
            className="input-form"
            onSubmit={handleSubmit((data) => {
              setFormSubmitting(true);
              try {
                data.appointment_date = formInputs.appointment_date;
                setTimeout(() => {
                  // -----if successful-----------
                  setAlertMessage((prev) => ({
                    ...prev,
                    successMessage: "You have successfully booked your form.",
                  }));
                  setFormSubmitting(false);
                  setSnackBarState((prev) => ({ ...prev, open: true }));
                  handleClick({ vertical: "bottom", horizontal: "center" });
                  reset();
                  // setFormInputs((prev) => ({
                  //   ...prev,
                  //   appointment_date: formatedDate,
                  // }));
                }, 2000);
                // fetchAppointmentPost(data);
              } catch (error) {}
            })}
          >
            <div className="inputs-wrapper">
              <div className="input-fields">
                <div className="input-and-label">
                  <label htmlFor="" className="label">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                    className="input-field"
                  />
                </div>
                <div className="input-and-label">
                  <label htmlFor="" className="label">
                    Email Address*
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="input-and-label">
                  <label htmlFor="" className="label">
                    Phone Number*
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                    })}
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="input-and-label">
                  <label htmlFor="" className="label">
                    Country*
                  </label>
                  <input
                    {...register("country", {
                      required: true,
                    })}
                    type="text"
                    className="input-field"
                  />
                </div>
                <DatePiker
                  dateType="appointment-date"
                  label_name="Appointment Date*"
                  setFormInputs={setFormInputs}
                />
              </div>
            </div>
            <Button className="book-btn" type="submit">
              Book an Appointment
            </Button>
          </form>
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default ApplyNow;
