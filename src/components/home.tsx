import { Inter } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Box, Button, Dialog } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export function Home_page() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", marginTop: 30 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
            >
              <Image
                src="/mypic.jpg"
                alt="Programmer"
                width="192"
                height="192"
                quality="95"
                priority={true}
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "54px",
                  border: 3,
                  borderStyle: "solid",
                  borderColor: "white",
                  objectFit: "cover",
                  boxShadow: "inherit",
                }}
              />
            </motion.div>
            <motion.span
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                fontSize: "30px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </section>
      <motion.p
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 15,
          fontFamily: "cursive  ",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "keyframes",
          stiffness: 125,
          delay: 0.5,
          duration: 0.7,
        }}
      >
        Hello, I am
        <b style={{ color: "#F3CA52", fontSize: 18 }}> Thet Naung Win.</b> I am
        a<b style={{ color: "#F3CA52" }}> Software Engineer</b> with JavaScript
        and C++{" "}
      </motion.p>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Link href="https://www.linkedin.com/in/thet-naung-win-a17538313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <LinkedInIcon
            sx={{
              fill: "#0072ea",
              cursor: "pointer",
              userSelect: "none",
              fontSize: { xs: "normal", sm: "35px" },
            }}
          />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100068834884655&mibextid=LQQJ4d">
          <FacebookIcon
            sx={{
              fontSize: { xs: "normal", sm: "35px" },
              fill: "#0072ea",
              cursor: "pointer",
              userSelect: "none",
              ml: 1,
              mr: 1,
            }}
          />
        </Link>
        <Link href="https://github.com/petermelly">
          <GitHubIcon
            sx={{
              fill: "black",
              cursor: "pointer",
              userSelect: "none",
              fontSize: { xs: 22, sm: "35px" },
            }}
          />
        </Link>
        <ContactPageIcon
          sx={{
            fill: "white",
            ml: 3,
            fontSize: { xs: 22, sm: "35px" },
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(true);
          }}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          sx={{ mb: { xs: 12, sm: 2 } }}
        >
          <a
            href="/White Simple Student CV Resume.pdf"
            download="cv"
            style={{ color: "white" }}
          >
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="contained"
              sx={{ fontSize: { xs: 5, sm: 12 }, padding: 1 }}
            >
              Download Resume
            </Button>
          </a>
        </Dialog>
      </Box>
    </div>
  );
}
export default Home_page;
