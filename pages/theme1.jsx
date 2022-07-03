import Head from "next/head";
import Image from "next/image";

import styles from "./theme1.module.css";

export default function Theme1() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Theme 1</title>
                <meta name="description" content="Theme 1" />
            </Head>
            <div className={ styles.mockheader }>
                <div className="logo">Logo</div>
                <nav className="navigation">

                </nav>
                <div className="searchbar"></div>
                <nav className="hamburger"></nav>
            </div>
            <main className={ styles.mockmain }>
                <section className={ styles.section1 }>
                    <div>
                        <h1>Hero Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <Image 
                        src="/pexels-caroline-feelgood-3654776.jpg"
                        height={400}
                        width={500}
                    />
                </section>
                <section className={ styles.section2 }>
                    
                </section>
                <section className={ styles.section3 }>
                    
                </section>
            </main>
            <div className={ styles.mockfooter }>
                
            </div>
        </div>
    )
}