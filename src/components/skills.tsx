import { Box, CardMedia, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const imgCollection = [
  {
    url: "/htmlcssjs-overview.png",
    name: "HTML, CSS, JS",
    description:
      "Fundamental web technologies, which are HTML for structure, CSS for styling, and JavaScript for interactivity.",
  },
  {
    url: "/ts.png",
    name: "Typescript",
    description:
      "Typescript, a language that emphasizes strong typing. Gain insights into how Typescript improves code quality and maintainability.",
  },
  {
    url: "/nodejs.png",
    name: "NodeJS",
    description:
      "Backend development with Node.js. Understand how to build a resilient server that can handle requests and effectively manage data.",
  },
  {
    url: "expressjs.jpg",
    name: "ExpressJS",
    description:
      "ExpressJS is a minimal and flexible Node.js web application framework",
  },
  {
    url: "reactjs.png",
    name: "ReactJS",
    description:
      "React for frontend development. Can use key concepts like components, props, routing, hooks, and state management.",
  },
  {
    url: "/redux.png",
    name: "Redux-Toolkit",
    description:
      "Focusing on state management with Redux-Toolkit.The official, opinionated, batteries-included toolset for efficient Redux development",
  },
  {
    url: "/mui.jpg",
    name: "MUI",
    description:
      "Enhance your user interface with Material-UI (MUI) components in React applications.",
  },
  {
    url: "/git.png",
    name: "Git",
    description:
      "A DevOps tool used for source code management and for collaborative development and codebase management.",
  },
  {
    url: "/github.jpg",
    name: "GitHub",
    description:
      "To create, store, manage and share code and To make separate changes to web pages at the same time.",
  },
  {
    url: "/nextjs.png",
    name: "NextJS",
    description:
      "A powerful framework for building React applications with server-side rendering and routing.For authentication, use NextAuth.js",
  },
  {
    url: "/prisma.png",
    name: "Prisma",
    description:
      "For database management, Prisma, an ORM tool, is effective data handling in backend development.",
  },
  {
    url: "/Postgresql_elephant.svg.png",
    name: "PostgreSQL",
    description:
      "Relational Database.The primary database for all types of applications and its many extensions support hundreds of use cases.",
  },
  {
    url: "/SQL.png",
    name: "SQL",
    description:
      "Structured Query Language is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.",
  },
  {
    url: "/vercel.jpg",
    name: "Vercel",
    description:
      "Vercel for deployment and cloud hosting in continuous integration and cloud server environments.And AWS S3 for storage.",
  },
  {
    url: "/C++.png",
    name: "C++",
    description:
      "Be portable and can be used to develop applications and game, and lowering development that can be adapted to multiple platforms.",
  },
];

export const Skills_page = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Box id="#skills" sx={{ mb: 10 }}>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            color: "#3572EF",
            position: "absolute",
            left: 50,
            mt: 5,
            fontSize: 30,
          }}
        >
          Tech Stacks
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            mt: 13,
            ml: { xs: 1, sm: 3 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {imgCollection.map((image) => (
              <CardMedia
                key={image.name}
                component="img"
                alt="green iguana"
                image={image.url}
                sx={{
                  padding: 0.4,
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            mt: { xs: 5, sm: 13 },
            mr: { xs: 0, sm: 3 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              width: 200,
              height: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <ArrowBackIosIcon
              onClick={() => {
                if (count === 14) {
                  setCount(0);
                } else {
                  setCount(count + 1);
                }
              }}
              sx={{
                position: "absolute",
                top: 120,
                left: 5,
                cursor: "pointer",
                fill: "green",
              }}
            />
            <ArrowForwardIosIcon
              onClick={() => {
                if (count === 0) {
                  return setCount(14);
                }
                setCount(count - 1);
              }}
              sx={{
                position: "absolute",
                top: 120,
                right: 3,
                cursor: "pointer",
                fill: "green",
              }}
            />
            <CardMedia
              component="img"
              alt="green iguana"
              image={imgCollection[count].url}
              sx={{
                padding: 0.4,
                width: 100,
                height: 100,
                borderRadius: 2,
              }}
            />
            <Typography sx={{ mb: 1 }} variant="h6">
              {imgCollection[count].name}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {imgCollection[count].description}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default Skills_page;
