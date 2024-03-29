'use client'

import { useConvexAuth } from 'convex/react'
import { useScrollTop } from '@/hooks/useScrollTop'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import { Spinner } from '@/components/spinner'
import Logo from './Logo'

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <Logo />
      <div className='flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost' size='sm'>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get Jotion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm'>
              <Link href='/documents'>Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
