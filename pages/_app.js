import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../components/store/store";

const theme = {};

 class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

const makestore = ()=> store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
