import "../styles/globals.css";
import Layout from "@/src/components/layout";
import { SearchContextProvider } from "@/src/context/search_context";

/*-- ****************************************************** -->
<---                         APP                            -->
<--- ****************************************************** -*/

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
    )
}