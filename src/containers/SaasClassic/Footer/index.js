import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import Icon from "../../../common/components/icon/index";
// import { red } from '@mui/material/colors';
// const color = red[500];
import { useState } from "react";
import LogoImage from "common/assets/image/saasClassic/logo.png";
import { FOOTER_WIDGET, FOOTER_WIDGET_AR } from "common/data/SaasClassic";
import Button from "@mui/material/Button";


export const termsandconditions = () => {
  return (
    <>
      <h3>Terms of Service</h3>
      <p>Welcome to Systemha, a SaaS company that provides cloud-based solutions for businesses. By using our products and services, you agree to the following terms and conditions:</p>
      <h4>1. Definitions</h4>
      <p>"Systemha" means the company, its affiliates, and its products and services.</p>
      <p>"Customer" means the company or individual that subscribes to Systemha's products and services.</p>
      <p>"Service" means the products and services provided by Systemha, including the software, hardware, and network infrastructure.</p>
      <h4>2. Use of Service</h4>
      <p>Systemha grants the Customer a non-exclusive, non-transferable, revocable license to use the Service during the term of the subscription. The Customer agrees to use the Service in accordance with Systemha's acceptable use policy and applicable laws and regulations.</p>
      <h4>3. Payment and Billing</h4>
      <p>The Customer agrees to pay the fees for the Service in accordance with the pricing and billing terms agreed upon at the time of subscription. Systemha reserves the right to change the pricing and billing terms with prior notice to the Customer. The Customer is responsible for any taxes or fees that may be imposed on the use of the Service.</p>
      <h4>4. Intellectual Property</h4>
      <p>Systemha retains all intellectual property rights in the Service, including but not limited to patents, trademarks, copyrights, and trade secrets. The Customer agrees not to reverse engineer, modify, or distribute the Service without Systemha's prior written consent.</p>
      <h4>5. Limitation of Liability</h4>
      <p>Systemha shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the Service, including but not limited to loss of profits, data, or business opportunities. Systemha's liability shall be limited to the amount paid by the Customer for the Service during the previous six-month period.</p>
    </>
  )
}

export const termsandconditionsAr = () => {
  return (
    <>
      <h3>الأحكام والشروط</h3>
      <p>مرحبًا بك في سيستمها، شركة SaaS التي توفر حلولًا سحابية للأعمال. باستخدام منتجاتنا وخدماتنا، فإنك توافق على الشروط والأحكام التالية:</p>
      <h4>1. التعريفات</h4>
      <p>"سيستمها" تعني الشركة وشركاتها التابعة ومنتجاتها وخدماتها.</p>
      <p>"العميل" يعني الشركة أو الفرد الذي يشترك في منتجات وخدمات سيستمها.</p>
      <p>"الخدمة" تعني المنتجات والخدمات التي تقدمها سيستمها، بما في ذلك البرمجيات والأجهزة والبنية التحتية للشبكة.</p>
      <h4>2. استخدام الخدمة</h4>
      <p>تمنح سيستمها العميل ترخيصًا غير حصري وغير قابل للتحويل وقابل للإلغاء لاستخدام الخدمة خلال فترة الاشتراك. يوافق العميل على استخدام الخدمة وفقًا لسياسة الاستخدام المقبولة لسيستمها والقوانين واللوائح المعمول بها.</p>
      <h4>3. الدفع والفوترة</h4>
      <p>يلتزم العميل بدفع الرسوم المستحقة عن الخدمة وفقًا للأسعار وشروط الفوترة المتفق عليها في وقت الاشتراك. تحتفظ سيستمها بحق تغيير أسعار وشروط الفوترة بإشعار مسبق للعميل. يتحمل العميل المسؤولية عن أي ضرائب أو رسوم يمكن فرضها على استخدام الخدمة.</p>
      <h4>4. الملكية الفكرية</h4>
      <p>تحتفظ سيستمها بجميع حقوق الملكية الفكرية في الخدمة، بما في ذلك وليس محصورًا على ذلك البراءات والعلامات التجارية وحقوق النشر وأسرار التجارة. يوافق العميل على عدم عكس هندسة العكس أو تعديل الخدمة أو توزيعها بدون موافقة كتابية مسبقة من سيستمها.</p>
      <h4>5. الحد من المسؤولية</h4>
      <p>لا تكون سيستمها مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو ناتجة عن الاستخدام الخدمة، بما في ذلك وليس محصورًا على ذلك فقدان الأرباح أو البيانات أو فرص العمل. يكون مسؤولية سيستمها محدودًا بالمبلغ المدفوع من قبل العميل عند الاشتراك في الخدمة خلال الفترة السابقة لمدة ستة أشهر.</p>
    </>
  )
}

const SystemhaPrivacyPolicy = () => {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>Systemha is committed to protecting the privacy and security of its customers' personal information. This privacy policy outlines how Systemha collects, uses, stores, and protects personal information of its customers and users.</p>
      <h2>1. Information Collection</h2>
      <p>Systemha may collect personal information of its customers and users, such as name, email address, IP address, and usage data. This information is collected for the purposes of providing and improving the Service, communicating with customers, and complying with legal requirements.</p>
      <h2>2. Information Use</h2>
      <p>Systemha uses personal information to provide and improve the Service, communicate with customers, and comply with legal requirements. Systemha does not sell or share personal information with third parties, except as necessary to provide the Service or comply with legal requirements.</p>
      <h2>3. Information Storage and Protection</h2>
      <p>Systemha stores personal information in secure servers and data centers located in the United States. Systemha uses reasonable and appropriate measures to protect personal information from unauthorized access, disclosure, alteration, and destruction.</p>
      <h2>4. Information Access</h2>
      <p>Customers have the right to access, modify, or delete their personal information by contacting Systemha's support team. Systemha may retain certain personal information for legal or business purposes, such as billing and accounting records.</p>
      <h2>5. Changes to Policy</h2>
      <p>Systemha may update this privacy policy from time to time with prior notice to customers. Customers are advised to review the policy periodically to stay informed of any changes.</p>
    </>
  )
}

const SystemhaPrivacyPolicyAr = () => {
  return (
    <>
      <h1>سياسة الخصوصية</h1>
      <p>تحترم سيستمها خصوصية عملائها وتلتزم بحماية بياناتهم الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تحصل عليها سيستمها من العملاء.</p>
      <h2>1. المعلومات التي نجمعها</h2>
      <p>تجمع سيستمها معلومات العملاء عندما يشتركون في الخدمة أو يتفاعلون مع الموقع أو التطبيقات. يشمل ذلك الاسم وعنوان البريد الإلكتروني ورقم الهاتف ومعلومات الدفع ومعلومات الاستخدام وغيرها من المعلومات الشخصية.</p>
      <h2>2. كيف نستخدم المعلومات</h2>
      <p>تستخدم سيستمها المعلومات التي تحصل عليها من العملاء لتقديم الخدمة وتحسينها، بما في ذلك تخصيص الخدمة وتحليل الاستخدام والاتصال بالعملاء. قد تستخدم سيستمها المعلومات للتواصل مع العملاء حول المنتجات والخدمات الجديدة أو العروض أو التحديثات.</p>
      <h2>3. مشاركة المعلومات</h2>
      <p>قد تشارك سيستمها المع</p>
    </>
  );
}

const SystemhaLevelAgreement = () => {
  return (
    <>
      <h1>Service Level Agreement</h1>
      <p>Systemha provides a service level commitment to its customers as follows:</p>
      <h2>1. Uptime Guarantee</h2>
      <p>Systemha guarantees a minimum uptime of 99.9% for the Service during the term of the subscription.</p>
      <h2>2. Response Times</h2>
      <p>Systemha guarantees a response time of 4 hours for critical issues, 8 hours for major issues, and 24 hours for minor issues, during the business hours of 9 am to 5 pm Pacific Time, Monday to Friday.</p>
      <h2>3. Support Procedures</h2>
      <p>Systemha provides support to its customers through email, phone, and online chat. Customers are advised to contact Systemha's support team for any issues or inquiries related to the Service.</p>
    </>
  )
}

