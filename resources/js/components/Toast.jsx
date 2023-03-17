import { toaster } from "@/Components/UIComponents";

const toast = (message) => toaster.positive(message);

toast.success = (message) => toaster.positive(message);
toast.error = (message) => toaster.negative(message);
toast.info = (message) => toaster.info(message);
toast.warning = (message) => toaster.warning(message);

export default toast;

