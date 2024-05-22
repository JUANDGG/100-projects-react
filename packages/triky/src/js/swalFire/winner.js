import Swal from 'sweetalert2'
import confetti from  "canvas-confetti"
const alertWinner = (mapWinnerTurn) => {
  confetti();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: `The winner is ${mapWinnerTurn}`,
    showCancelButton: true,
    confirmButtonText: "Keep playing",
    cancelButtonText: "Exit game",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      window.close();
    }
  });
};

export default alertWinner;
