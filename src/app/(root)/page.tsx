import ProductList from '@/components/shared/products/ProductList'
import sampleData from '@/db/sample-data'
import React from 'react'

export const metadata = {
  title: "Home"
}

const delay = (ms: number) => new Promise(
  (resolve) => setTimeout(resolve, ms)
)

export default async function HomePage() {

  await delay(0)

  // console.log(sampleData)
  // const { products } = sampleData

  return (
    <div>
      Home Page
      <ProductList data={sampleData} title="Newest arrivals!" limit={4} />
    </div>
  )
}
