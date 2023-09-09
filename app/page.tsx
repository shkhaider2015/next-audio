import Image from 'next/image'
import styles from './page.module.css'
import { AudioPlayer, InputField } from './_Components'

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioPlayer />
    </main>
  )
}
