import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuDropDown({ buttonName, buttonIcon, children, className }) {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={classNames("inline-flex w-full bg-white  justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold ", className)}>
          <div className='flex items-center justify-center'>
            {buttonIcon}
          </div>
          {buttonName}
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
        <Menu.Items className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
