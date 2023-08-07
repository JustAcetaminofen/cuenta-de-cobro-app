/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const CdcPDFGen = ({ state }) => {
  Font.register({
    family: "Roboto",
  });

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: 40,
    },
    view: {
      display: "flex",
      flexDirection: "column",
    },
    viewCentered: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    list: {
      marginLeft: 30,
      fontSize: 16,
    },
  });

  return (
    <Document
      title="Cuenta de cobro"
      author={state.bussinessName}
      pdfVersion="1.0"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Bello {state.date}
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 900,
              marginBottom: 30,
              marginTop: 10,
            }}
          >
            Cuenta de cobro a
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              marginBottom: 40,
            }}
          >
            {state.clientName}
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 900,
              marginBottom: 10,
            }}
          >
            DEBE A:
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {state.bussinessName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 30,
            }}
          >
            C.C {state.nit}
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 900,
              marginBottom: 20,
            }}
          >
            LA SUMA DE:
          </Text>
        </View>
        <View style={styles.viewCentered}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 900,
              marginBottom: 70,
            }}
          >
            COP {state.debt}
          </Text>
        </View>
        <View style={styles.view}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 20,
            }}
          >
            Por concepto de:
          </Text>
        </View>
        {
          <View style={styles.list}>
            {state.services.map((service) => (
              <li
                key={service.name}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "3px 0",
                }}
              >
                <Text
                  style={{
                    minWidth: 50,
                  }}
                >
                  {`•  ${service.quantity > 1 ? service.quantity : ""}`}
                </Text>
                <Text
                  style={{
                    minWidth: 130,
                    maxWidth: 300,
                    marginRight: 10,
                  }}
                >
                  {service.name}
                </Text>
                <Text> --- COP {service.total}</Text>
              </li>
            ))}
          </View>
        }
        <View
          style={styles.view}
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginBottom: 15,
            }}
          >
            Cordialmente,
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {state.bussinessName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            C.C {state.nit}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            Cel: {state.cellphone}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 15,
            }}
          >
            ____________________________
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {state.rol}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export const CdcGenerated = () => {
  const { state } = useLocation();
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: 50,
      }}
    >
      <PDFDownloadLink
        document={<CdcPDFGen state={state} />}
        fileName={`Cuenta de cobro ${state.clientName}.pdf`}
        style={{
          display: "flex",
          backgroundColor: "#1a73e8",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          textDecoration: "none",
          padding: "10px 20px",
          width: "max-content",
          marginBottom: 20,
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Cargando documento..." : "Descargar PDF"
        }
      </PDFDownloadLink>
      <PDFViewer
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <CdcPDFGen state={state} />
      </PDFViewer>
    </div>
  );
};
