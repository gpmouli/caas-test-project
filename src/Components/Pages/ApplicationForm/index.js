import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import InputField from "../../Common/InputField";
import Columns from "../../Columns";

const ApplicationForm = () => {
  const licenseId = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [dob, setDob] = useState();
  const [dateOfActivity, setDateOfActivity] = useState("");
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    control,
  } = useForm();
  const onSubmit = (data) => {
    const applyLicenseData = {
      id: licenseId.id,
      name: data.name,
      nric: data.nric,
      dateOfBirth: dob,
      phoneNumber: data.phoneNumber,
      dateOfActivity: dateOfActivity,
    };
    dispatch({ type: "APPLY_LICENSE", payload: applyLicenseData });
    toast.success("Successfully License Applied");
    history("/");
  };

  return (
    <>
      <Columns>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formMain">
            <h2>Apply Now</h2>
            <InputField
              type="text"
              label="Name"
              placeholder="Enter your your name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              errors={errors.name}
            />

            <InputField
              type="text"
              label="NRIC"
              placeholder="Enter your NRIC"
              {...register("nric", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              errors={errors.nric}
            />
            <div className="datePic">
              <label>Date of Birth</label>
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, dob } }) => (
                  <DatePicker
                    required
                    inputClass="form-control"
                    placeholder="dd/mm/yyyy"
                    value={dob}
                    onChange={(e) => {
                      onChange(e);
                      setDob(e ? e.format("DD/MM/YYYY") : "");
                    }}
                    format="DD/MM/YYYY"
                  />
                )}
              />
            </div>
            <InputField
              type="number"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
              errors={errors.phoneNumber}
            />
            <label>Date of Activity</label>
            <Controller
              control={control}
              name="dateOfActivity"
              render={({ field: { onChange, dateOfActivity } }) => (
                <DatePicker
                  required
                  inputClass="form-control"
                  placeholder="dd/mm/yyyy"
                  value={dateOfActivity}
                  onChange={(e) => {
                    onChange(e);
                    setDateOfActivity(e ? e.format("DD/MM/YYYY") : "");
                  }}
                  format="DD/MM/YYYY"
                />
              )}
            />

            <div className="btn-sec">
              <Button variant="success" htmlType="submit" type="primary" block>
                SUBMIT
              </Button>
              <Button type="reset" variant="secondary" onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Columns>
    </>
  );
};

export default ApplicationForm;
