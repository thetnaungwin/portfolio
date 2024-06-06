import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Project_page = () => {
  const [showingImg, setShowingImg] = useState<number>(1);
  const [image, SetImage] = useState("");

  useEffect(() => {
    if (showingImg === 1) {
      return SetImage("/pos1.png");
    } else {
      return SetImage("/pos3.png");
    }
  }, [showingImg]);

  if (!image) return null;

  return (
    <Box
      id="#projects"
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card
          sx={{
            maxWidth: { xs: 130, sm: 180, md: 280 },
            mt: 7,
            mb: 1,
            height: { xs: 200, sm: 268, md: 390 },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image="/reel.png"
            sx={{ padding: 1 }}
          />
          <CardContent>
            <Typography sx={{ mb: 1.5, fontSize: { xs: 8, sm: 13, md: 17 } }}>
              Reel (Like Tik Tok & Instagram)
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: 4, sm: 8, md: 15 } }}
            >
              Reel is an Instagram feature that allows users to create
              short-form video content and share them on their Reels, Stories,
              or Feed.We can also provide reactions and comment.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontSize: { xs: 4, sm: 8, md: 15 } }}>
              <Link
                href="https://reel-beta.vercel.app/"
                style={{ textDecoration: "none", color: "#1976DB" }}
              >
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: { xs: 130, sm: 180, md: 280 },
            ml: 2,
            mr: 2,
            mt: 9,
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={image}
            sx={{ padding: 1, height: 160, objectFit: "fill" }}
          />
          <ArrowBackIosIcon
            onClick={() => {
              if (showingImg === 1) setShowingImg(2);
              if (showingImg === 2) setShowingImg(1);
            }}
            sx={{ position: "absolute", top: 65, left: 5, cursor: "pointer" }}
          />
          <ArrowForwardIosIcon
            onClick={() => {
              if (showingImg === 1) setShowingImg(2);
              if (showingImg === 2) setShowingImg(1);
            }}
            sx={{ position: "absolute", top: 65, right: 5, cursor: "pointer" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: 8, sm: 13, md: 17 } }}
            >
              POS (Point Of Sale) App
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: 4, sm: 8, md: 15 } }}
            >
              This single landing page serves as the gateway to these two major
              components of our POS app—bridging the gap between administrative
              efficiency and customer satisfaction with a harmonious blend of
              functionality and user-friendly design.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontSize: { xs: 4, sm: 8, md: 15 } }}>
              <Link
                href="https://foodie-pos-chi.vercel.app/"
                style={{ textDecoration: "none", color: "#1976DB" }}
              >
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: { xs: 130, sm: 180, md: 280 },
            mt: 7,
            height: { xs: 150, sm: 220, md: 360 },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image="/market app.jpg"
            sx={{ padding: 1 }}
          />
          <CardContent>
            <Typography sx={{ mb: 1.5, fontSize: { xs: 8, sm: 13, md: 17 } }}>
              Internet Marketing
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: 4, sm: 8, md: 15 } }}
            >
              Digital marketing is the component of marketing that uses the
              Internet and online-based digital technologies such as desktop
              computers, mobile phones, and other digital media and platforms to
              promote products and services.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Project_page;
