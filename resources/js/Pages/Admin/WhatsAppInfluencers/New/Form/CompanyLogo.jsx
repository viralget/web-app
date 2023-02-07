
import { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import ImageUploader from '@/Components/ImageUploader'

export default function CompanyLogo(props) {
    const { auth } = usePage().props
    const user = auth.user;

    const uploadUrl = route('settings.resume.update');

    const [resumeURL, setUserResume] = useState(user.resumeURL);

    const handleUploadComplete = (file) => {

        setUserResume(file.response.url);

    }

    return (
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 my-5">
            <section aria-labelledby="plan-heading">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                        {resumeURL}

                        <ImageUploader uploadUrl={uploadUrl} accepts="image/*" onUploadComplete={handleUploadComplete} />
                    </div>

                </div>
            </section>
        </div>
    )
}
