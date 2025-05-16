import React from 'react';
import Image from 'next/image'; // If using Next.js; otherwise use <img>
import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 40 }) => {
  const logoPath = `/logo/bithive-logo.png`; // use .svg if available and preferred

  return (
    <Link href={"/"} className="flex items-center">
        <Image
          src={logoPath}
          alt="BitHive Logo"
          width={size}
          height={size}
          priority
        />
    </Link>
  );
};

export default Logo;
