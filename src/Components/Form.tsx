import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "rsuite";
import Field from "./Field";
import { Row, Col } from "rsuite";
import "../App.css";
import { SelectPicker } from "rsuite";

export type formdataAll = {
  empcode: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  fathername: string;
  mobilenumber: string;
  dob: string;
  designation: string;
  dcode: string;
  doj: string;
  dol: string;
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
  const defaultValues:formdataAll = {
    empcode: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    fathername: "",
    mobilenumber: "",
    dob: "",
    designation: "",
    dcode: "",
    doj: "",
    dol: "",
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
    console.log("date of birth : ", data.dob);
    console.log("date of joining is : ", data.doj);
    console.log("date of leaving is : ", data.dol);
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

  const data1 = ["Male", "Female"].map((ele) => {
    return { label: ele, value: ele };
  });

  const data2 = ["Intern", "Full Time"].map((ele) => {
    return { label: ele, value: ele };
  });

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
          DOJ: data.doj,
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

      console.log(res);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="show-grid">
          <Col xs={6}>
            <label className="formhead">
              Emp Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="empcode"
              control={control}
              rules={{ required: "Empcode is required" }}
              render={({ field }) => (
                <Field
                as={Input}
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
              }}
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
                  type="number"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter mobile number"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              DOB <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dob"
              control={control}
              rules={{
                required: "required valid dte of birth",
              }}
              render={({ field }) => (
                <Field
                as={Input}
                  type="date"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter date of birth"
                />
              )}
            />
          </Col>

          {/* 3 */}
          <Col xs={6} className="disIs">
            <label className="formhead">Designation</label>
            <Controller
              name="designation"
              control={control}
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter designation code"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Date of joining <span className="requiredIs">*</span>
            </label>
            <Controller
              name="doj"
              control={control}
              rules={{
                required: "required valid dte of birth",
              }}
              render={({ field }) => (
                <Field
                as={Input}
                  type="date"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter date of birth"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Date of leaving <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dol"
              control={control}
              rules={{
                required: "required valid dte of birth",
              }}
              render={({ field }) => (
                <Field
                as={Input}
                  type="date"
                  field={field}
                  error={errors[field.name]?.message}
                  placeholder="Enter date of birth"
                />
              )}
            />
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
              render={({ field }) => (
                <Field
                as={Input}
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
              rules={{ required: "employee status required" }}
              render={({ field }) => (
                <SelectPicker
                  style={{ width: "100%" }}
                  data={data1}
                  searchable={false}
                  value={field.value}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
              render={({ field }) => (
                <Field
                as={Input}
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
                  style={{ width: "100%" }}
                  value={field.value}
                  data={data2}
                  searchable={false}
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
      </form>
    </div>
  );
};

export default FormAll;
