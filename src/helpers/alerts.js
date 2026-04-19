import Swal from "sweetalert2";

export function alertaGeneral(msg, msg2,icono) {
  Swal.fire({
    title: msg,
    text: msg2,
    icon: icono,
  });
}
