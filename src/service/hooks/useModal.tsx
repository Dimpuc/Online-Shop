import { Modal } from "@mui/material";
import { FC, ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
}

const useModal = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const ModalComponent: FC<ModalProps> = ({ children }) => (
    <Modal
      open={open}
      onClose={toggle}
      sx={{
        padding: "24px",
        "&.MuiModal-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          maxHeight: "100%",
        },
      }}
    >
      <>{children}</>
    </Modal>
  );

  return {
    toggle,
    open,
    ModalComponent,
  };
};

export { useModal };
