import React, { useState, useEffect, useRef } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Image
} from "@react-pdf/renderer";
import moment from "moment";

const CertificateTemplate = certificateData => {
  const [selectedReceipts, setselectedReceipts] = useState();

  //console.log(certificateData);
  //setselectedReceipts(selectedReceiptsData);

  const styles = StyleSheet.create({
    page: {
      // flexDirection: 'row',
      backgroundColor: "#ffffff"
    },
    section: {
      // margin: 10,
      // padding: 10,
      width: "100%"
    },
    section1: {
      backgroundColor: "#ffffff",
      borderTop: "1px solid #ffcc36",
      borderBottom: "1px solid #ffcc36",
      width: "67%",
      position: "absolute",
      top: "68%",
      left: "23%"
    },
    header1: {
      color: "#2c2e35",
      fontSize: "24px",
      marginBottom: "10px",
      textAlign: "center",
      textTransform: "capitalize",
      position: "absolute",
      top: "43.5%",
      // borderBottom: "1px solid #333333",
      left: "5%",
      paddingBottom: "2px",
      width: "100%",
      textDecoration: "underline"
    },
    sectionText: {
      color: "#2c2e35",
      fontSize: "10px",
      fontWeight: "extrabold",
      paddingTop: "5px",
      paddingBottom: "5px",
      textAlign: "center"
    },
    header2: {
      color: "#2c2e35",
      fontSize: "15px",
      marginBottom: "12px",
      position: "absolute",
      top: "53%",
      left: "31%",
      width: "52%",
      textAlign: "center",
      lineHeight: "1.5px"
    },
    header22: {
      color: "#2c2e35",
      fontSize: "15px",
      marginBottom: "12px",
      position: "absolute",
      top: "57%",
      left: "31%",
      width: "52%",
      textAlign: "center",
      lineHeight: "1.5px"
    },
    header23: {
      color: "#2c2e35",
      fontSize: "14px",
      marginBottom: "12px",
      position: "absolute",
      top: "61%",
      left: "32.5%",
      width: "45%",
      textAlign: "center",
      lineHeight: "1.5px"
    },
    voucherRow: {
      flexDirection: "row",
      marginLeft: "10px",
      marginRight: "10px",
      padding: 10
    },
    voucherCol1: {
      width: "40%"
    },
    voucherColAll: {
      width: "20%"
    },
    voucherTableLabel: {
      fontSize: "10px",
      backgroundColor: "#f8c301",
      padding: "10px"
    },
    voucherTableValue: {
      fontSize: "10px",
      padding: "10px",
      borderBottom: "1px solid #d3d3d3",
      borderLeft: "1px solid #d3d3d3"
    },
    voucherTableValueLast: {
      fontSize: "10px",
      padding: "10px",
      borderLeft: "1px solid #d3d3d3",
      borderRight: "1px solid #d3d3d3",
      borderBottom: "1px solid #d3d3d3"
    }
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page} orientation="landscape">
          <View style={styles.section}>
            <Image src="/certificate.png" />
            <Text style={styles.header1}>
              {
                certificateData?.certificateData?.userTrekBookingParticipants[0]
                  ?.userDetailsForDisplay?.firstName
              }
              &nbsp;
              {
                certificateData?.certificateData?.userTrekBookingParticipants[0]
                  ?.userDetailsForDisplay?.lastName
              }
              {/* Mohammed Ameen arif meeran */}
            </Text>
            <Text style={styles.header2}>
              For successfully completing the{" "}
              {certificateData.certificateData &&
                certificateData.certificateData.trekName}
            </Text>
            <Text style={styles.header22}>
              &nbsp;in {certificateData?.certificateData?.trekLocation}
              &nbsp;from{" "}
              {certificateData.certificateData &&
                moment(certificateData.certificateData.startDate).format(
                  "MM/DD/YYYY"
                )}{" "}
              to{" "}
              {certificateData.certificateData &&
                moment(certificateData.certificateData.endDate).format(
                  "MM/DD/YYYY"
                )}
            </Text>
            {/* <Text style={styles.header23}>
              {certificateData.certificateData &&
                moment(certificateData.certificateData.startDate).format(
                  "MM/DD/YYYY"
                )}{" "}
              to{" "}
              {certificateData.certificateData &&
                moment(certificateData.certificateData.endDate).format(
                  "MM/DD/YYYY"
                )}
            </Text> */}
          </View>
          <View style={styles.section1}>
            <Text style={styles.sectionText}>
              {certificateData.certificateData &&
                certificateData.certificateData.trekName}{" "}
              | Trek Grade: {certificateData.certificateData.trekDifficulty} |
              Duration: {certificateData.certificateData.trekDuration} Days |
              Max Atitude: {certificateData.certificateData.trekAltitude} ft
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
};
export default CertificateTemplate;
