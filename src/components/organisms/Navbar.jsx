'use client';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useContext } from 'react';
import { CartContext } from 'ui-old-version';
import { motion } from 'framer-motion';

// import phone icon
import { PiPhoneCall } from 'react-icons/pi';
import { LuPhone, LuMail } from 'react-icons/lu'; // Íconos de react-icons

const Navbar = ({ withAll = true, withCart = false }) => {
  const { products } = useContext(CartContext);
  const navLinks = ['About Us', 'Practice Areas', 'Attorneys', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='absolute top-0 left-0 right-0 z-10 py-6'
    >
      <div className='container mx-auto px-4 flex justify-between items-center text-white'>
        <div className='text-2xl font-bold'>Blackwood & Sterling</div>
        <nav className='hidden md:flex gap-8'>
          {navLinks.map((link) => (
            <a
              key={link}
              href='#'
              className='hover:text-amber-500 transition-colors'
            >
              {link}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
          <LuPhone size={20} className='cursor-pointer hover:text-amber-500' />
          <LuMail size={20} className='cursor-pointer hover:text-amber-500' />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

const CartButton = () => {
  const { products } = useContext(CartContext);

  return (
    <div className='bg-third rounded-md p-2.5 flex justify-center items-center'>
      <Link
        href='/my-cart'
        className='hover:text-primary hover:underline flex items-center md:text-lg'
      >
        <div className='relative '>
          {products.length > 0 && (
            <div className='w-5 h-5 flex items-center justify-center rounded-full bg-secondary absolute -top-4 -right-4'>
              <p className='text-white text-[10px]'>
                {products.length > 99 ? '' : products.length}
              </p>
            </div>
          )}
          <AiOutlineShoppingCart className='text-white' size={17} />
        </div>
      </Link>
    </div>
  );
};

const GetAQuoteButton = () => {
  return (
    <div className='bg-third rounded-md p-2.5 flex justify-center items-center'>
      <Link
        href='/contact'
        className='hover:text-primary hover:underline flex items-center md:text-lg'
      >
        <p className='text-white mr-3'>Get a Quote</p>
        <PiPhoneCall className='text-white' size={25} />
      </Link>
    </div>
  );
};
