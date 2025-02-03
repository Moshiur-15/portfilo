import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

function NavBer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="list-none">
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </div>
    </Box>
  );

  return (
    <div>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Moshiur
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)} // Drawer Open করার জন্য
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="flex list-none items-center gap-6">
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" disableElevation>
              Test
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
