import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        type="text/javascript"
        id="storyblokBridge"
      />
    </>
  )
}

export default MyApp
