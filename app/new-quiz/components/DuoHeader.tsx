'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function DuoHeader() {
  return (
    <div className="relative h-[15vh] w-full flex-shrink-0">
      <Image
        src="/images/header.jpg"
        alt="Header Background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Logo */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Link href="https://www.learnthroughstories.com/">
          <Image
            src="/images/logo.png"
            alt="Learn Through Stories"
            width={100}
            height={25}
            priority
          />
        </Link>
      </div>
      {/* Substack */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <Link href="https://learnthroughstories.substack.com/">
          <Image
            src="/images/substack.jpg"
            alt="Subscribe to Learn Through Stories"
            width={80}
            height={20}
            priority
          />
        </Link>
      </div>
    </div>
  )
} 