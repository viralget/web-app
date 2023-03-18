import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuDropDown({ buttonName, ButtonIcon, children, className }) {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className= { classNames("inline-flex w-full  justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300", className)}>
          <div className='flex items-center justify-center'>
           { ButtonIcon  ?  ButtonIcon :  null }
           </div>
           { buttonName }
          </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
