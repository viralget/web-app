import Guest from '@/components/Layouts/Guest'
import SideContact from './components/SideContact';
import ContactForm from './components/ContactForm';


export default function Contact() {


 
    return (
        <Guest>
             <div className='flex md:flex-row   flex-col  '>
               <SideContact />
              <ContactForm />
                 
             </div>
        </Guest>
    )
}

