import Document, { Html, Head, Main, NextScript } from 'next/document';
import PrismicScript from '../components/PrismicScript';
import { reset, globals } from 'styles';

import { apiEndpoint } from "./../prismic-configuration"; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1] //Regex to get repo ID

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
          <link rel="icon" href="/favicon.png" type="image/png" />
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];`}}></script>
            {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{ __html: `(function (a, s, y, n, c, h, i, d, e) {
            s.className += ' ' + y;
            h.start = 1 * new Date;
            h.end = i = function () {
            s.className = s.className.replace(RegExp(' ?' + y), '')
            };
            (a[n] = a[n] || []).hide = h;
            setTimeout(function () {
            i();
            h.end = null
            }, c);
            h.timeout = c;
            })(window, document.documentElement, 'async-hide', 'dataLayer', 6000, {
            'GTM-WPTBQHS': true
            });
          `}}></script>
           {/* <!-- End Google Tag Manager --> */}

 {/* <!-- GoogleAnalytics --> */}
          <script dangerouslySetInnerHTML={{ __html: `(function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                ga('create', 'UA-77862328-2', 'auto', {
                allowLinker: true
                });
                ga('require', 'GTM-WPTBQHS'); 
              `}}></script>
               {/* <!-- End Google GoogleAnalytics  --> */}

                <script dangerouslySetInnerHTML={{ __html: `
                // URLSearchParams not supported in ie/edge
                //var urlParams = new URLSearchParams(window.location.search);
                //var userID = urlParams.get('contactId');
                var userID = '';
                if( userID != '' ) {
                localStorage.setItem('localUserID', userID);
                }
                var getUserID = localStorage.getItem('localUserID');
                // push UserID value to data layer
                if( getUserID ) {
                //window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                'userId' : getUserID
                });
                }`}}>
                </script>


          <script dangerouslySetInnerHTML={{ __html: `//<![CDATA[
                var gtm4wp_datalayer_name = "dataLayer";
                          var dataLayer = dataLayer || [];
                            //]]>`}}></script>

          <script dangerouslySetInnerHTML={{ __html: `//<![CDATA[
             var dataLayer_content = {"pagePostType":"frontpage","pagePostType2":"single-page","pagePostAuthor":"IHAdmin","geoCountryCode":"(no geo data available)","geoCountryName":"(no geo data available)","geoRegionCode":"(no geo data available)","geoRegionName":"(no geo data available)","geoCity":"(no geo data available)","geoZipcode":"(no geo data available)","geoLatitude":"(no geo data available)","geoLongitude":"(no geo data available)","geoFullGeoData":{"success":false,"error":{"code":101,"type":"missing_access_key","info":"You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]"}}};
              dataLayer.push( dataLayer_content );//]]>`}}></script>

          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GGTM-WKDG2F6');`}}></script>


          {/* <!-- Heat Map --> */}
          <script dangerouslySetInnerHTML={{ __html: `function(h,e,a,t,m,p) {
              m=e.createElement(a);m.async=!0;m.src=t;
              p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);
              })(window,document,'script','https://u.heatmap.it/log.js');
          `}}></script>
           {/* <!-- end Heat Map --> 
             <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} /> 
           */}

         <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} /> 
         
        </Head>
        <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKDG2F6"
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
