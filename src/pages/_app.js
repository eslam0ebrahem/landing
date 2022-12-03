import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/motion.css";
import "common/assets/css/rc-collapse.css";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// ** MUI Imports
import { Direction } from "@mui/material";

// ** RTL Plugin
import stylisRTLPlugin from "stylis-plugin-rtl";

const styleCache = () =>
  createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [stylisRTLPlugin],
  });

// import ThemeComponent from "../@core/theme/ThemeComponent";
import "rc-collapse/assets/index.css";
import localFont from "@next/font/local";
import { useRouter } from "next/router";

const myFont = localFont({
  src: "../common/assets/fonts/alfont_com_SST-Arabic-Medium.ttf",
});

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <Modal
    //  className={myFont.className}
    >
      {locale === "ar" ? (
        <CacheProvider value={styleCache()}>
          <Component {...pageProps} />
        </CacheProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </Modal>
  );
}
