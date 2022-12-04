// ** React Imports
import { useState, forwardRef } from "react";

// ** MUI Imports

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import { Box, Typography } from "@mui/material";

const DialogTabSubmit = ({ setState, state, renderTabFooter, nextTab }) => {
  const router = useRouter();

  const { locale } = router;
  const { tabDetails } =
    locale === "en" ? en.dialog.submitTab : ar.dialog.submitTab;

  const { handleSubmit } = useForm({
    defaultValues: state,
  });
  const onSubmit = async ({
    firstName,
    lastName,
    email,
    contact,
    type,
    subdomain,
    country,
    line1,
    line2,
    town,
    zipCode,
    province,
    password,
    confirmPassword,
  }) => {
    const apiUrl = new URL(
      "https://1l90myiar1.execute-api.us-east-1.amazonaws.com/prod/registration"
    );
    // console.log(e);
    fetch(apiUrl.href, {
      method: "POST",
      body: JSON.stringify({
        dedicatedTenancy: false,
        name: firstName,
        family_name: lastName,
        tenantTier: type,
        phone_number: contact,
        website: subdomain,
        email,
        town,
        country,
        line1,
        line2,
        zipCode,
        province,
        password,
        confirmPassword,
      }),
    })
      .then((res) => {
        if (res.status === 200) router.replace("https://admin.systemha.com");
        else console.log("here ", res);
      })
      .catch((err) => console.error(err));
    // setState({ ...state, country, line1, line2, town, zipCode, province });
    // nextTab();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">{tabDetails.title}</Typography>
        <Typography variant="body2">{tabDetails.subtitle}</Typography>
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <img alt="submit-img" src={`/favicon.png`} width={150} />
        </Box>
      </Box>
      {renderTabFooter()}
    </form>
  );
};
export default DialogTabSubmit;
