// _app is the root component inside of the body of the application
//_document helps you customize the entire html document
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays' /> 
          {/* this is a extra html element outside the app component tree for using it with react portals to portal our modals or overlays to this element */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;