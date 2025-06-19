'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('https://72a8-211-33-223-91.ngrok-free.app/api/test/ping', {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <main>
      <h1>About Page</h1>
      <p>This is the about page of my portfolio.</p>
      <p><strong>API 응답:</strong> {data}</p>
    </main>
  )
}