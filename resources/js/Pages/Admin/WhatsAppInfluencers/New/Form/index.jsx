import TextEditor from "@/Components/TextEditor";
import Input from "@/Components/Input";
import TitleText from "@/Components/TitleText";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/inertia-react";
import { getEventValue } from "@/Utils/helpers";
import toast from '@/Components/Toast';
import ValidationErrors from "@/Components/ValidationErrors";
import CompanyInformation from "./CompanyInformation";
import { useEffect } from "react";
import Label from "@/Components/Label";

export default function Form(props) {

  const _data = props.data;

  const { company, isEdit } = props;

  // console.log({ company, isEdit })

  const { data, post, patch, errors, setData, processing } = useForm({
    company_name: company?.name ?? '',
    about: company?.about ?? '',
    website: company?.website ?? '',
    linkedin_url: company?.linkedin_url ?? '',
    industry: company?.industry ?? '',
    location: company?.location ?? '',
    logo: null,
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ data })

    if (isEdit) {
      post(route('recruiter.companies.post-update', { company: company.id }), {
        _method: 'patch',
        onError: () => {
          toast.error('Some errors occured')
        },
        onSuccess: () => {
          toast('Company information updated successfully!');
        }
      });

    } else {
      post(route('recruiter.companies.store'), {
        onError: () => {
          toast.error('Some errors occured')
        },
        onSuccess: () => {
          toast('Company created successfully!');
        }
      });

    }
  }

  return (
    <>
      {errors && <ValidationErrors errors={errors} />}
      <form onSubmit={handleSubmit} className="space-y-3 text-left" enctype="multipart/form-data">
        <Input label="Company Name" required defaultValue={data.company_name} name="company_name" placeholder="Company Name" onChange={(e) => setData('company_name', getEventValue(e))} className="w-full text-lg" />

        <div>
          <Label>About Company</Label>
          <TextEditor name="description" value={data.about} onChange={(value) => setData('about', value)} />
        </div>
        <div>
          <CompanyInformation setData={setData} data={data} {...props} />
        </div>
        <Button processing={processing} className="w-full" block>{isEdit ? 'Update' : 'Create'} Company</Button>
      </form>
    </>
  )
}