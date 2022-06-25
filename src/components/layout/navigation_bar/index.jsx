import Link from "next/link";
import styles from "./navigation_bar.module.css";

/*-- ****************************************************** -->
<---                NAVIGATION BAR COMPONENT                -->
<--- ****************************************************** -*/

export default function NavigationBar() {
    return(
        <nav className={ styles.navigation_bar }>
            <ul>
                <li><Link href="/"><a className={ styles.nav_link }>Home</a></Link></li>
                <li><Link href="/"><a className={ styles.nav_link }>Page 1</a></Link></li>
                <li><Link href="/"><a className={ styles.nav_link }>Page 2</a></Link></li>
                <li><Link href="/"><a className={ styles.nav_link }>Page 3</a></Link></li>
                <li><Link href="/"><a className={ styles.nav_link }>Page 4</a></Link></li>
            </ul> 
        </nav>
    )
}