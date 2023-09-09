import styles from './InputField.module.css';

export default function InputField () {
    return <div className={styles.container} >
        <input type='file' placeholder='Upload Audio' accept="audio/mp3" />
    </div>
}