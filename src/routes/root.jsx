import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const Root = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const pages = [
    {
      path: "",
      name: "Inicio",
    },
    {
      path: "cdc",
      name: "Nueva cuenta de Cobro",
    },
    {
      path: "history",
      name: "Historial",
    },

    {
      path: "support",
      name: "Soporte",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <IconButton
                  color="inherit"
                  onClick={handleOpenNavMenu}
                  aria-label="Menu"
                  aria-controls="nav-menu"
                  aria-haspopup="true"
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="nav-menu"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link to={page.path}>{page.name}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: "flex",
                  fontWeight: 700,
                  letterSpacing: "0.3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ACA
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Box>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
};
