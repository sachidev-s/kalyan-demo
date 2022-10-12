import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../Apollo/apollo_client'
import Header from '../components/Header'
// import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  
  <ApolloProvider  client={client}>
   <Header/>
  
  <Component {...pageProps} />
  </ApolloProvider>

  )
}
export default MyApp






