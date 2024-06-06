import { DialogContent, Dialog, ToggleButton } from "@mui/material";
import React from "react";
import { links } from "./header";
import { Link } from "react-scroll";

interface Pros {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu_Dialog = ({ open, setOpen }: Pros) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: { xs: "block", sm: "none" } }}
    >
      {links.map((link) => (
        <Link
          activeClass="active"
          to={link.hash}
          style={{
            fontSize: 11,
            padding: 1,
            cursor: "pointer",
            userSelect: "none",
            color: "white",
            fontFamily: "sans-serif",
          }}
          onClick={() => setOpen(false)}
        >
          <DialogContent>{link.name}</DialogContent>
        </Link>
      ))}
    </Dialog>
  );
};
export default Menu_Dialog;
