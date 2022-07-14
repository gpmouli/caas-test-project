import React from "react";
import Form from "react-bootstrap/Form";

const InputField = React.forwardRef(
  ({ placeholder, type, value, name, change, label, errors, ...rest }, ref) => {
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={change}
            ref={ref}
            {...rest}
            className={errors?.type ? "input-error" : ""}
          />
          <small>{errors?.type === "required" && "Field is required"}</small>
          {type === "text" && (
            <small>
              {errors?.type === "maxLength" &&
                "Maximum 20 characters is required"}
              {errors?.type === "minLength" &&
                "Minimum 3 characters is required"}
            </small>
          )}
          {type === "number" && (
            <small>
              {errors?.type === "minLength" &&
                "Minimum 8 characters is required"}
              {errors?.type === "maxLength" &&
                "Maximum 8 charaters is required"}
            </small>
          )}
        </Form.Group>
      </div>
    );
  }
);

export default InputField;
