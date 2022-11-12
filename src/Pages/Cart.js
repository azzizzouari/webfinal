import React, { useContext } from 'react'
import UserContext from '../UserContext'

export default function Cart() {
    const { cart } = useContext(UserContext)
  return (
    <div>{JSON.stringify(cart)}</div>
  )
}
