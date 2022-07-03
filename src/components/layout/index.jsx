import styles from "./layout.module.css";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";
import Head from "next/head";

/*-- ****************************************************** -->
<---                    LAYOUT COMPONENT                    -->
<--- ****************************************************** -*/

export default function Layout ({ children }){
    return(
        <div className={ styles.layout_container }>
            <Header />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Meow+Script&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nixie+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Oswald:wght@200;300;400;500;600;700&family=Patrick+Hand&family=Press+Start+2P&family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=Source+Code+Pro:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Special+Elite&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />
            </Head>
            { children }
            <Footer />
        </div>
    )
}