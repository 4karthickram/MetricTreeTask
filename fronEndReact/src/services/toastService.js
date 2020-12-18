import { toast } from 'react-toastify';

const toastService = {
     defaultToast: (content) =>  toast(content),

     successToast: (message) => toast.success(message),

     errorToast: (message)=> toast.error(message),

      warnToast: (message) => toast.warn(message),

     infoToast: (message) => toast.info(message)

};

export default toastService;