const SystemhaLevelAgreementAr = () => {
  return (
    <>
      <h1>اتفاقية مستوى الخدمة</h1>
      <p>تقدم سيستمها التزامًا بمستوى الخدمة لعملائها على النحو التالي:</p>
      <h2>1. ضمان الوقت النشط</h2>
      <p>تضمن سيستمها وقت تشغيل أدنى قدر من 99.9٪ للخدمة خلال فترة الاشتراك.</p>
      <h2>2. أوقات الاستجابة</h2>
      <p>تضمن سيستمها وقت استجابة 4 ساعات للمشكلات الحرجة و 8 ساعات للمشكلات الكبيرة و 24 ساعة للمشكلات الطفيفة، خلال ساعات العمل من 9 صباحًا إلى 5 مساءً بتوقيت المحيط الهادئ من الاثنين إلى الجمعة.</p>
      <h2>3. إجراءات الدعم</h2>
      <p>تقدم سيستمها الدعم لعملائها عبر البريد الإلكتروني والهاتف والدردشة عبر الإنترنت. يُنصح العملاء بالاتصال بفريق الدعم الخاص بسيستمها لأي مشكلات أو استفسارات تتعلق بالخدمة.</p>
    </>
  )
}


const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState();
  function handleClose() {
    setShowPopup(false);
  }


  const { locale } = router;
  const footerWidget = locale === "ar" ? FOOTER_WIDGET_AR : FOOTER_WIDGET;
  const nextArrow = locale === "ar" ? "mdi:exit-run" : "mdi:exit-run";
  const showMessage = () => {
    switch (message) {
      case 0:
        return locale === "ar" ? termsandconditionsAr() : termsandconditions();
      case 1:
        return locale === "ar" ? SystemhaPrivacyPolicyAr() : SystemhaPrivacyPolicy();
      case 2:
        return locale === "ar" ? SystemhaLevelAgreementAr() : SystemhaLevelAgreement();
      default:
        return <div>comming soon ...</div>
    }
  }
  return (
    <FooterWrapper>
      <Container className="footer_container" >
        <Box className="row" {...row} dir={locale === "ar" ? "rtl" : "ltr"}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="supporter@systemha.com" {...textStyle} />
            <Text content="+201027041437" {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo} dir={locale === "ar" ? "rtl" : "ltr"}>
            {footerWidget.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <React.Fragment>
                  <Heading content={widget.title} {...titleStyle} />
                  <List>
                    {widget.menuItems.map((item, index) => (
                      <ListItem key={`footer-list-item-${index}`}>
                        <div style={{
                          display: 'inline-block',
                          padding: '0.5rem',
                          textDecoration: 'none',
                          borderRadius: '0.25rem',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease-in-out'
                        }} className="ListItem">
                          <div onClick={() => {
                            setShowPopup(true)
                            setMessage(widget.id === 1 ? index : 10)
                          }
                          }>
                            {item.text}
                          </div>
                        </div>
                      </ListItem>
                    ))}
                  </List>
                </React.Fragment>
              </Box>
            ))}
          </Box>
          {showPopup && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '2rem', zIndex: 2 }}>
                {showMessage()}
                <Button
                  variant="contained"
                  type="submit"
                  color="warning"
                  onClick={handleClose}
                  endIcon={
                    <Icon icon={nextArrow} />
                  }
                >
                  Close
                </Button>
              </div>
            </div>
          )}
          {/* End of footer List column */}
        </Box>
      </Container>
      <Box >
        <Box style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          color: '#000',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          textAlign: 'center',
          borderTop: '1px solid #e5e5e5',
          marginTop: '2rem'

        }}>
          <div  {...textStyle} >
            Copy rights © 2023 Systemha. All rights reserved powerd-by <Link href="https://planing-solutions.com/" > planing solutions</Link>
          </div>

        </Box>
      </Box>
    </FooterWrapper >
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "23%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
