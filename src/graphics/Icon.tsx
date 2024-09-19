'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from '@payloadcms/ui';
import lightLogo from './Tesoro-T.svg';
import darkLogo from './Tesoro-T.svg';

const Icon = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    console.log('Initial theme:', theme);
    setCurrentTheme(theme);

    // Function to handle theme changes
    const handleThemeChange = () => {
      console.log('Theme changed:', theme);
      setCurrentTheme(theme);
    };
  }, [theme]);

  return (
    <div>
      <Image
        src={lightLogo}
        alt="Logo"
        width={500}
        height={700}
      />
    </div>
  );
};

export default Icon;