import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "80px",
          marginBottom: "20px",

          "@media (max-width: 600px)": {
            fontSize: "2rem",
          },
        }}
      >
        Generador de Cuentas de Cobro
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{
          textAlign: "center",
          marginBottom: "40px",
          "@media (max-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        Haz tu cuenta de cobro en menos de 5 minutos
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00b0ff",
          color: "white",
          fontWeight: "bold",
          width: "40%",
          marginBottom: "30px",
        }}
      >
        <Link to="cdc">Crear CDC</Link>
      </Button>

      <Divider
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
      />
    </Box>
  );
};
