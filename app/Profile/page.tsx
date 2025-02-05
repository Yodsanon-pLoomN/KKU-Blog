'use client'

import Naver from 'next-auth/providers/naver'
import { useSession, signOut } from 'next-auth/react'


import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Profile() {
  const { data: session, status } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  // When after loading success and have session, show profile
  return (
    
    status === 'authenticated' &&
    session.user && (
      
      <div className="flex h-screen items-center justify-center">
        <Navbar />
        <div className="bg-white p-6 rounded-md shadow-md">
          <p>
            Welcome, <b>{session.user.name}!</b>
          </p>
          <p>Email: {session.user.email}</p>
          
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    )
  )
}