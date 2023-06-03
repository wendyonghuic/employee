import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
            onSubmit={(e) => {
                handleClose();
                e.preventDefault()
                props.updateEmployee(props.id, name, role)
            }}
            className="w-full max-w-sm" 
            id='editmodal'
        >
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input value={name} onChange={(e) => {setName(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" autoComplete='off'/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                        Role
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input value={role} onChange={(e) => {setRole(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" autoComplete='off'/>
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Close</button>
          <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded' type='submit' form='editmodal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;