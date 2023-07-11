"use client";
// ** React Imports
import { Fragment, MouseEvent, ReactNode, useState } from "react";

// ** Next Import
import Link from "next/link";

// ** MUI Components
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

// ** Icon Imports
import Icon from "../core/components/icon";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

// ** Layout Import
import BlankLayout from "../core/layouts/BlankLayout";

// ** Hooks
import { useAuth } from "../hooks/useAuth";
import { useSettings } from "../core/hooks/useSettings";

import { strings as STRINGS } from "../constants/constants";

const defaultValues = {
  email: "",
  userName: "",
  password: "",
  terms: false,
};

interface FormData {
  email: string;
  terms: boolean;
  userName: string;
  password: string;
}

// ** Styled Components

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 450,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 750,
  },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.75),
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { register } = useAuth();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  // ** Vars
  const { skin } = settings;
  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    userName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], STRINGS.ACCEPT_PRIVACY_POLICY_TERMS),
  });

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { email, userName, password } = data;
    register({ email, userName, password }, (err) => {
      if (err.email) {
        setError("email", {
          type: "manual",
          message: err.email,
        });
      }
      if (err.userName) {
        setError("userName", {
          type: "manual",
          message: err.userName,
        });
      }
    });
  };

  const imageSource =
    skin === "bordered"
      ? "auth-v2-register-illustration-bordered"
      : "auth-v2-register-illustration";

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "background.paper",
      }}
    >
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Box sx={{ mb: 10 }}>
              <svg
                width={34}
                height={23.375}
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={theme.palette.primary.main}
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                />
                <path
                  fill="#161616"
                  opacity={0.06}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                />
                <path
                  fill="#161616"
                  opacity={0.06}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={theme.palette.primary.main}
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                />
              </svg>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(
                onSubmit as SubmitHandler<{
                  password: string;
                  userName: string;
                  email: string;
                  terms: boolean | undefined;
                }>
              )}
            >
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="userName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      value={value}
                      onBlur={onBlur}
                      label="UserName"
                      onChange={onChange}
                      placeholder="johndoe"
                      error={Boolean(errors.userName)}
                    />
                  )}
                />
                {errors.userName && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.userName.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      label="Email"
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder="user@email.com"
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.email.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                >
                  Password
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      label="Password"
                      onBlur={onBlur}
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon
                              icon={
                                showPassword ? "tabler:eye" : "tabler:eye-off"
                              }
                              fontSize={20}
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.terms)}>
                <Controller
                  name="terms"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <FormControlLabel
                        sx={{
                          ...(errors.terms ? { color: "error.main" } : null),
                          "& .MuiFormControlLabel-label": {
                            fontSize: "0.875rem",
                          },
                        }}
                        control={
                          <Checkbox
                            checked={value}
                            onChange={onChange}
                            sx={errors.terms ? { color: "error.main" } : null}
                          />
                        }
                        label={
                          <Fragment>
                            <Typography
                              variant="body2"
                              component="span"
                              sx={{ color: errors.terms ? "error.main" : "" }}
                            >
                              I agree to{" "}
                            </Typography>
                            <LinkStyled
                              href="/"
                              onClick={(e: MouseEvent<HTMLElement>) =>
                                e.preventDefault()
                              }
                            >
                              privacy policy & terms
                            </LinkStyled>
                          </Fragment>
                        }
                      />
                    );
                  }}
                />
                {errors.terms && (
                  <FormHelperText sx={{ mt: 0, color: "error.main" }}>
                    {errors.terms.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ mb: 4 }}
              >
                {STRINGS.SIGN_UP}
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ color: "text.secondary", mr: 2 }}>
                  {STRINGS.ALREADY_HAVE_ACCOUNT}
                </Typography>
                <Typography variant="body2">
                  <LinkStyled href="/login" sx={{ fontSize: "1rem" }}>
                    {STRINGS.SIGN_IN_INSTEAD}
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  );
};

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

Register.guestGuard = true;

export default Register;
