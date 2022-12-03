// ** React Imports
import { useState, forwardRef } from "react";

// ** MUI Imports

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import Input from "common/components/Input";
import { FormHelperText } from "@mui/material";

const DialogTabAddAddress = ({ setState, state, renderTabFooter, nextTab }) => {
  const router = useRouter();
  const { locale } = router;
  const { tabDetails } =
    locale === "en" ? en.dialog.userAddress : ar.dialog.userAddress;

  const defaultAddressValues = state;

  const addressSchema = yup.object().shape({
    country: yup
      .string()
      .required()
      .oneOf(tabDetails.countries.map((i) => i.key)),
    line1: yup.string().required(),
    town: yup.string().required(),
    zipCode: yup.string().required(),
  }); // ** Hooks
  const {
    control: addressControl,
    handleSubmit: handleAddressSubmit,
    formState: { errors: addressErrors },
  } = useForm({
    defaultValues: defaultAddressValues,
    resolver: yupResolver(addressSchema),
  });
  const onSubmit = async ({
    country,
    line1,
    line2,
    town,
    zipCode,
    province,
  }) => {
    setState({ ...state, country, line1, line2, town, zipCode, province });
    nextTab();
  };

  return (
    <form onSubmit={handleAddressSubmit(onSubmit)}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name="country"
              control={addressControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Select
                  defaultValue="Select Country"
                  onChange={onChange}
                  error={Boolean(addressErrors.country)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-address-country"
                >
                  {tabDetails.countries.map((item) => (
                    <MenuItem
                      // dir={locale === "ar" ? "rtl" : "ltr"}
                      key={item.key}
                      value={item.key}
                    >
                      {item.text}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {addressErrors.country && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-country"
              >
                {addressErrors.country.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name="line1"
              control={addressControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField1.label}
                  onChange={onChange}
                  error={Boolean(addressErrors.line1)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-address-line1"
                />
              )}
            />
            {addressErrors.line1 && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-line1"
              >
                {addressErrors.line1.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name="line2"
              control={addressControl}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  
                  value={value}
                  label={tabDetails.TextField2.label}
                  onChange={onChange}
                  error={Boolean(addressErrors.line2)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-address-line2"
                />
              )}
            />
            {addressErrors.line2 && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-line2"
              >
                {addressErrors.line2.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name="town"
              control={addressControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField3.label}
                  onChange={onChange}
                  error={Boolean(addressErrors.town)}
                  // placeholder="carterleonard@gmail.com"
                  aria-describedby="stepper-linear-address-town"
                />
              )}
            />
            {addressErrors.town && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-town"
              >
                {addressErrors.town.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="zipCode"
              control={addressControl}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField4.label}
                  onChange={onChange}
                  error={Boolean(addressErrors.zipCode)}
                  aria-describedby="stepper-linear-address-zipCode"
                />
              )}
            />
            {addressErrors.zipCode && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-zipCode"
              >
                {addressErrors.zipCode.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <Controller
              name="province"
              control={addressControl}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type="text"
                  value={value}
                  label={tabDetails.TextField5.label}
                  onChange={onChange}
                  error={Boolean(addressErrors.province)}
                  aria-describedby="stepper-linear-address-province"
                />
              )}
            />
            {addressErrors.province && (
              <FormHelperText
                sx={{ color: "error.main" }}
                id="stepper-linear-address-province"
              >
                {addressErrors.province.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      {renderTabFooter()}
    </form>
  );
};

export default DialogTabAddAddress;
