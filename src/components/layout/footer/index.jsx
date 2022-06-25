import styles from "./footer.module.css";
import NavigationBar from "../navigation_bar";

/*-- ****************************************************** -->
<---                     FOOTER COMPONENT                   -->
<--- ****************************************************** -*/

export default function Footer (){
    return(
        <footer className={ styles.footer }>
            <NavigationBar />
            <div className="tiny_text">
                Website Design and Code: (c) 2022 Kristan McKelvey
            </div>
        </footer>
    )
}