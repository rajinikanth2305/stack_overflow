import Document, { Html, Head, Main, NextScript } from 'next/document';
import PrismicScript from '../components/PrismicScript';
import { reset, globals } from 'styles';

import { apiEndpoint } from "./../prismic-configuration"; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1] //Regex to get repo ID
const tagcode= process.env.NEXT_GTAG_ID;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
            rel="stylesheet"
          />
          <link rel="icon" href="/fav1.png" />

        
          <script async src={"https://www.googletagmanager.com/gtag/js?id=${tagcode}"}></script>

           
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${tagcode}');
                            `}}></script>
          
           {/* <!-- end Heat Map --> 
             <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} /> 
           */}
         <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} />
        </Head>
        <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${tagcode}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript> 
          <Main />
          <NextScript />
          {/* <!-- Google Tag Manager (noscript) -->*/}
        </body>
      </Html>
    )
  }

  /*render() {
              <script async defer src={`https://static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} />
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }*/
}

export default MyDocument
