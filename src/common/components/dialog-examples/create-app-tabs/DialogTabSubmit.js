// ** React Imports
import { useState, forwardRef } from "react";

// ** MUI Imports

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
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

    axios
      .post(apiUrl, {
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
      })
      .then(async ({ data }) => {
        console.log(data);
        setState({
          ...state,
          website: `https://${data.userData.website}`,
          dashboard: "https://admin.systemha.com",
        });
        nextTab();
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
        console.log(err);
        // if (errorCallback) errorCallback(err.response.data)
      });

    // // console.log(e);
    // fetch(apiUrl.href, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     dedicatedTenancy: false,
    //     name: firstName,
    //     family_name: lastName,
    //     tenantTier: type,
    //     phone_number: contact,
    //     website: subdomain,
    //     email,
    //     town,
    //     country,
    //     line1,
    //     line2,
    //     zipCode,
    //     province,
    //     password,
    //     confirmPassword,
    //   }),
    // })
    //   .then((response) => {
    //     // response.json()
    //     const data = response.json();
    //     if (response.status === 200) return data;
    //     throw Error(data);
    //   })
    //   .then((res) => {
    //     // if (res.status === 200) {
    //     //   // router.replace("https://admin.systemha.com");
    //     //   // setState({
    //     //   //   ...state,
    //     //   //   country,
    //     //   //   line1,
    //     //   //   line2,
    //     //   //   town,
    //     //   //   zipCode,
    //     //   //   province,
    //     //   // });
    //     // //   nextTab();
    //     // // } else console.log("here ", res);
    //     // nextTab();
    //     console.log(res);
    //   })
    //   .catch(async () => console.error("ssss"));
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
