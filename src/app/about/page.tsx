'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AboutPage() {
  const [ping, setPing] = useState<string>('Loading...')

  useEffect(() => {
    axios
      .get('https://72a8-211-33-223-91.ngrok-free.app/api/test/ping')
      .then((res) => {
        setPing(res.data)
      })
      .catch((error) => {
        console.error('API 요청 실패:', error)
        setPing('에러 발생')
      })
  }, [])

  return (
    <main>
      <h1>About Page</h1>
      <p>This is the about page of my portfolio.</p>
      <p>API 응답: {ping}</p>
    </main>
  )
}