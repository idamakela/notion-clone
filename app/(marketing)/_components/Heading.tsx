'use client'

import { useConvexAuth } from 'convex/react'
import { SignInButton } from '@clerk/clerk-react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import Link from 'next/link'

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='tex-3xl sm: md:text.6xl text-5xl font-bold'>
        Your Ideas, Documents, & Plans. Unified. Welcome to{' '}
        <span className='underline'>Jotion</span>
      </h1>
      <h3 className='tex-base sm:text-xl md:text-2xl'>
        Jotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className='flex w-full items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href='/documents'>
            Enter Jotion <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Jotion Free <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading
