
import AutoSuggest from '@/Components/Autosuggest'
import Input from '@/Components/Input copy';
import SectionHeading from '@/Components/SectionHeading';
import { getEventValue } from '@/Utils/helpers';
import { useState } from 'react';
import { get } from '@/Utils/api';
import FileUploader from '@/Components/FileUploader';


export default function CompanyInformation(props) {

  const { data, setData } = props;

  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [industrySuggestions, setIndustrySuggestions] = useState([]);

  const handleLocationAutosuggest = async (value) => {
    setData('location', value);

    const response = await get(route('api.locations.search'), true);

    if (response.data) {
      setLocationSuggestions(response.data);
    }
  }

  const handleIndustryAutosuggest = async (value) => {
    setData('industry', value);

    const response = await get(route('api.categories.search'), true);

    if (response.data) {
      setIndustrySuggestions(response.data);
    }
  }



  return (
    <>
      <div className="space-y-3">
        <div className="col-span-6 sm:col-span-3">
          <Input defaultValue={data.website} name="website" label="Company Website (optional)" onChange={(e) => setData('website', getEventValue(e))} className="w-full" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Input defaultValue={data.linkedin_url} name="linkedin_url" label="Company LinkedIn URL (Optional)" onChange={(e) => setData('linkedin_url', getEventValue(e))} className="w-full" />
        </div>



        <div className="col-span-6 sm:col-span-3">
          <AutoSuggest label="Enter Industry" defaultValue={data.industry} name="industry" required

            onChange={handleIndustryAutosuggest}

            // onChange={(value) => setData('industry', value)}
            defaultSuggestions={industrySuggestions}

          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <AutoSuggest label="Enter Location" defaultValue={data.location} name="location" required
            onChange={handleLocationAutosuggest}
            defaultSuggestions={locationSuggestions}
          />
        </div>

        <div>
          <div className="col-span-6 sm:col-span-3">
            <Input type="file" name="logo" label="Company Logo" accepts="image" onChange={(e) => setData('logo', e.target.files[0])} className="w-full" />
          </div>

          {/* <FileUploader accepts={['.jpg', '.png', '.jpeg']} onFileUpload={(e) => console.log(e)} /> */}
        </div>
      </div>

    </>
  )
}
