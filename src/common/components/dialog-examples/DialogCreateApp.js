// ** React Imports
import { useState, forwardRef, Fragment } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { PricingButton } from "../../../containers/SaasClassic/Pricing/pricing.style";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import ButtonPrice from "../Button";

import TabContext from "@mui/lab/TabContext";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import DialogContent from "@mui/material/DialogContent";

// ** Icon Imports
import Icon from "../icon";

// ** Hook Imports
import { useSettings } from "../../../@core/hooks/useSettings";

// ** Tab Content Imports
import DialogTabDetails from "./create-app-tabs/DialogTabDetails";
import DialogTabEditUserInfo from "./create-app-tabs/DialogTabEditUserInfo";
import DialogTabSubmit from "./create-app-tabs/DialogTabSubmit";
import DialogTabBilling from "./create-app-tabs/DialogTabBilling";

import DialogTabAddAddress from "./create-app-tabs/DialogTabAddAddress";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const TabLabel = (props) => {
  const { icon, title, subtitle, active } = props;
  const router = useRouter();
  const { locale } = router;
  const { dialog } = locale === "en" ? en : ar;

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3.5,
            ...(active
              ? { color: "common.white", backgroundColor: "#12805D" }
              : { color: "text.primary", backgroundColor: "#12805d29" }),
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body2">{title}</Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.disabled", textTransform: "none" }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
const tabsArr = [
  "detailsTab",
  "userInfo",
  "userAddress",
  "paymentTab",
  "submitTab",
];

