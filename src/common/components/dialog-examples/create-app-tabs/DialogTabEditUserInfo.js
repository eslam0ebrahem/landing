// ** React Imports
import { useState, forwardRef } from "react";

// ** MUI Imports
import styled, { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const DialogTabEditUserInfo = ({
  setState,
  state,
  renderTabFooter,
  nextTab,
}) => {
  // ** States
  const [stateOfPassword, setPassword] = useState({
    password: "",
    password2: "",
    showPassword: false,
    showPassword2: false,
  });
  const router = useRouter();
  const { locale } = router;
  const { tabDetails } =
    locale === "en" ? en.dialog.userInfo : ar.dialog.userInfo;

  const defaultAccountValues = state;

  const accountSchema = yup.object().shape({
    firstName: yup.string().min(4).required(),
    email: yup.string().email().required(),
    lastName: yup.string().min(4).required(),
    subdomain: yup.string().required(),
    contact: yup.string().required(),
    password: yup.string().min(6).required(),
    "confirmPassword": yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  }); // ** Hooks
  const {
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors },
  } = useForm({
    defaultValues: defaultAccountValues,
    resolver: yupResolver(accountSchema),
  });
  const onSubmit = async ({
    firstName,
    email,
    lastName,
    subdomain,
    contact,
  }) => {
    setState({ ...state, firstName, email, lastName, subdomain, contact });
    console.log({ firstName, email, lastName, subdomain, contact });
    nextTab();
  };
  // Handle Password
  const handleClickShowPassword = () => {
    setPassword({ ...stateOfPassword, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle Confirm Password
  const handleClickShowConfirmPassword = () => {
    setPassword({ ...stateOfPassword, showPassword2: !state.showPassword2 });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleAccountSubmit(onSubmit)}>
      <Grid container spacing={6}>
        {/* <Grid item sm={6} xs={12}>
          <Input
            label={tabDetails.TextField1.label}
            onChange={(e) => {
              setState({ ...state, email: !state.showPassword });
            }}
            isMaterial={true}
          />
        </Grid> */}

        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="firstName"
              control={accountControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField1.label}
                  onChange={onChange}
                  error={Boolean(accountErrors.firstName)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-account-firstName"
                />
              )}
            />
            {accountErrors.firstName && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-firstName"
              >
                {accountErrors.firstName.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="lastName"
              control={accountControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField2.label}
                  onChange={onChange}
                  error={Boolean(accountErrors.lastName)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-account-lastName"
                />
              )}
            />
            {accountErrors.lastName && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-lastName"
              >
                {accountErrors.lastName.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="email"
              control={accountControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="email"
                  value={value}
                  label={tabDetails.TextField3.label}
                  onChange={onChange}
                  error={Boolean(accountErrors.email)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-account-email"
                />
              )}
            />
            {accountErrors.email && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-email"
              >
                {accountErrors.email.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="contact"
              control={accountControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField4.label}
                  onChange={onChange}
                  error={Boolean(accountErrors.contact)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-account-contact"
                />
              )}
            />
            {accountErrors.contact && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-contact"
              >
                {accountErrors.contact.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="stepper-linear-account-password"
              error={Boolean(accountErrors.password)}
            >
              Password
            </InputLabel>
            <Controller
              name="password"
              control={accountControl}
              // rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  value={value}
                  label="Password"
                  onChange={onChange}
                  id="stepper-linear-account-password"
                  error={Boolean(accountErrors.password)}
                  type={state.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label="toggle password visibility"
                      >
                        <Icon
                          icon={
                            state.showPassword
                              ? "mdi:eye-outline"
                              : "mdi:eye-off-outline"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {accountErrors.password && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-password-helper"
              >
                {accountErrors.password.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="stepper-linear-account-confirmPassword"
              error={Boolean(accountErrors["confirmPassword"])}
            >
              Confirm Password
            </InputLabel>
            <Controller
              name="confirmPassword"
              control={accountControl}
              // rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  value={value}
                  onChange={onChange}
                  label="Confirm Password"
                  id="stepper-linear-account-confirmPassword"
                  type={state.showPassword2 ? "text" : "password"}
                  error={Boolean(accountErrors["confirmPassword"])}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        <Icon
                          icon={
                            state.showPassword2
                              ? "mdi:eye-outline"
                              : "mdi:eye-off-outline"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {accountErrors["confirmPassword"] && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-confirmPassword-helper"
              >
                {accountErrors["confirmPassword"].message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name="subdomain"
              control={accountControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField5.label}
                  onChange={onChange}
                  error={Boolean(accountErrors.subdomain)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-account-subdomain"
                />
              )}
            />
            {accountErrors.subdomain && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-account-subdomain"
              >
                {accountErrors.subdomain.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      {renderTabFooter()}
    </form>
  );
};
export default DialogTabEditUserInfo;
