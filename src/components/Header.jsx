import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Employees', href: '/Employees'},
  { name: 'Customers', href: '/Customers'},
  { name: 'Projects', href: '/Projects'},
  { name: 'Calendar', href: '/Calendar'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = (props) => {
  return (
  <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                    
                        className={({isActive}) => {
                          return 'no-underline rounded-md px-3 py-2 text-sm font-medium' 
                          + (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'no-underline bg-gray-900 text-white')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
              
                  className={({isActive}) => {
                    return 'no-underline block rounded-md px-3 py-2 text-base font-medium' 
                    + (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'no-underline bg-gray-900 text-white')
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
          <footer>Example</footer>
        </>
      )}
    </Disclosure>
    <div className='bg-gray-500'>
      <div className=' mx-auto max-w-7xl min-h-screen px-2 py-2'>{props.children}</div>
    </div>
  </>
  )
}

export default Header
