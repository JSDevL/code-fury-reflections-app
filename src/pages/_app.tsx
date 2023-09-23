import { type AppType } from "next/app";

import { api } from "@reflections/utils/api";

import "@reflections/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
