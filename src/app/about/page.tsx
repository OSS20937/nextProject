'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_BASE_URL } from '@/constans/api'

export default function AboutPage() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`${API_BASE_URL}/wizTechHrApi/test/ping`, {
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