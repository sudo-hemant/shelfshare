"use client"
import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/"> Bookwise </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link href="/library" className={cn(
            'text-base cursor-pointer capitalize',
            pathname === '/library' ? 'text-light-200' : 'text-light-100'
          )}> Library </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header