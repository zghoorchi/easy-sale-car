import CarList from '@/components/templates/CarList';
import carsData from '../../data/carsData'

function sedan() {
  
const sedan = carsData.filter(car => car.category==="sedan")
console.log(sedan);
  return (
<div><CarList data ={sedan}/></div>
  )
}

export default sedan