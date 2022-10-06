import styles from './Frase.module.css'

function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.frasesContent}>Este é o componente com uma frase</p>
        </div>
    )
}

export default Frase