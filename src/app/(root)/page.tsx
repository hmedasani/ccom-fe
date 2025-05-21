import React from 'react'

export const metadata = {
  title: "Home"
}

const delay = (ms: number) => new Promise(
  (resolve) => setTimeout(resolve, ms)
)

export default async function HomePage() {

  await delay(0)

  return (
    <div>
      Home Page
    </div>
  )
}
