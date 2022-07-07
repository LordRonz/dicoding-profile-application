/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si';

import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <section className='layout'>
          <div className='flex flex-col items-center justify-center bg-rose-700 py-4 text-center'>
            <h1>My Personal Information</h1>
          </div>
          <div className='flex items-center justify-center rounded-xl py-8'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <img
                src='https://validin-452d1.appspot.com.storage.googleapis.com/poto.jpg'
                alt='Me'
                className='w-60 rounded-full'
              />
              <h2>Aaron Christopher</h2>
              <p>Full Stack Web Developer</p>
            </div>
          </div>
          <div className='h-2 bg-gradient-to-tr from-blue-400 via-rose-300 to-rose-400' />
          <div className='flex items-center justify-center bg-neutral-700'>
            <div className='grid grid-cols-2 space-x-8 pt-4 pb-16 md:w-3/4'>
              <div className='space-y-4'>
                <h3>My Story</h3>
                <p>
                  I was born at a very young age. I am a passionate Programmer,
                  and love tinkering with Python to automate my personal tasks.
                  I have a good experience with backend technologies and
                  SysAdmin. I also have developed frontend skills by making some
                  React projects.
                </p>
              </div>
              <div className='space-y-3'>
                <h3>Personal Information</h3>
                <p className='border-b py-2'>
                  Age: <span className='font-bold'>20 years old</span>.
                </p>
                <p className='border-b py-2'>
                  Phone: <span className='font-bold'>+62-8169-6969-696</span>.
                </p>
                <p className='border-b py-2'>
                  Email: <span className='font-bold'>amogus69@sheesh.com</span>.
                </p>
              </div>
            </div>
          </div>
          <div className='my-8 flex items-center justify-center'>
            <div className='space-y-4'>
              <h3 className='text-center'>Find me in!</h3>
              <div className='flex space-x-16 text-3xl'>
                <a href='https://lr-link.vercel.app/github'>
                  <SiGithub className='hover:text-primary-300' />
                </a>
                <a href='https://lr-link.vercel.app/linkedin'>
                  <SiLinkedin className='hover:text-primary-300' />
                </a>
                <a href='https://lr-link.vercel.app/leetcode'>
                  <SiLeetcode className='hover:text-primary-300' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
