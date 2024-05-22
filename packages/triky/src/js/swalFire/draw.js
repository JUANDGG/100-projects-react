import Swal from 'sweetalert2'

const alertDraw = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: `Game in draw`,
    
    confirmButtonText: "Playdown",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    } 
  });
};

export default alertDraw;
