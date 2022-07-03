import styles from "./carousel.module.css";

/*-- ****************************************************** -->
<---                BASIC CAROUSEL COMPONENT                -->
<--- ****************************************************** -*/

export default function CarouselBasic (){
    return(
        <div className={ styles.carousel_basic }>
            <div className={ styles.basic_child} id="child1"><h1>Child 1</h1></div>
            <div className={ styles.basic_child} id="child2"><h1>Child 2</h1></div>
            <div className={ styles.basic_child} id="child3"><h1>Child 3</h1></div>
            <div className={ styles.basic_child} id="child4"><h1>Child 4</h1></div>
            <div className={ styles.basic_child} id="child5"><h1>Child 5</h1></div>
            <div className={ styles.controls}>
                <a href="#child1" className={ styles.btn}></a>
                <a href="#child2" className={ styles.btn}></a>
                <a href="#child3" className={ styles.btn}></a>
                <a href="#child4" className={ styles.btn}></a>
                <a href="#child5" className={ styles.btn}></a>
            </div>
        </div>
    )
}