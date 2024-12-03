"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
    const{data:session} = useSession()
    const router = useRouter()
    const loginPageSend = () => {
        setTimeout(() => {
            router.push('/login')
        }, 1100);
    }
    useEffect(() => {
        if(!session){
            loginPageSend()
        }
    }, [session, router])

    if(!session){
        return (
            <div className='text-white'>
                <h1>Redirecting to login page</h1>
                {loginPageSend()}
            </div>
        )
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard