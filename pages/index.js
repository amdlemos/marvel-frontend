import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
     

      <main className=''>
        <h1 className=''>
          Welcome to <Link href="/">Marvel API!</Link>
        </h1>     
      </main>

      <footer className={styles.footer}>    
      </footer>
    </div>
  )
}
