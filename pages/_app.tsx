import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import { AppProps } from "next/app";
import PlayerLayout from "../components/playerLayout";
import { NextComponentType } from "next";
import { StoreProvider } from "easy-peasy";
import { store } from "../lib/store";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

type CustomAppProps = AppProps & {
  Component: NextComponentType & { authPage?: boolean }; // add auth type
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
