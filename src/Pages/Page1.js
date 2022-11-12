import React, { useState } from 'react'
import AllArticles from '../allarticles';
import Buttin from './../Buttin';
export default function ()
{
    const [sortType, setsortType] = useState()
    return (
        <div>
            <br></br>
            <Buttin setsortType={setsortType} />
            <br></br>
            <AllArticles sortType={sortType} />
            <br></br>     
        </div>
    )
}
