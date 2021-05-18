// import App from 'next/app'
import { reset, globals } from 'styles'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
