import {type} from 'os';
import Swal from 'sweetalert2';
type info = {
  txt: string;
  time: number;
};
const Alerts2 = ({txt, time}:info) => {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  toast.fire({
    icon: "success",
    title: txt,
  })
  return <></>
};
export default Alerts2;

