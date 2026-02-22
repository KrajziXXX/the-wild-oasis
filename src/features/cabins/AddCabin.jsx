import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         // <CreateCabinForm showForm={isOpenModal} setShowForm={setIsOpenModal} />
//         <Modal onClose={() => setIsOpenModal(!isOpenModal)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(!isOpenModal)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
