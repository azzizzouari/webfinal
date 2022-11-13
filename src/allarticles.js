import React from 'react'
import Cards from './cards'
import { useContext } from 'react';
import { searchContext } from './contexts/searchContext';

const lista =[
  { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/641917_326652_01_front_comping.jpg", name:"Intel® Core™ i7", detail:"Intel Core i7-12700K Alder Lake 3.6GHz Twelve-Core LGA 1700 Boxed Processor", price:"339.99"},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/641915_326694_01_front_comping.jpg", name:"Intel® Core™ i9", detail:"Intel Core i9-12900K Alder Lake 3.2GHz Sixteen-Core LGA 1700 Boxed Processor", price:549.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/641920_326678_01_front_comping.jpg", name:"Intel® Core™ i5", detail:"Intel Core i5-12400 Alder Lake 2.5GHz Six-Core LGA 1700 Boxed Processor", price:159.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/630284_195081_01_front_comping.jpg", name:"AMD Ryzen 7", detail:"AMD Ryzen 7 5800X Vermeer 3.8GHz 8-Core AM4 Boxed Processor", price:199.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/630283_195099_01_front_comping.jpg", name:"AMD Ryzen 9", detail:"AMD Ryzen 9 5900X Vermeer 3.7GHz 12-Core AM4 Boxed Processor", price:339.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/630285_195073_01_front_comping.jpg", name:"AMD Ryzen 5", detail:"AMD Ryzen 5 5600X Vermeer 3.7GHz 6-Core AM4 Boxed Processor", price:149.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/659575_506063_06_package_comping.jpg", name:"NVIDIA GeForce RTX 4090", detail:"Zotac NVIDIA GeForce RTX 4090 Trinity Triple-Fan 24GB GDDR6X PCIe 4.0 Graphics Card", price:1599.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638988_291567_04_package_comping.jpg", name:"NVIDIA GeForce RTX 3070", detail:"EVGA NVIDIA GeForce RTX 3070 FTW3 Ultra Gaming Triple-Fan 8GB GDDR6 PCIe 4.0 Graphics Card", price:569.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/639487_298612_07_package_comping.jpg", name:"NVIDIA GeForce RTX 3080", detail:"Gigabyte NVIDIA GeForce RTX 3080 Gaming LHR Overclocked Triple-Fan 10GB GDDR6X PCIe 4.0 Graphics Card", price:759.99},
    { img: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/639955_304592_05_package_comping.jpg", name:"NVIDIA GeForce RTX 3060 Ti", detail:"MSI NVIDIA GeForce RTX 3060 Ti Ventus 3X LHR Overclocked Triple-Fan 8GB GDDR6 PCIe 4.0 Graphics Card", price:479.99}
]

export default function AllArticles({sortType}) {
  const { searchInput } = useContext(searchContext)

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
