"use client"
import { useState } from 'react'
import Button from './ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from './ui/Toast'


const SignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async ()=>{
        setIsLoading(true)

        try {
            await signIn("google")

        } catch (error) {
            setIsLoading(false)
            toast({
                title:"Error signing in",
                message:"Please try again later",
                type:"error"
            })
        }
    }
  return (
    <Button isLoading={isLoading}  className="dark:bg-slate-200 " onClick={signInWithGoogle}>sign in</Button>
  )
}

export default SignInButton