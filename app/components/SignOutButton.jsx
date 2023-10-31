"use client"
import { useState } from 'react'
import Button from './ui/Button'
import { signIn } from 'next-auth/react'

const SignOutButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async ()=>{
        setIsLoading(true)

        try {
            await signOut()

        } catch (error) {
            setIsLoading(false)
            toast({
                title:"Error signing out",
                message:"Please try again later",
                type:"error"
            })
        }
    }
  return (
    <Button isLoading={isLoading} onClick={signUserOut}>sign in</Button>
  )
}

export default SignOutButton