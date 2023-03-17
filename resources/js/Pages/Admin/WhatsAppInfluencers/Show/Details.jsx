import { formatDate } from '@/Utils/helpers'
import Avatar from '@/Components/Avatar'
import { Link } from '@inertiajs/inertia-react';
import ValidationErrors from '@/Components/ValidationErrors';

export default function Details(props) {
  const { influencer } = props;

  return (
    <>
      <div className="min-h-full">
        <ValidationErrors errors={props.errors} />
        <main className="py-10">
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Avatar url={influencer.logo_url} userName={influencer?.name} className="h-16 w-16 rounded-full" />
                  {/* <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  /> */}
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{influencer?.name}</h1>
                <p className="text-sm font-medium text-gray-500">
                  Joined since: <time dateTime={formatDate(influencer.created_at, false, 'LLLL')}>{formatDate(influencer.created_at)}</time>
                </p>
              </div>
            </div>
            <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
              {influencer.approval_status == 'pending' ?

                < Link
                  // href={route('admin.influencers.show.companies.edit', { influencer: influencer.id })}
                  href={`${route('admin.influencers.whatsapp.approval', { influencer: influencer.id })}?status=approved`}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Approve Account
                </Link>
                :

                <Link
                  // href={route('admin.influencers.show.companies.edit', { influencer: influencer.id })}
                  href={`${route('admin.influencers.whatsapp.approval', { influencer: influencer.id })}?status=pending`}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Mark as Unapproved
                </Link>

              }
              {influencer.is_verified ?
                <Link
                  href={`${route('admin.influencers.whatsapp.verification', { influencer: influencer.id })}?status=unverified`}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Mark as Unverified
                </Link>
                :
                <Link
                  href={`${route('admin.influencers.whatsapp.verification', { influencer: influencer.id })}?status=verified`}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Mark as Verified
                </Link>
              }
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                      Influencer Information
                    </h2>
                    {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p> */}
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.gender}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Age</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.age}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.state}, {influencer.country}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Video Evidence</dt>
                        <dd className="mt-1 text-sm text-gray-900"><a href={influencer.video_evidence} download>Download</a></dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Average Views</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.average_views ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Occupation</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.occupation ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Marital Status</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.marital_status ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Parent Status</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.parental_status ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Website</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.website ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Interests</dt>
                        <dd className="mt-1 text-sm text-gray-900">{influencer.interests ?? 'Not set'}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <div
                            className="mt-4 space-y-6 text-sm text-gray-800 job-details"
                            dangerouslySetInnerHTML={{ __html: influencer.about }}
                          />
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </main>
      </div>
    </>
  )
}
