import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { createContext } from 'react'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { RootObject } from '../types/seo'
import Header from '../components/Header'
import { MantineProvider } from '@mantine/core'

// Store Strapi Global object in context
interface ISEOContext {
  defaultSeo: RootObject
  siteName: string
}

export const SEOContext = createContext<ISEOContext>({
  defaultSeo: {
    defaultSeo: {
      id: 0,
      metaDescription: '',
      metaTitle: '',
      shareImage: {
        data: {
          attributes: {},
          id: 0,
        },
      },
    },
  },
  siteName: '',
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <SEOContext.Provider value={global.attributes}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Header />
          <Component {...pageProps} />
        </MantineProvider>
      </SEOContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  })
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
