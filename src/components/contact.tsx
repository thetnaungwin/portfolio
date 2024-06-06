import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export const Contact_page = () => {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [message, setMessage] = useState({});

  const handleClick = () => {
    console.log(name);
    console.log(email);
    console.log(message);
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
                setName({
                  ...name,
                  email: evt.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
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
                setEmail({
                  ...email,
                  name: evt.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
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
                setMessage({ ...message, message: evt.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ p: 1, mb: 7 }}
          >
            Send Now
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};
export default Contact_page;
