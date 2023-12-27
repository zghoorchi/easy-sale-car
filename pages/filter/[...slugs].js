import { useRouter } from 'next/router'
import carsData from '@/data/carsData';
import Card from '@/components/module/Card';
import CarList from '@/components/templates/CarList';

function FilterdCars() {
  const router  = useRouter()
  const [min,max] = router.query.slugs|| [];
  
  const filteredcars = carsData.filter(car => car.price > min && car.price < max)
  if(!filteredcars.length) return <h3>Not found ...</h3>

  return (
   <CarList data={filteredcars}/>
  )
}

export default FilterdCars