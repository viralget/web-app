import { Link } from '@inertiajs/inertia-react';
import logo from '../../assets/images/logos/logo.svg';

export function Logo(props) {
  return <Link href={route('home')}><img src={logo} {...props} /></Link>;
}