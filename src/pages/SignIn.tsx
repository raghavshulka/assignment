import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface options {
  name: string;
  phoneNumber?: number | null;
  email: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<options>({
    name: "",
    phoneNumber: null,
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    email: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...values,
        [name]: value,
      })
    );
  };

  let user: any;

  const handleSubmit = () => {
    const newErrors = {
      name: !values.name,
      phoneNumber: !values.phoneNumber,
      email: !values.email,
    };

    if (newErrors.name || newErrors.phoneNumber || newErrors.email) {
      setErrors(newErrors);
    } else {
      user = localStorage.getItem("user");
      console.log("Local Storage:", user);
      console.log("State Values:", values);
      navigate("/Home");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", display: "flex" },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          required
          id="outlined-name"
          label="Name"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />
        <TextField
          required
          id="outlined-phone"
          label="Phone number"
          variant="outlined"
          type="number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          helperText={errors.phoneNumber ? "Phone number is required" : ""}
        />
        <TextField
          required
          id="outlined-email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? "Email is required" : ""}
        />

        <Button onClick={handleSubmit} variant="outlined">
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default SignIn;
