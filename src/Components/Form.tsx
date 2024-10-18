import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input, Button, Form } from "rsuite";
import Field from "./Field";
import { Grid, Row, Col } from "rsuite";
import "../App.css";
import { DatePicker } from "rsuite";
import { SelectPicker } from "rsuite";

type formdataAll = {
  empcode: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  fathername: string;
  mobilenumber: string;
  dob: Date;
  designation: string;
  dcode: string;
  doj: Date;
  dol: Date;
  salary: string;
  gender: string;
  bno: string;
  ifsc: string;
  bname: string;
  ocity: string;
  ostate: string;
  oaddress1: string;
  oaddress2: string;
  oaddress3: string;
  pincode: string;
  estatus: string;
};
const FormAll = () => {
  const defaultValues = {
    empcode: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    fathername: "",
    mobilenumber: "",
    dob: null,
    designation: "",
    dcode: "",
    doj: null,
    dol: null,
    salary: "",
    gender: "",
    bno: "",
    ifsc: "",
    bname: "",
    ocity: "",
    ostate: "",
    oaddress1: "",
    oaddress2: "",
    oaddress3: "",
    pincode: "",
    estatus: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, shouldFocusError: false });

  // } = useForm<formdataAll>();

  function onSubmit(data: formdataAll) {
    console.log("empcode is : ", data.empcode);
    console.log("firstname is : ", data.firstname);
    console.log("mobile no is : ", data.mobilenumber);
    console.log("date of birth : ", data.dob.toLocaleDateString());
    console.log("date of joining is : ", data.doj.toLocaleDateString());
    console.log("date of leaving is : ", data.dol.toLocaleDateString());
    console.log("salary is : ", data.salary);
    console.log("gender is : ", data.gender);
    console.log("account number is : ", data.bno);
    console.log("ifsc code is : ", data.ifsc);
    console.log("bank is : ", data.bname);
    console.log("office city is : ", data.ocity);
    console.log("office state is : ", data.ostate);
    console.log("office address 1 is : ", data.oaddress1);
    console.log("office pincode is : ", data.pincode);
    console.log("employee status is : ", data.estatus);
    adddata(data);
  }

  async function adddata(data: formdataAll) {
    try {
      let res = await fetch("https://ins-f-backend.onrender.com/form/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empcode: data.empcode,
          firstname: data.firstname,
          mobileno: data.mobilenumber,
          email: data.email,
          DOJ: data.doj.toLocaleDateString(),
          salary: data.salary,
          gender: data.gender,
          accno: data.bno,
          IFSCcode: data.ifsc,
          bankname: data.bname,
          officecity: data.ocity,
          officestate: data.ostate,
          officeaddress1: data.oaddress1,
          officepincode: data.pincode,
          employeestatus: data.estatus,
        }),
      });

      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }

  function handleReset() {
    reset(defaultValues);
  }

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <p className="formTypehead">Add Employee</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="show-grid">
          <Col xs={6}>
            <label className="formhead">
              Emp Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="empcode"
              control={control}
              rules={{ required: "Empcode is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter employee code"
                />
              )}
            />
          </Col>

          <Col xs={6}>
            <label className="formhead">
              First Name <span className="requiredIs">*</span>
            </label>
            <Controller
              name="firstname"
              control={control}
              rules={{
                required: "Firstname is required",
                // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter first name"
                />
              )}
            />
          </Col>

          <Col xs={6}>
            <label className="formhead">Middle Name</label>
            <Controller
              name="middlename"
              control={control}
              // rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter middle name"
                />
              )}
            />
          </Col>

          <Col xs={6}>
            <label className="formhead">Last Name</label>
            <Controller
              name="lastname"
              control={control}
              // rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter last name"
                />
              )}
            />
          </Col>

          {/* 2 */}

          <Col xs={6} className="disIs">
            <label className="formhead">
              Email <span className="requiredIs">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "required valid email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "required valid email",
                },
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter email"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">father's Name</label>
            <Controller
              name="fathername"
              control={control}
              // rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter father name"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Mobile Number <span className="requiredIs">*</span>
            </label>
            <Controller
              name="mobilenumber"
              control={control}
              rules={{
                required: "required valid mobile number",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "required valid mobile number",
                },
              }}
              render={({ field, fieldState }) => (
                <Field
                  type="number"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter mobile number"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs" style={{ paddingTop: "14px" }}>
            <label className="formhead">
              DOB <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  oneTap
                  style={{ width: "100%" }}
                  placeholder="Select date of birth"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.dob?.message}</p>
          </Col>

          {/* 3 */}
          <Col xs={6} className="disIs">
            <label className="formhead">Designation</label>
            <Controller
              name="designation"
              control={control}
              // rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter designation"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">Designation Code</label>
            <Controller
              name="dcode"
              control={control}
              // rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter designation code"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs" style={{ paddingTop: "14px" }}>
            <label className="formhead">
              Date of joining <span className="requiredIs">*</span>
            </label>
            <Controller
              name="doj"
              control={control}
              rules={{ required: "Date of joining is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  oneTap
                  style={{ width: "100%" }}
                  placeholder="Enter date of joining"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.doj?.message}</p>
          </Col>

          <Col xs={6} className="disIs" style={{ paddingTop: "14px" }}>
            <label className="formhead">
              Date of leaving <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dol"
              control={control}
              rules={{ required: "Date of leaving is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  oneTap
                  style={{ width: "100%" }}
                  placeholder="Enter date of leaving"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.dol?.message}</p>
          </Col>

          {/* 4 */}
          <Col xs={6} className="disIs">
            <label className="formhead">
              Monthly Salary <span className="requiredIs">*</span>
            </label>
            <Controller
              name="salary"
              control={control}
              rules={{
                required: "required monthly salary",
              }}
              render={({ field, fieldState }) => (
                <Field
                  type="number"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter monthly salary"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs2">
            <label className="formhead">
              Gender <span className="requiredIs">*</span>
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "gender is required" }}
              render={({ field }) => (
                <SelectPicker
                  {...field}
                  data={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  placeholder="Select gender"
                  searchable={false}
                  style={{ width: "100%" }}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.gender?.message}</p>
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Bank account number <span className="requiredIs">*</span>
            </label>
            <Controller
              name="bno"
              control={control}
              rules={{
                required: "required bank account number",
              }}
              render={({ field, fieldState }) => (
                <Field
                  type="number"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter bank account number"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              IFSC Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ifsc"
              control={control}
              rules={{
                required: "required IFSC code",
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter IFSC code"
                />
              )}
            />
          </Col>

          {/* 5 */}
          <Col xs={6} className="disIs">
            <label className="formhead">
              Bank Name <span className="requiredIs">*</span>
            </label>
            <Controller
              name="bname"
              control={control}
              rules={{
                required: "required bank name",
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter bank name"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office City <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ocity"
              control={control}
              rules={{
                required: "required office city",
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter office city"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office State <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ostate"
              control={control}
              rules={{
                required: "required office state",
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter office state"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office address 1 <span className="requiredIs">*</span>
            </label>
            <Controller
              name="oaddress1"
              control={control}
              rules={{
                required: "required office address1",
              }}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter office address1"
                />
              )}
            />
          </Col>

          {/* 6 */}

          <Col xs={6} className="disIs">
            <label className="formhead">Office address 2</label>
            <Controller
              name="oaddress2"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter office address2"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">Office address 3</label>
            <Controller
              name="oaddress3"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter office address3"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office Pin Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="pincode"
              control={control}
              rules={{
                required: "required valid pincode",
              }}
              render={({ field, fieldState }) => (
                <Field
                  type="number"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter Office pincode"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs2">
            <label className="formhead">
              Employee Status <span className="requiredIs">*</span>
            </label>
            <Controller
              name="estatus"
              control={control}
              rules={{ required: "employee status required" }}
              render={({ field }) => (
                <SelectPicker
                  {...field}
                  data={[
                    { label: "Intern", value: "Intern" },
                    { label: "Full Time", value: "Full Time" },
                  ]}
                  placeholder="Select status"
                  searchable={false}
                  style={{ width: "100%" }}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.estatus?.message}</p>
          </Col>
        </Row>

        <div className="budiv">
          <Button
            className="busumit"
            style={{ display: "block", marginTop: "20px", padding: "8px 46px" }}
            appearance="primary"
            type="submit"
          >
            Submit
          </Button>

          <Button
            className="busumit"
            onClick={handleReset}
            style={{
              display: "block",
              marginTop: "20px",
              padding: "8px 46px",
              marginLeft: "16px",
            }}
            appearance="ghost"
          >
            Reset
          </Button>
        </div>

        
      </Form>
    </div>
  );
};

export default FormAll;
