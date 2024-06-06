import { Box, ToggleButton } from "@mui/material";
import { motion } from "framer-motion";
import ReorderIcon from "@mui/icons-material/Reorder";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Dialog from "./dialog";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const Headers_link = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <div
          style={{
            marginTop: 30,
            marginBottom: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <header style={{ position: "fixed", borderRadius: 23 }}>
            <nav style={{ display: "flex" }}>
              <ul
                style={{
                  display: "flex",
                }}
              >
                {links.map((link) => (
                  <motion.li
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={link.hash}
                    initial={{ y: -1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <ToggleButton
                      value={link.name}
                      sx={{
                        borderRadius: 23,
                        borderColor: "white",
                        bgcolor: "#0072ea",
                      }}
                    >
                      <Link
                        activeClass="active"
                        to={link.hash}
                        style={{
                          fontSize: 12,
                          padding: 1,
                          cursor: "pointer",
                          userSelect: "none",
                          color: "white",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {link.name}
                      </Link>
                    </ToggleButton>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </header>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: 60, top: 10 }}>
          <ReorderIcon
            sx={{
              fontSize: 35,
              cursor: "pointer",
              fill: "#0072ea",
              position: "fixed",
            }}
            onClick={() => setOpen(true)}
          />
          <Dialog open={open} setOpen={setOpen} />
        </div>
      </Box>
    </Box>
  );
};
export default Headers_link;
