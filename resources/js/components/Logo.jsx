import { Link } from '@inertiajs/inertia-react';
import logo from '../../assets/images/logos/logo.svg';
// import logo from '../../assets/images/logo.png';

export function Logo(props) {
  return <Link href={route('home')}><img src={logo} {...props} /></Link>;
}