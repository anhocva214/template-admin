import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    {/* Custom fonts for this template*/}

                </Head>
                <body>
                    <Main />
                    <NextScript />



                    <script src="https://code.jquery.com/jquery-3.6.0.slim.js"
                        integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossOrigin="anonymous"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument;