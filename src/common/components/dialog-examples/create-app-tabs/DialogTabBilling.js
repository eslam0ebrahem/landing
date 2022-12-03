// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";

// ** Third Party Imports
import Payment from "payment";
import Cards from "react-credit-cards";

// ** Util Import
import {
  formatCVC,
  formatExpirationDate,
  formatCreditCardNumber,
} from "../../../../@core/utils/format";

// ** Styled Component Imports
import CardWrapper from "../../../../@core/styles/libs/react-credit-cards";

// ** Styles Import
import "react-credit-cards/es/styles-compiled.css";

const TabBilling = ({ setState, state, renderTabFooter, nextTab }) => {
  // ** States
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [focus, setFocus] = useState();
  const [expiry, setExpiry] = useState("");
  const handleBlur = () => setFocus(undefined);

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value, Payment);
      setCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value, cardNumber, Payment);
      setCvc(target.value);
    }
  };
  const router = useRouter();

  const { locale } = router;
  const { tabDetails } =
    locale === "en" ? en.dialog.paymentTab : ar.dialog.paymentTab;

  const defaultBillingValues = state;

  const { handleSubmit: handleBillingSubmit } = useForm({
    defaultValues: defaultBillingValues,
  });
  const onSubmit = async (e) => {
    console.log(e)
    // setState({ ...state, country, line1, line2, town, zipCode, province });
    nextTab();
  };
  return (
    <form onSubmit={handleBillingSubmit(onSubmit)}>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          sx={{
            pt: (theme) => ["0 !important", `${theme.spacing(6)} !important`],
          }}
        >
          <CardWrapper
            sx={{
              "& .rccs": { m: "0 auto", display: { xs: "none", sm: "block" } },
            }}
          >
            <Cards
              cvc={cvc}
              focused={focus}
              expiry={expiry}
              name={name}
              number={cardNumber}
            />
          </CardWrapper>
        </Grid>
        <Grid item xs={12}>
          {/* <Input label={tabDetails.TextField1.label} isMaterial={true} /> */}

          <TextField
            fullWidth
            name="number"
            // variant="standard"
            // dir="rtl"
            value={cardNumber}
            // sx={{
            //   "& .MuiInputLabel-root": {
            //     // left: "unset",
            //     // transformOrigin: `top ${locale === "ar" ? "right" : "left"}`,
            //   },
            // }}
            autoComplete="off"
            label={tabDetails.TextField1.label}
            onBlur={handleBlur}
            onChange={handleInputChange}
            placeholder="0000 0000 0000 0000"
            onFocus={(e) => setFocus(e.target.name)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant="standard"
            // sx={{
            //   "& .MuiInputLabel-root": {
            //     left: "unset",
            //     transformOrigin: `top ${locale === "ar" ? "right" : "left"}`,
            //   },
            // }}
            fullWidth
            name="name"
            value={name}
            autoComplete="off"
            onBlur={handleBlur}
            label={tabDetails.TextField2.label}
            placeholder="Mohammed XXXX XXXX"
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            // sx={{
            //   "& .MuiInputLabel-root": {
            //     left: "unset",
            //     transformOrigin: `top ${locale === "ar" ? "right" : "left"}`,
            //   },
            // }}
            // variant="standard"
            name="expiry"
            label={tabDetails.TextField3.label}
            value={expiry}
            onBlur={handleBlur}
            placeholder="MM/YY"
            onChange={handleInputChange}
            inputProps={{ maxLength: "5" }}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            // variant="standard"
            // sx={{
            //   "& .MuiInputLabel-root": {
            //     left: "unset",
            //     transformOrigin: `top ${locale === "ar" ? "right" : "left"}`,
            //   },
            // }}
            fullWidth
            name="cvc"
            label={tabDetails.TextField4.label}
            value={cvc}
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleInputChange}
            onFocus={(e) => setFocus(e.target.name)}
            placeholder={
              Payment.fns.cardType(cardNumber) === "amex" ? "1234" : "123"
            }
          />
        </Grid>
        {/* <Grid item xs={12}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Save Card for future billing?"
          sx={{ "& .MuiTypography-root": { color: "text.secondary" } }}
        />
      </Grid> */}
      </Grid>
      {renderTabFooter()}
    </form>
  );
};

export default TabBilling;
