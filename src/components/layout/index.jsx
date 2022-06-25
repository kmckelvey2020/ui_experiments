import styles from "./layout.module.css";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";

/*-- ****************************************************** -->
<---                    LAYOUT COMPONENT                    -->
<--- ****************************************************** -*/

export default function Layout ({ children }){
    return(
        <div className={ styles.layout_container }>
            <Header />
            { children }
            <Footer />
        </div>
    )
}