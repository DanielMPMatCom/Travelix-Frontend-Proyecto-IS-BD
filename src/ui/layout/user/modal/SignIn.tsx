'use client';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { IconX, IconBrandInstagram } from '@tabler/icons-react';
import { useFormState, useFormStatus } from 'react-dom';
import { SignInState, ValidateUserAction } from '@/libs/actions/signIn';
import Link from 'next/link';
import { ContinueButton } from './ContinueButton';

export const SignIn = () => {
  const initialState = {};
  const [state, dispatch] = useFormState<SignInState, FormData>(
    ValidateUserAction,
    initialState
  );

  const searchParams = useSearchParams();
  const login = searchParams.get('login');
  const pathname = usePathname();

  return (
    login && (
      <dialog
        className={clsx(
          'flex flex-col rounded-[32px]',
          'bg-white dark:bg-extends-darker-blue-900',
          'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[480px] md:w-[520px]'
        )}
      >
        <form
          className='flex flex-col gap-4 md:gap-8 w-full *:w-full'
          action={dispatch}
        >
          <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
            <span className='text-lg leading-7 md:text-2xl font-medium w-full text-center'>
              Iniciar Sesión
            </span>
            <Link href={pathname} className='float-right'>
              <IconX stroke={1.5} className='h-6 w-6' color='currentColor' />
            </Link>
          </div>
          <span className='text-lg leading-7 md:text-2xl font-medium text-gray-800 dark:text-gray-50'>
            Bienvenido a Travelix
          </span>
          <div className='flex flex-col *:w-full gap-6'>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-600 dark:text-extends-darker-blue-200'
                htmlFor='username'
              >
                nombre de usuario
              </label>
              <input
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='name'
                id='username'
                name='username'
                placeholder='travelilero123'
                required
              />
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-600 dark:text-extends-darker-blue-200 '
                htmlFor='password'
              >
                contraseña
              </label>
              <input
                className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                type='password'
                id='password'
                name='password'
                placeholder='********'
                required
              />
            </div>
          </div>
          <div className='flex flex-col *:w-full gap-4'>
            <div>
              {state.errors && (
                <p className='text-[#e11d48]'>{state.message}</p>
              )}
            </div>
            <Link
              href={'?register=true'}
              className={clsx(
                'text-blue-500 hover:text-blue-600',
                'cursor-pointer text-right text-[15px] px-1'
              )}
            >
              ¿No tienes cuenta? Registrate
            </Link>
            <ContinueButton />
          </div>
          <div className='flex flex-col md:flex-row justify-start items-center gap-4'>
            <div className='text-gray-600 dark:text-extends-darker-blue-200 min-w-max'>
              continuar con
            </div>
            <div className='flex flex-row gap-2 w-full *:w-full'>
              <button
                className={clsx(
                  'flex justify-center items-center py-1',
                  'rounded-lg',
                  'bg-slate-50 hover:bg-slate-200'
                )}
              >
                <Image
                  src={require('@/ui/assets/google.png')}
                  width={48}
                  height={48}
                  alt='google'
                  className='h-auto w-auto'
                />
              </button>
              <button
                className={clsx(
                  'flex justify-center items-center py-1',
                  'rounded-lg',
                  'bg-gradient-to-t from-blue-600 to-blue-400',
                  'hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-500'
                )}
              >
                <Image
                  src={require('@/ui/assets/facebook.png')}
                  width={24}
                  height={48}
                  alt='facebook'
                  className='h-auto w-auto'
                />
              </button>
              <button
                className={clsx(
                  'flex justify-center items-center py-1',
                  'rounded-xl',
                  'bg-gradient-to-b from-pink-600 via-rose-600 to-rose-500',
                  'hover:bg-gradient-to-b hover:from-pink-700 hover:via-rose-700 hover:to-rose-600'
                )}
              >
                <IconBrandInstagram
                  stroke={2}
                  className='h-12 w-12'
                  color='white'
                />
              </button>
            </div>
          </div>
        </form>
      </dialog>
    )
  );
};
