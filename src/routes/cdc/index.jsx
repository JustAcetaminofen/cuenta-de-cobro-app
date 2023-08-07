import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";
import getDate from "../../helpers/getDate";

export const Cdc = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [clientName, setClientName] = useState("");
  const [bussinessName, setBussinessName] = useState("");
  const [nit, setNit] = useState("");
  const [rol, setRol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [serviceName, setServiceName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const id = uuidv4();

  const [services, setServices] = useState([]);

  const deleteService = (id) => {
    const newServices = services.filter((service) => service.id !== id);
    console.log(newServices);
    setServices(newServices);
  };

  const addService = () => {
    const total = quantity * price;
    const id = uuidv4();
    const newService = {
      id: id,
      name: serviceName,
      quantity: quantity,
      price: price,
      total: total,
    };
    setServices([...services, newService]);
    setServiceName("");
    setQuantity("");
    setPrice("");
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const handleTooltipClose2 = () => {
    setOpen2(false);
  };

  const handleTooltipOpen2 = () => {
    setOpen2(true);
  };

  const debtCalc = () => {
    let debt = 0;
    services.forEach((service) => {
      debt += service.total;
    });
    return debt;
  };

  const date = getDate();

  const formData = {
    id,
    date,
    clientName,
    bussinessName,
    nit,
    rol,
    cellphone,
    services,
    debt: debtCalc(),
  };
  console.log(services);
  console.log(formData);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0 20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "40px",
          marginBottom: "20px",

          "@media (max-width: 600px)": {
            fontSize: "2rem",
          },
        }}
      >
        Generador de CDC
      </Typography>
      <Typography
        variant="subtitle1"
        color={"#00b0ff"}
        sx={{
          marginBottom: "40px",
          "@media (max-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        <span style={{ fontWeight: "700" }}>Nota:</span> La fecha del documento
        es la fecha actual del sistema y no puede ser modificada.
      </Typography>
      <Box>
        <Typography
          variant="h3"
          sx={{
            marginTop: "40px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",

            "@media (max-width: 600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Datos del Cliente
          <span>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                title="¿A quién le vas a cobrar?"
                arrow
                disableFocusListener
                disableHoverListener
                disableTouchListener
                onClose={handleTooltipClose}
                open={open}
                placement="top"
              >
                <IconButton onClick={handleTooltipOpen}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
          </span>
        </Typography>

        <TextField
          label="Empresa/Cliente"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="*Este campo es obligatorio"
          required
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />

        <Typography
          variant="h3"
          sx={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",

            "@media (max-width: 600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Razón Social
          <span>
            <ClickAwayListener onClickAway={handleTooltipClose2}>
              <Tooltip
                title="Tu empresa o tu nombre"
                arrow
                disableFocusListener
                disableHoverListener
                disableTouchListener
                onClose={handleTooltipClose2}
                open={open2}
                placement="top"
              >
                <IconButton onClick={handleTooltipOpen2}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
          </span>
        </Typography>

        <TextField
          label="Razón Social/Nombre"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="*Este campo es obligatorio"
          required
          value={bussinessName}
          onChange={(e) => setBussinessName(e.target.value)}
        />
        <TextField
          label="NIT/CC"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          type="number"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="*Este campo es obligatorio"
          required
          value={nit}
          onChange={(e) => setNit(e.target.value)}
        />
        <TextField
          label="Cargo/Rol"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="*Este campo es obligatorio"
          required
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        />
        <TextField
          label="Teléfono de contacto"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="*Este campo es obligatorio"
          required
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
        />

        <Typography
          variant="h3"
          sx={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",

            "@media (max-width: 600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Sevicios
        </Typography>
        <Box>
          <TextField
            label="Servicio"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <TextField
            label="Precio unitario"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            type="number"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Cantidad"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            type="number"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={() => addService()}>
          <span style={{ color: "white", fontWeight: "700" }}>
            Agregar servicio
          </span>
        </Button>
      </Box>
      {services.length > 0 ? (
        <List>
          {services.map((service, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                marginBottom: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#2e3b55",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <Typography variant="subtitle2">
                Nombre: {service.name}
              </Typography>
              <Typography variant="subtitle2">
                Cantidad: {service.quantity}
              </Typography>
              <Typography variant="subtitle2">
                Precio: {service.price}
              </Typography>
              <Typography variant="subtitle2">
                Total: {service.total}
              </Typography>
              <IconButton
                onClick={() => deleteService(service.id)}
                style={{
                  color: "#b93838",
                  backgroundColor: "#2e3b55",
                  marginLeft: "auto",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <Link
            key={formData.id}
            to={formData.id}
            state={formData}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2E3B55",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              Generar PDF
            </span>
            <span>
              <PictureAsPdfIcon />
            </span>
          </Link>
        </List>
      ) : null}
    </Box>
  );
};
