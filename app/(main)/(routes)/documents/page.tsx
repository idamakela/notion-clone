'use client'

import Image from 'next/image'
import { PlusCircleIcon } from 'lucide-react'
import { useMutation } from 'convex/react'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { api } from '@/convex/_generated/api'

const Documents = () => {
  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onClick = () => {
    const promise = create({ title: 'Untitled' })

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note'
    })
  }

  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        width={300}
        height={300}
        alt='Empty'
        className='dark:hidden'
      />
      <Image
        src='/empty-dark.png'
        width={300}
        height={300}
        alt='Empty'
        className='hidden dark:block'
      />
      <h2 className='text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onClick}>
        <PlusCircleIcon className='mr-2 h-4 w-4' />
        Create a note
      </Button>
    </div>
  )
}

export default Documents
