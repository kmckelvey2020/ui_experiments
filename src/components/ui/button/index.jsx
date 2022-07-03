import styles from "./button.module.css";

/*-- ****************************************************** -->
<---                     BUTTON COMPONENT                   -->
<--- ****************************************************** -*/

export default function Button({ id='button', label='button', class_name='button', onClick = () => {}, name='button', type='button', value='button', ...inputProps}){
    
    return (
        <button 
            className={ class_name }
            id={ id }
            { ...inputProps }
            name={ name }
            type={ type }
            value={ value }
            onClick={ onClick }
        >
            { label }
        </button>
    )
}