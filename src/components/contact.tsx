import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import emailjs from "@emailjs/browser";

export const Contact_page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [missingData, setMissingData] = useState(true);
  const [sendEmail, setSendEmail] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (
      sendEmail.name !== "" &&
      sendEmail.email !== "" &&
      sendEmail.message !== ""
    ) {
      setMissingData(false);
    } else {
      setMissingData(true);
    }
  }, [sendEmail]);

  const email = {
    service_id: "service_z3vocwd",
    template_id: "template_hfs6pvi",
    public_id: "lY6aUlBkqrzhbPiPJ",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: sendEmail.name,
      from_email: sendEmail.email,
      message: sendEmail.message,
    };

    emailjs
      .send(
        email.service_id,
        email.template_id,
        templateParams,
        email.public_id
      )
      .then(
        () => {
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() =>
        setSendEmail({
          name: "",
          email: "",
          message: "",
        })
      );
  };

  return (
    <Box id="#contact">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "white", mt: 6 }} variant="h4">
          Contact Me
        </Typography>
        <ConnectWithoutContactIcon sx={{ fill: "red", fontSize: 40 }} />

        <DialogContent>
          <Box>
            <Typography sx={{ color: "white", mt: 1 }} variant="h6">
              Send An Email
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={sendEmail.name}
              sx={{
                mt: 2,
                width: "100%",
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  color: "#FFFFFF",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "2px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "white",
                  fontWeight: "bold",
                },
              }}
              onChange={(evt) =>
                setSendEmail({
                  ...sendEmail,
                  name: evt.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={sendEmail.email}
              sx={{
                mt: 2,
                width: "100%",
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  color: "#FFFFFF",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "2px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "white",
                  fontWeight: "bold",
                },
              }}
              onChange={(evt) =>
                setSendEmail({
                  ...sendEmail,
                  email: evt.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              value={sendEmail.message}
              sx={{
                mt: 2,
                width: "100%",
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  color: "#FFFFFF",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "2px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "white",
                  fontWeight: "bold",
                },
              }}
              onChange={(evt) =>
                setSendEmail({ ...sendEmail, message: evt.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={missingData}
            variant="contained"
            onClick={handleClick}
            sx={{ p: 1, mb: 7 }}
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{ color: "#E8F6EF" }} />
            ) : (
              "Send Now"
            )}
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};
export default Contact_page;
