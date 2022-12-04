// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";

// ** Icon Imports
import Icon from "../../../../@core/components/icon";

// ** Custom Avatar Component
import CustomAvatar from "../../../../@core/components/mui/avatar";

const TabDetails = ({ setState, state, renderTabFooter, nextTab }) => {
  const router = useRouter();
  const { locale } = router;
  const { dialog } = locale === "en" ? en : ar;
  const handleChange = (txt) => {
    setState({ ...state, type: txt });
  };
  const handleAccountSubmit = () => {
    nextTab();
  };
  return (
    <form onSubmit={handleAccountSubmit}>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => handleChange("crm")}
          sx={{
            mb: 6,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomAvatar
              skin="light"
              color="info"
              variant="rounded"
              sx={{
                mr: 3,
                width: 48,
                height: 48,
              }}
            >
              <Icon icon="mdi:briefcase-outline" />
            </CustomAvatar>
            <div>
              <Typography sx={{ color: "text.secondary" }}>
                {dialog.detailsTab.tabDetails.Typo1.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {dialog.detailsTab.tabDetails.Typo1.text}
              </Typography>
            </div>
          </Box>
          <Radio
            value="crm"
            onChange={(e) => handleChange(e.target.value)}
            checked={state.type === "crm"}
          />
        </Box>
        <Box
          onClick={() => handleChange("eCommerce")}
          sx={{
            mb: 6,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomAvatar
              skin="light"
              color="success"
              variant="rounded"
              sx={{
                mr: 3,
                width: 48,
                height: 48,
              }}
            >
              <Icon icon="mdi:cart-outline" />
            </CustomAvatar>
            <div>
              <Typography sx={{ color: "text.secondary" }}>
                {dialog.detailsTab.tabDetails.Typo2.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {dialog.detailsTab.tabDetails.Typo2.text}
              </Typography>
            </div>
          </Box>
          <Radio
            value="eCommerce"
            onChange={(e) => handleChange(e.target.value)}
            checked={state.type === "eCommerce"}
          />
        </Box>
        <Box
          onClick={() => handleChange("learning")}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomAvatar
              skin="light"
              color="error"
              variant="rounded"
              sx={{
                mr: 3,
                width: 48,
                height: 48,
              }}
            >
              <Icon icon="mdi:license" />
            </CustomAvatar>
            <div>
              <Typography sx={{ color: "text.secondary" }}>
                {dialog.detailsTab.tabDetails.Typo3.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {dialog.detailsTab.tabDetails.Typo3.text}
              </Typography>
            </div>
          </Box>
          <Radio
            value="eBooking"
            onChange={(e) => console.log(e.target.value)}
            checked={state.type === "learning"}
          />
        </Box>
      </Box>
      {renderTabFooter()}
    </form>
  );
};

export default TabDetails;
