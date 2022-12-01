import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Header } from '@/components/Header'
import { Button } from '../../components/Button'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Join() {
    const [agreed, setAgreed] = useState(false)

    return (
        <>
            <Header />

            <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="relative mx-auto max-w-xl">
                    <svg
                        className="absolute left-full translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 -translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find & Profile influencers in
                            seconds</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Be the first to try out our tool. Get early free access.
                            <span className='text-sm block mt-2'>P.S: Join early, as there are only limited spaces avaulable in the free trial closed group.</span>
                        </p>
                    </div>
                    <div className="mt-12">
                        <div id="mc_embed_signup rounded-md">
                            <form
                                action="https://gmail.us12.list-manage.com/subscribe/post?u=9eaa0b1bbde0155f83b6cf897&amp;id=e955d4b591&amp;f_id=0006b6e0f0"
                                method="post" id="mc-embedded-subscribe-form"
                                class="validate space-y-8 divide-y divide-gray-200" name="mc-embedded-subscribe-form"
                            >
                                <div id="mc_embed_signup_scroll" className="space-y-3">

                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-FNAME">First Name <span
                                                class="asterisk">*</span></label>
                                        <input required
                                            class="block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            type="text" name="FNAME" id="mce-FNAME" />
                                        <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-LNAME">Last Name <span
                                                class="asterisk">*</span></label>
                                        <input type="text" name="LNAME" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-LNAME" />
                                        <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-PHONE">Phone Number <span class="asterisk">*</span>
                                        </label>
                                        <input type="text" name="PHONE" required
                                            class="required  flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-PHONE" />
                                        <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-COUNTRY">Country<span class="asterisk">*</span>
                                        </label>
                                        <input type="text" name="COUNTRY" required
                                            class="required  flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-COUNTRY" />
                                        <span id="mce-COUNTRY-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-EMAIL">Work Email Address <span
                                                class="asterisk">*</span>
                                        </label>
                                        <input type="email" name="EMAIL" required
                                            class="required email flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-EMAIL" />
                                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-COMPANYNAM">Company Name <span
                                                class="asterisk">*</span></label>
                                        <input type="text" name="COMPANYNAM" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-COMPANYNAM" />
                                        <span id="mce-COMPANYNAM-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-POSITION">Your Position/Role <span
                                                class="asterisk">*</span></label>
                                        <input type="text" name="POSITION" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-POSITION" />
                                        <span id="mce-POSITION-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-INDUSTRY">Enter your Industry <span
                                                class="asterisk">*</span></label>
                                        <input type="text" name="INDUSTRY" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-INDUSTRY" />
                                        <span id="mce-INDUSTRY-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-COMPANYTYP">Are you a Brand or Agency? <span
                                                class="asterisk">*</span></label>
                                        <select name="COMPANYTYP" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-COMPANYTYP">
                                            <option >Select an option</option>
                                            <option value="BRAND">BRAND</option>
                                            <option value="AGENCY">AGENCY</option>

                                        </select>
                                        <span id="mce-COMPANYTYP-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-WILING">Are you willing to use our tool after your free
                                            trial? <span class="asterisk">*</span></label>
                                        <select name="WILING" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-WILING">
                                            <option >Select an option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                        </select>
                                        <span id="mce-WILING-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div class="mc-field-group">
                                        <label class="block text-sm font-medium text-gray-700 sm:mt-px pt-2"
                                            for="mce-AMOUNT">Amount willing to pay for tool <span
                                                class="asterisk">*</span></label>
                                        <select name="AMOUNT" required
                                            class="flex-1 block w-full p-3  min-w-0 rounded-md sm:text-sm border border-gray-300"
                                            id="mce-AMOUNT">
                                            <option >Select an option</option>
                                            <option value="$70 (Basic)">$70 (Basic)</option>
                                            <option value="$250 (Professional)">$250 (Professional)</option>
                                            <option value="$835 (Advanced)">$835 (Advanced)</option>
                                            <option value="$1550 (Enterprise)">$1550 (Enterprise)</option>

                                        </select>
                                        <span id="mce-AMOUNT-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div id="mce-responses" class="clear foot">
                                        <div class="response" id="mce-error-response" style={{ display: "none" }}>
                                        </div>
                                        <div class="response" id="mce-success-response"
                                            style={{ display: "none" }}></div>
                                    </div>
                                    <div style={{ position: "absolute", left: "-50000px" }} aria-hidden="true">
                                        <input type="text" name="b_9eaa0b1bbde0155f83b6cf897_e955d4b591"
                                            tabindex="-1" />
                                    </div>
                                    <div class="optionalParent">
                                        <div class="clear foot">
                                            <Button type="submit" value="Join the waitlist" name="subscribe"
                                                id="mc-embedded-subscribe"
                                                className="w-full mt-3 p-4"
                                            // class="button block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-viral_primary to-viral_secondary text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 mt-4"
                                            >
                                                Join
                                                the waitlist</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
