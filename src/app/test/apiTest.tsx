'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '@/constans/api'

export default function ApiTestPage() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get(`${API_BASE_URL}/wizTechHrApi/employee/hong@example.com`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then((res) => setMessage(JSON.stringify(res.data)))
      .catch((err) => setMessage(err.message))
  }, [])

  return (
    <main>
      <h1>API 테스트</h1>
      <p><strong>응답:</strong> {message}</p>
    </main>
  )
}