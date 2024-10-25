import { ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

type ModalProps = {
  children: ReactNode;
  isShow: boolean;
  regularDialog?: boolean;
  onClose: () => void;
};

export default function Modal({
  children,
  isShow,
  regularDialog,
  onClose,
}: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const closeModal = useCallback(
    ({ target }: MouseEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target as Node)
      ) {
        if (regularDialog) return;
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("click", closeModal, { capture: true });
    return () => {
      document.removeEventListener("click", closeModal, { capture: true });
    };
  }, [closeModal]);

  return isShow
    ? createPortal(
        <>
          {regularDialog ? null : <div className="overlay" />}
          <div ref={wrapperRef} className="modal">
            {children}
          </div>
        </>,
        document.body
      )
    : null;
}

Modal.Header = ({ children }: { children: ReactNode }) => {
  return <header>{children}</header>;
};

Modal.Body = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

Modal.Footer = ({ children }: { children: ReactNode }) => {
  return <footer>{children}</footer>;
};
