import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import logo from "../assets/my_logo-removebg-preview.png";
import { FaFolderOpen } from "react-icons/fa";

function NavBer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="bg-white p-4"
    >
      <ul className="list-none text-black space-y-4">
        <ul className="list-none text-black space-y-4">
          <li>
            <a href="#home" className="text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="text-black">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black">
              Contact
            </a>
          </li>
        </ul>
      </ul>
    </Box>
  );

  return (
    <div className="pt-4 mx-4 md:mx-8 lg:mx-0">
      <Container className="backdrop-blur bg-gray-50/10 rounded-full shadow-lg">
        <Toolbar disableGutters>
          <img src={logo} className="h-12" alt="" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="text-black"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <ul className="flex list-none items-center gap-8 text-black font-medium">
              <li>
                <a href="#home" className="text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-black">
                  Skills
                </a>
              </li>
              <li>
                <a href="#project" className="text-black">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black">
                  Contact
                </a>
              </li>
            </ul>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href="https://drive.google.com/file/d/11AQ6lcRpU9M5D46XoRKyBMvid343MBUV/view?usp=sharing"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              <FaFolderOpen className="mr-2" />
              RESUME
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default NavBer;
