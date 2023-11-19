'use client'

import { ChevronsLeftRight } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUser } from '@clerk/clerk-react'

const UserItem = () => {
  const { user } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role='button'
          className='flex w-full items-center p-3 text-sm hover:bg-primary/5'
        >
          <div className='flex max-w-[150px] items-center gap-x-2'>
            <Avatar className='h-5 w-5'>
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className='line-clamp-1 text-start font-medium'>
              {user?.fullName}&apos;s Jotion
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserItem
