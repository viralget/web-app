
import Error from '@/components/Alerts/Error';

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <Error message="Sorry, an error occured." errors={errors} />
        )
    );
}
