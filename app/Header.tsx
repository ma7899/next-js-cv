import Link from 'next/link';
import React from 'react';
import HeaderButton from '../components/HeaderButton';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const redirect = (url: string) => {
    router?.push(url);
  };

  return (
    <header className="p-5 bg-black opacity-90 flex flex-row justify-center space-x-10">
      <Link
        href="/"
        className="w-1/12"
      >
        <HeaderButton
          children="Home"
          styles="focus:text-black focus:bg-white focus:border-black focus:shadow-lg focus:shadow-gray-300 focus:outline-1 focus:outline-black "
        />
      </Link>
      <Link
        href="/educations"
        className="w-1/12"
      >
        <HeaderButton children="Educations" />
      </Link>
    </header>
  );
};

export default Header;
