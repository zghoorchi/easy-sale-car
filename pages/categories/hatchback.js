import CarList from '@/components/templates/CarList';
import carsData from '../../data/carsData'

function hatchback() {
  
const hatchback = carsData.filter(car => car.category==="hatchback")
console.log(hatchback);
  return (
<div><CarList data ={hatchback}/></div>
  )
}

export default hatchback