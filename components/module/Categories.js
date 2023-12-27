import Link from 'next/link'
import Hatchback from '../icons/Hatchback'
import Sedan from '../icons/Sedan'
import Sport from '../icons/Sport'
import Suv from '../icons/Suv'
import styles from './Categories.module.css'

function Categories() {
  return (
    <div className={styles.container}>
        <Link href='/categories/sedan'>
        <div>
            <span>Sedan</span>
            <Sedan />
        </div>
        </Link>
       <Link href='/categories/suv'>
       <div>
            <span>Suv</span>
            <Suv />
        </div>
       </Link>
        <Link href='/categories/hatchback'>
        <div>
            <span>HatchBack</span>
            <Hatchback />
        </div>
        </Link>
       <Link href='/categories/sport'>
       <div>
            <span>sport</span>
            <Sport />
        </div>
       </Link>
      

    </div>
  )
}

export default Categories