const DialogCreateApp = (props) => {
  // ** States
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("detailsTab");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subdomain: "",
    country: "",
    line1: "",
    line2: "",
    type: "",
    town: "",
    zipCode: "",
    province: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const { locale } = router;
  const { dialog } = locale === "en" ? en : ar;
  // ** Hook
  const { settings } = useSettings();

  // ** Var
  const { direction } = settings;

  const handleClose = () => {
    setShow(false);
    setActiveTab("detailsTab");
  };
  const nextArrow = locale === "ar" ? "mdi:arrow-left" : "mdi:arrow-right";
  const previousArrow = locale === "ar" ? "mdi:arrow-right" : "mdi:arrow-left";
  const prevTab = tabsArr[tabsArr.indexOf(activeTab) - 1];
  const nextTab = tabsArr[tabsArr.indexOf(activeTab) + 1];
  const renderTabFooter = () => {
    return (
      <Box
        sx={{
          mt: 8.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#12805D",
            borderColor: "#12805D",
            "&.MuiButton-startIcon": {
              margin: 50,
            },
          }}
          disabled={activeTab === "detailsTab"}
          onClick={() => setActiveTab(prevTab)}
          // endIcon={ <Icon icon={previousArrow} /> }
          startIcon={<Icon icon={previousArrow} />}
        >
          {dialog.prevTab}
        </Button>
        <Button
          variant="contained"
          type="submit"
          color={activeTab === "submitTab" ? "success" : "primary"}
          endIcon={
            <Icon icon={activeTab === "submitTab" ? "mdi:check" : nextArrow} />
          }
          // onClick={() => {
          //   if (activeTab !== "submitTab") {
          //     setActiveTab(nextTab);
          //   } else {
          //     handleClose();
          //   }
          // }}
        >
          {activeTab === "submitTab" ? dialog.submitBtn : dialog.nextTab}
        </Button>
      </Box>
    );
  };

  return (
    <Fragment>
      <PricingButton>
        <ButtonPrice
          // variant="contained"
          onClick={() => setShow(true)}
          {...props.style}
          title={props.title}
          textAlign="center"
          // color={props.style.color}
        />
      </PricingButton>
      <Dialog
        dir={locale === "ar" ? "rtl" : "ltr"}
        fullWidth
        open={show}
        scroll="body"
        maxWidth="md"
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            // textAlign: locale === "ar" ? "right" : "left",
            position: "relative",
            pr: { xs: 5, sm: 12 },
            pl: { xs: 4, sm: 11 },
            pt: { xs: 8, sm: 12.5 },
            pb: { xs: 5, sm: 12.5 },
          }}
        >
          <IconButton
            size="small"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: locale === "ar" ? "unset" : "1rem",
              left: locale === "ar" ? "1rem" : "unset",
              top: "1rem",
            }}
          >
            <Icon icon="mdi:close" />
          </IconButton>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 3, lineHeight: "2rem" }}>
              {dialog.title}
            </Typography>
            <Typography variant="body3">{dialog.text}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" } }}>
            <TabContext value={activeTab}>
              <TabList
                orientation="vertical"
                onChange={(e, newValue) => setActiveTab(newValue)}
                sx={{
                  border: 0,
                  minWidth: 200,
                  "& .MuiTabs-indicator": { display: "none" },
                  "& .MuiTabs-flexContainer": {
                    alignItems: "flex-start",
                    "& .MuiTab-root": {
                      width: "100%",
                      alignItems: "flex-start",
                    },
                  },
                }}
              >
                <Tab
                  disableRipple
                  value="detailsTab"
                  label={
                    <TabLabel
                      title={dialog.detailsTab.title}
                      subtitle={dialog.detailsTab.subtitle}
                      icon={<Icon icon="mdi:clipboard-outline" />}
                      active={activeTab === "detailsTab"}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value="userInfo"
                  label={
                    <TabLabel
                      title={dialog.userInfo.title}
                      subtitle={dialog.userInfo.subtitle}
                      icon={<Icon icon="mdi:account-outline" />}
                      active={activeTab === "userInfo"}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value="userAddress"
                  label={
                    <TabLabel
                      title={dialog.userAddress.title}
                      subtitle={dialog.userAddress.subtitle}
                      icon={<Icon icon="mdi:home-outline" />}
                      active={activeTab === "userAddress"}
                    />
                  }
                />
                {/* <Tab
                  disableRipple
                  value="frameworkTab"
                  label={
                    <TabLabel
                      title="Frameworks"
                      icon={<Icon icon="mdi:star-outline" />}
                      subtitle="Select Framework"
                      active={activeTab === "frameworkTab"}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value="DatabaseTab"
                  label={
                    <TabLabel
                      title="Database"
                      active={activeTab === "DatabaseTab"}
                      subtitle="Select Database"
                      icon={<Icon icon="mdi:chart-donut" />}
                    />
                  }
                /> */}
                {props.index ? (
                  <Tab
                    disableRipple
                    value="paymentTab"
                    label={
                      <TabLabel
                        title={dialog.paymentTab.title}
                        active={activeTab === "paymentTab"}
                        subtitle={dialog.paymentTab.subtitle}
                        icon={<Icon icon="mdi:credit-card-outline" />}
                      />
                    }
                  />
                ) : (
                  ""
                )}
                <Tab
                  disableRipple
                  value="submitTab"
                  label={
                    <TabLabel
                      title={dialog.submitTab.title}
                      subtitle={dialog.submitTab.subtitle}
                      icon={<Icon icon="mdi:check" />}
                      active={activeTab === "submitTab"}
                    />
                  }
                />
              </TabList>
              <TabPanel value="detailsTab" sx={{ flexGrow: 1 }}>
                <DialogTabDetails state={state} setState={setState} />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel value="userInfo" sx={{ flexGrow: 1 }}>
                <DialogTabEditUserInfo
                  renderTabFooter={renderTabFooter}
                  state={state}
                  setState={setState}
                  nextTab={() => setActiveTab(nextTab)}
                />
              </TabPanel>
              <TabPanel value="userAddress" sx={{ flexGrow: 1 }}>
                <DialogTabAddAddress
                  renderTabFooter={renderTabFooter}
                  state={state}
                  setState={setState}
                  nextTab={() => setActiveTab(nextTab)}
                />
              </TabPanel>
              <TabPanel value="paymentTab" sx={{ flexGrow: 1 }}>
                <DialogTabBilling
                  renderTabFooter={renderTabFooter}
                  state={state}
                  setState={setState}
                  nextTab={() => setActiveTab(nextTab)}
                />
              </TabPanel>
              <TabPanel value="submitTab" sx={{ flexGrow: 1 }}>
                <DialogTabSubmit
                  renderTabFooter={renderTabFooter}
                  state={state}
                  setState={setState}
                />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default DialogCreateApp;
