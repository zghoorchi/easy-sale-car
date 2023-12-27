import CarDetails from '@/components/templates/CarDetails';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router'
import React from 'react'

function carid() {
  const router = useRouter();
   const carId= router.query.carid;
  // console.log(carId)

   const Details = carsData[carId - 1]
  //  console.log(Details)
  return (
    <CarDetails {...Details}/>
  )
}

export default carid