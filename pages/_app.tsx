import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'

const queryClient = new QueryClient();

library.add(fas);

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}> <Component {...pageProps} /></QueryClientProvider>
}

export default MyApp;
