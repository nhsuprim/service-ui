import { AxiosError } from "axios";
import { toast } from "react-toastify";

class CommonService {
    showToast(type: string, text: string): void {
        if (type === "success") {
            toast.success(text);
        } else if (type === "warn") {
            toast.warn(text);
        } else if (type === "error") {
            toast.error(text);
        }
    }
}

const commonService = new CommonService();
export default commonService;
