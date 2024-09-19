'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from '@payloadcms/ui'
import lightLogo from './tesoroLogo.svg'
import darkLogo from './tesoroLogoWhite.svg'

const Logo = () => {
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    console.log('Initial theme:', theme)
    setCurrentTheme(theme)

    // Function to handle theme changes
    const handleThemeChange = () => {
      console.log('Theme changed:', theme)
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <div>
      <Image
        src={currentTheme === 'dark' ? darkLogo : lightLogo}
        alt="Logo"
        width={375} // 75% of 500
        height={375} // 75% of 500
      />
    </div>
  )
}

export default Logo
