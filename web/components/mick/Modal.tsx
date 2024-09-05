import React, { useMemo } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = React.memo(({ open, onClose, children }) => {
  const backdropClasses = useMemo(() => `
    fixed inset-0 flex justify-center items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}
  `, [open]);

  const modalClasses = useMemo(() => `
    bg-white rounded-xl shadow p-6 transition-all
    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
  `, [open]);

  return (
    // backdrop
    <div
      onClick={onClose}
      className={backdropClasses}
      style={{ zIndex: 90 }}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={modalClasses}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
