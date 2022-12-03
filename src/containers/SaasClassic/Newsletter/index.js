import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Input from "common/components/Input";
import Container from "common/components/UI/Container";

import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {
  const router = useRouter();
  const { locale } = router;
  const { newsLetterSection } = locale === "en" ? en : ar;
  textArea[locale === "ar" ? "pl" : "pr"] = ["0", "0", "0", "80px", "100px"];
  if (locale === "ar") {
    title.textAlign = ["center", "center", "center", "right", "right"];
    description.textAlign = ["center", "center", "center", "right", "right"];
  }
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper dir={locale === "ar" ? "rtl" : "ltr"}>
          <Box {...textArea}>
            <Heading content={newsLetterSection.headText} {...title} />
            <Text content={newsLetterSection.heading} {...description} />
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Input
                inputType="email"
                label={newsLetterSection.input.label}
                // iconPosition={newsLetterSection.input.iconPosition}
                iconPosition="left"
                isMaterial={true}
                style={
                  locale === "ar" ? { marginRight: 0, marginLeft: 20 } : {}
                }
                className="email_input"
              />
              <Button {...buttonStyle} title={newsLetterSection.button} />
            </ContactFormWrapper>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {
    as: "section",
    pt: ["60px", "80px", "80px", "80px", "100px"],
    pb: "20px",
  },
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    // pr: ["0", "0", "0", "80px", "100px"],
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    colors: "secondaryWithBg",
    color: "#03103b",
  },
};

export default Newsletter;
