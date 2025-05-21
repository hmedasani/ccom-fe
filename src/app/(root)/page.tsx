import { Button } from '@/components/ui/button'
import { Camera, User } from 'lucide-react'
import React from 'react'

export const metadata = {
  title: "Home"
}

const delay = (ms: number) => new Promise(
  (resolve) => setTimeout(resolve, ms)
)

export default async function HomePage() {

  await delay(2000)

  return (
    <div>
      Hello Home Page
      <Camera color="red" size={48} />
      <Button> <User color='white' /> Click me</Button>
    </div>
  )
}
