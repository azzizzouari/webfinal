import React from 'react'
import Cards from './cards'
import { useContext } from 'react';
import { searchContext } from './contexts/searchContext';

const lista =[
  { img: "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryPages_Inteli7CPU.jpg", name:"Intel® Core™ i7", detail:"Intel Core i7-12700K Alder Lake 3.6GHz Twelve-Core LGA 1700 Boxed Processor", price:"339.99"},
    { img: "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryPages_Inteli9CPU.jpg", name:"Intel® Core™ i9", detail:"Intel Core i9-12900K Alder Lake 3.2GHz Sixteen-Core LGA 1700 Boxed Processor", price:549.99},
    { img: "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryPages_Inteli5CPU.jpg", name:"Intel® Core™ i5", detail:"Intel Core i5-12400 Alder Lake 2.5GHz Six-Core LGA 1700 Boxed Processor", price:159.99},
    { img: "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryPages_Inteli9CPU.jpg", name:"Intel® Core™ i9", detail:"Intel Core i9-12900K Alder Lake 3.2GHz Sixteen-Core LGA 1700 Boxed Processor", price:549.99},
    { img: "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryPages_Inteli9CPU.jpg", name:"Intel® Core™ i9", detail:"Intel Core i9-12900K Alder Lake 3.2GHz Sixteen-Core LGA 1700 Boxed Processor", price:549.99}
]

export default function AllArticles({sortType}) {
  const { searchInput }= useContext(searchContext)

  const ASC = (a,b)=>a?.price-b.price
  const DSC = (a,b)=>b?.price-a.price

  const sortTypeStatus = {
    "up":ASC,
    "down":DSC
  }

  return (
    <div className="flex justify-center flex-wrap">

      {lista.sort(sortType? sortTypeStatus[sortType]:(a,b)=>b.name-a.name).filter(e=>(e.name.toLowerCase()).includes(searchInput.toLowerCase())).map((e)=><Cards  img={e.img} name={e.name} detail={e.detail} price={e.price} />)  }
      
    </div>
  )
}
