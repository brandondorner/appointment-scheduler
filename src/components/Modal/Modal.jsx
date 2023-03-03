import './index.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button
          className="modal-button"
          onClick={() => {
            onClose(false)
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
