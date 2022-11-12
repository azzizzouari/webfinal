import React, { useState } from 'react'
import AllArticles from '../allarticles'
import BestSelling from '../bestselling'
import Buttin from '../Buttin'
import Carousel from '../carousel'

export default function Page0()
{
    
    const [sortType, setsortType] = useState("up")

    return (
       <>
       <Carousel/>
       <BestSelling/>
       <Buttin setsortType={setsortType} />
       <AllArticles sortType={sortType}/>
       </>
    )
}