import Swal from 'sweetalert2';

export const showSuccess = (message: string) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    timer: 2000,
    showConfirmButton: false
  });
};

export const showError = (message: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message
  });
};

export const showConfirm = async (message: string) => {
  const result = await Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: message,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  });
  return result.isConfirmed;
};