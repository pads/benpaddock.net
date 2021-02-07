import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
