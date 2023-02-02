import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../pages/Store";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (

    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      /> */}

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>

    </>
  )
};

export default MyApp;