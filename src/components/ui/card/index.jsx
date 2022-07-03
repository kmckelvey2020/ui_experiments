
/*-- ****************************************************** -->
<---                      CARD COMPONENT                    -->
<--- ****************************************************** -*/

export default function Card({ id='card', class_name="card",  name='card', children, ...inputProps}) {
    return (
        <div className={ class_name }>
            { children }
        </div>
    )
}