import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'src/redux/index';
// import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import '../resources/font-awesome6pro/css/all.min.css'

import '../resources/styles/globals.css'
import Toast from '@components/elements-ui/toast';
import 'collapsible-react-component/dist/index.css'

import 'antd/dist/reset.css';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={"hello"} />
        <meta name="author" content={"anho"} />
        <title>My Project</title>
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />

        {/* CSS custom */}
        {/* <link rel="stylesheet" href="/css/all.min.css" /> */}


      </Head>

      {/* <Alert stack={{ limit: 3 }} /> */}

      <Provider store={store}>
        <Toast />
        <Component {...pageProps} />
      </Provider>

    </>
  )
}

export default App
