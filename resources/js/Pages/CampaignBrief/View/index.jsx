import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';
import { classNames } from '@/Utils/helpers';
import { numberWithCommas } from '@/Utils/helpers';
import ReportList from '../Report/list';
import { useState } from 'react';
import CreateReport from '../Report/create';
import Modal from '@/components/Modal';
import PaymentButton from '@/Components/PaymentButton';
import { usePage } from '@inertiajs/inertia-react';
import { patch, post } from '@/Utils/api';
import Details from './Details';

const View = ({ campaign }) => {

   const { auth } = usePage().props;
   const { user } = auth;

   const [open, setOpen] = useState(false)

   function handleModal() {
      setOpen(!open);
   }


   async function verifyPayment(payment_data) {
      setBtnMessage("Verifying payment..");
      const response = await axios.post(route("general.payments.verify"), payment_data);
      if (response?.data.status) {
         createBrief();
      } else {
         toast.error('Something went wrong');
      }

   }

   async function handleUpdateCampaignPayment(reference) {
      const response = await patch(route('brief.reference.update', { brief: campaign.id }), { reference_number: reference }, true);

      if (response?.data?.status) {
         setTimeout(() => {
            window.location.reload();
         }, 300)
      }
   }


   function handleCalculateTotal(budget) {
      const serviceFee = 0.15 * Number(budget);
      const total = Number(budget) + serviceFee;

      return total;
   }

   return (
      <AuthenticatedLayout title="My Campaigns" smallHeader={true} >


         <Modal iDisplay={open}>
            <CreateReport handleModalClose={handleModal} campaign_briefs_id={campaign.id} />
         </Modal>


         <Details campaign={campaign} />
      </AuthenticatedLayout>
   )

   return (
      <AuthenticatedLayout title="My Campaigns" smallHeader={true}>


         <Modal iDisplay={open}>
            <CreateReport handleModalClose={handleModal} campaign_briefs_id={campaign.id} />
         </Modal>

         {!campaign.reference_number && (
            <PaymentButton {...{
               email: user.email,
               amount: handleCalculateTotal(campaign.budget),
               metadata: { ...campaign, email: user.email },
               paymentDataExtras: {
                  // job_listing_id: job.id,
               },
               type: 'paid-listing',
               paymentVerificationRoute: route("general.payments.verify"),
               postPaymentAction: handleUpdateCampaignPayment,
               // successRedirectsTo: route('brief.success'),
            }}>Make Payment</PaymentButton>
         )}

         <div className='bg-white h-screen  mt-3 px-5 mb-10'>
            <ButtonBack />

            <section className="py-12 bg-white sm:py-16 lg:py-20 shadow-md border mt-5">
               <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className='flex flex-col items-center justify-center '>
                     <div className='w-32 h-32'>
                        <img src={campaign.logo_url} className='w-full h-full object-fit rounded-full' />
                     </div>
                     <div className='mt-3'>
                        <span className={classNames(' p-2 rounded-md text-white capitalize', campaign.status === 'pending' || campaign.status === 'in-progress' ? 'bg-yellow-400' : campaign.status === 'approved' ? 'bg-green-400' : campaign.status === 'completed' ? 'bg-blue-400' : campaign.status === 'rejected' ? 'bg-red-400' : 'bg-gray-400 text-black')}>
                           {campaign.status}
                        </span>
                     </div>
                  </div>

                  <a href='#reports' className='text-blue-400' >
                     Go to  report
                  </a>
                  <div className='flex flex-col mt-5   w-full'>

                     <div className=''>
                        <h3 className='font-bold text-3xl'>Main Info</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>campaign name:</span>
                        <span>{campaign.campaign_name}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>social networks:</span>
                        <span>{campaign.social_network}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>campaign budget:</span>
                        <span>{numberWithCommas(campaign.budget)}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>campaign type:</span>
                        <span>{campaign.campaign_type}</span>
                     </div>



                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl'>About Campaign</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Start date:</span>
                        <span>{campaign.campaign_state_date}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>end date:</span>
                        <span>{campaign.campaign_end_date}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>campaign budget:</span>
                        <span>{campaign.currency} {numberWithCommas(campaign.budget)}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>campaign description:</span>
                        <span>{campaign.campaign_description}</span>
                     </div>
                     <div className='flex space-x-10 '>
                        <span className='capitalize font-bold'>companay name/brand:</span>
                        <span>{campaign.brand_name}</span>
                     </div>



                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl'>Tracked Keywords</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Keywords:</span>
                        <span>{campaign.tracked_keywords}</span>
                     </div>


                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl'>Target</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Location:</span>
                        <span>{campaign.target_location}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Age:</span>
                        <span>{campaign.target_age}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>gender:</span>
                        <span>{campaign.target_gender}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>interest:</span>
                        <span>{campaign.target_interest}</span>
                     </div>



                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl capitalize'>Campaign goal</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>reach:</span>
                        <span>{campaign.reach_goal}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Impressions:</span>
                        <span>{campaign.impressions_goal}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Conversions:</span>
                        <span>{campaign.conversion_goal}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Engagement:</span>
                        <span>{campaign.engagement_goal}</span>
                     </div>



                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl capitalize'>Campaign Content</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>About us:</span>
                        <span>{campaign.about_us}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Campaign Message:</span>
                        <span>{campaign.campaign_message}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Key objectives:</span>
                        <span>{campaign.campaign_key_objectives}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Campaign Goal:</span>
                        <span>{campaign.campaign_goal}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'> Channels:</span>
                        <span>{campaign.channels}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'> Timeline:</span>
                        <span>{campaign.timeline}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'> Mood Board:</span>
                        <a href={campaign.mood_board_url} target='_blank' className='text-blue-400'>
                           {campaign.mood_board}
                        </a>
                     </div>


                     <div className='mt-5'>
                        <h3 className='font-bold text-3xl capitalize'>Influencer Details</h3>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Size:</span>
                        <span>{campaign.influencer_size}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Category:</span>
                        <span>{campaign.influencer_category}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Niche:</span>
                        <span>{campaign.influencer_niche}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Gender:</span>
                        <span>{campaign.influencer_gender}</span>
                     </div>
                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Number:</span>
                        <span>{campaign.influencer_number}</span>
                     </div>

                     <div className='flex space-x-10 mt-2'>
                        <span className='capitalize font-bold'>Location:</span>
                        <span>{campaign.influencer_location}</span>
                     </div>






                     <div className='mt-10' id="reports">
                        <h3 className='font-bold text-3xl capitalize'>Report From Influencers</h3>
                     </div>

                     <div className='flex space-x-10 my-3'>
                        <span className='capitalize font-bold'>see all the reports from influencers and your exchange replies</span>

                     </div>

                     <ReportList handleModalClose={handleModal} reports={campaign.reports} />





                  </div>
               </div>
            </section>
         </div>
      </AuthenticatedLayout>

   );
}

export default View;