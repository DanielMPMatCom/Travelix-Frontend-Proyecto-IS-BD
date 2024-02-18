import { useState } from 'react';
import { categoriesData } from '../organism/Categories/categoriesData';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';

const Separator = () => {
  return (
    <svg
      width='2'
      height='15'
      viewBox='0 0 2 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='currentColor'
    >
      <path d='M1 1.25V13.75' stroke='currentColor' stroke-linecap='round' />
    </svg>
  );
};

export const CategoryMenu = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(1); //TODO
  const [open, setOpen] = useState<boolean>(false);

  function handleButtonClick(index: number) {
    setOpen(!open);
    setCurrentCategory(index);
  }

  return (
    <div
      className={clsx(
        'flex flex-col *:p-2 justify-start items-center pl-1 w-36 relative',
        'font-bold text-base leading-6',
        'text-gray-500 dark:text-gray-50'
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className='flex flex-row justify-end w-full md:gap-1'
        onClick={() => setOpen(!open)}
      >
        {categoriesData[currentCategory].shortName} <IconChevronDown />
        <span className='text-gray-500 dark:text-gray-300'>
          <Separator />
        </span>
      </button>
      <div
        className={clsx(
          'flex flex-col justify-start items-start',
          'absolute w-full min-w-max mt-10 z-10 gap-2 bg-white dark:bg-extends-darker-blue-900 rounded-b-xl shadow-lg',
          { hidden: !open }
        )}
      >
        {categoriesData.map(
          (category, index) =>
            index != currentCategory && (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className='hover:text-orange-500 w-full flex'
              >
                {category.shortName}
              </button>
            )
        )}
      </div>
    </div>
  );
};
