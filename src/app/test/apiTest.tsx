'use client'

import { useEffect, useState } from 'react'
import { API_BASE_URL } from '@/constans/api'


export default function ApiTestPage() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}/wizTechHrApi/employee/hong@example.com`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`)
        return res.json() // 또는 .json() - 응답 타입에 따라 다름
      })
      .then((data) => setMessage(data))
      .catch((err) => setMessage(err.message))
  }, [])

  return (
    <main>
      <h1>API 테스트</h1>
      <p><strong>응답:</strong> {message}</p>
    </main>
  )
}