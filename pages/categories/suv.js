import CarList from '@/components/templates/CarList';
import carsData from '../../data/carsData'

function suv() {
  
const suv = carsData.filter(car => car.category==="suv")
console.log(suv);
  return (
<div><CarList data ={suv}/></div>
  )
}

export default suv