import styles from "./header.module.css";
import NavigationBar from "../navigation_bar";
import SearchBar from "../search_bar";

/*-- ****************************************************** -->
<---                     HEADER COMPONENT                   -->
<--- ****************************************************** -*/

export default function Header (){

    return(
        <header className={ styles.header }>
            <nav className={ styles.navigation_and_search_bar }>
                <NavigationBar />
                <SearchBar />
            </nav>
        </header>
    )
}