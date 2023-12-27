import CarList from '@/components/templates/CarList';
import carsData from '../../data/carsData'

function sport() {
  
const sport = carsData.filter(car => car.category==="sport")
console.log(sport);
  return (
<div><CarList data ={sport}/></div>
  )
}

export default sport