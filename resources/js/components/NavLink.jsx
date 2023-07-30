import { Link } from '@inertiajs/inertia-react'
import { classNames } from '@/Utils/helpers'

export function NavLink({ href,className, children }) {
  return (
    <Link
      href={href}
      className={classNames("inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900", className)}
    >
      {children}
    </Link>
  )
}
