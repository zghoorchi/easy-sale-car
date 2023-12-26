import Link from 'next/link'
import styles from './Layout.module.css'

function layout({children}) {
  return (
    <div>
        <header className={styles.header}>
            <Link href="/">
            <h2>Easy Sale Car</h2>
            <p>Choose an Buy your car</p>
            </Link>
           
        </header>

           <div className={styles.container}>{children}</div>

        <footer className={styles.footer}>Easy Sale Car Next.js training &copy;</footer>
    </div>
  )
}

export default layout