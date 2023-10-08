
import styles from "./Greetings.module.css"
console.log(styles)
function Greetings (){

    return (
        <>
         <h1>Hello From Aman</h1>
         <h2 className={styles.App}>What are you doing</h2>
        </>
    );
}


export  {Greetings};