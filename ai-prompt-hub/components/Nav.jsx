"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [ providers, setProviders ] = useState(null);

  useEffect(() => {
    
  }, [])
  

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/Ai-Prompt-Hub-logo.svg"
          alt="Ai Prompt Hub" 
          width={150}
          height={1}
          className="object-contain"
          />
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/creat-prompt" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn" type="button" onClick={signOut}>
            Sign Out
            </button>

            <Link href="/profile">
              <Image 
              src="/assets/images/logo.svg"
              width={36}
              height={36}
              className="rounded-full"
              alt="profile"
              />
            </Link>
          </div>
        ):(
          <>
          </>
        )}
      </div>

    </nav>
  )
}

export default Nav