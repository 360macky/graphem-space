import React from 'react';

import rocket from '../assets/rocket.svg';
import code from '../assets/code.svg';
import bug from '../assets/bug.svg';

const Footer = () => {
  return (
    <footer className="flex justify-center pt-[3rem] flex-col text-center gap-y-[1rem] mt-[2rem] pb-[3rem] bg-gray-100 dark:bg-[black] w-full">
      <div className="flex justify-center flex-col gap-y-[1rem] sm:flex-row sm:gap-x-[4rem]">
        <a href="https://github.com/360macky/graphem">
          <div className="flex items-center">
            <img src={code} className="dark:invert" alt="" />{' '}
            <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
              Repository
            </h2>
          </div>
        </a>
        <a href="https://github.com/360macky/graphem/graphs/contributors">
          <div className="flex items-center">
            <img src={code} className="dark:invert" alt="" />{' '}
            <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
              Contributors
            </h2>
          </div>
        </a>
        <a href="https://github.com/nasa/openmct">
          <div className="flex items-center">
            <img src={rocket} className="dark:invert" alt="" />{' '}
            <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
              NASA Open MCT
            </h2>
          </div>
        </a>
        <a href="https://github.com/360macky/graphem/issues">
          <div className="flex items-center">
            <img src={bug} className="dark:invert" alt="" />{' '}
            <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
              Issues
            </h2>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
