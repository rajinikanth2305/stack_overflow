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
const ReceiptTemplate = receiptData => {
  const [selectedReceipts, setselectedReceipts] = useState();

  // console.log(receiptData);
  //setselectedReceipts(selectedReceiptsData);

  const styles = StyleSheet.create({
    page: {
      // flexDirection: 'row',
      backgroundColor: "#ffffff"
    },
    section: {
      margin: 10,
      padding: 10,
      width: "100%"
    },
    section1: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      // padding: 10,
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%"
    },
    sectionMain: {
      marginTop: 10
    },
    sectionMain1: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 20,
      marginRight: 10
    },
    header1: {
      fontSize: "14px",
      marginBottom: "10px",
      marginTop: "20px",
      borderBottom: "2px soild #f8c301",
      width: "20%",
      paddingBottom: "5px"
    },
    header2: {
      fontSize: "10px",
      marginBottom: "5px"
    },
    headernotes1: {
      fontSize: "10px",
      marginBottom: "10px",
      marginTop: "20px"
    },
    headernotes2: {
      fontSize: "8px",
      marginBottom: "5px"
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
    voucherColAllnew: {
      width: "13.5%"
    },
    headerCol1: {
      width: "80%"
    },
    headerCol2: {
      width: "20%"
    },
    voucherTableLabel: {
      fontSize: "7px",
      backgroundColor: "#f8c301",
      padding: "4px"
    },
    voucherParticularTableLabel: {
      fontSize: "8px",
      paddingLeft: "0px",
      paddingRight: "4px",
      paddingtop: "1px",
      paddingBottom: "3px"
    },
    voucherTableValue: {
      fontSize: "8px",
      padding: "4px",
      borderBottom: "1px solid #d3d3d3"
      // borderLeft: '1px solid #d3d3d3',
    },
    voucherParticularTableValue: {
      fontSize: "8px",
      paddingLeft: "10px",
      paddingRight: "4px",
      paddingtop: "1px",
      paddingBottom: "3px",
      borderLeft: "1px solid #f8c301"
      // borderLeft: '1px solid #d3d3d3',
    },
    voucherTableValueLast: {
      fontSize: "8px",
      padding: "4px",
      borderLeft: "1px solid #d3d3d3",
      borderRight: "1px solid #d3d3d3",
      borderBottom: "1px solid #d3d3d3"
    },
    headertext1: {
      borderBottom: "1px solid #f8c301",
      fontSize: "8px",
      textAlign: "right",
      paddingBottom: "3px",
      marginBottom: "3px"
    },
    headertext2: {
      fontSize: "8px",
      textAlign: "right"
    }
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sectionMain}>
            <View style={styles.voucherRow}>
              <View style={styles.headerCol1}>
                <Image src="/IH_Logo_in_PNG@2x.png" style={{ width: "28%" }} />
              </View>
              <View style={styles.headerCol2}>
                <Text style={styles.headertext1}>www.indiahikes.com</Text>
                <Text style={styles.headertext2}>GSTIN: 29AAUFA1023F2ZK</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.section}>
            <Text style={styles.header1}>
              {receiptData.receiptData && receiptData.receiptData.trekName} -
              {receiptData.receiptData &&
                moment(receiptData.receiptData?.startDate).format(
                  "MM/DD/YYYY"
                )}{" "}
              - {moment(receiptData.receiptData?.endDate).format("MM/DD/YYYY")}
            </Text>
          </View> */}
          <View style={styles.section}>
            <Text style={styles.header1}>Payment Receipt</Text>
            <Text style={styles.header2}>
              {receiptData.receiptData && receiptData.receiptData.trekName}
            </Text>
            {receiptData.receiptData && (
              <Text style={styles.header2}>
                {moment(receiptData.receiptData?.startDate).format("DD MMM")} -{" "}
                {moment(receiptData.receiptData?.endDate).format("DD MMM YYYY")}
              </Text>
            )}
            {receiptData.receiptData && (
              <Text style={styles.header2}>
                Booking for {receiptData.receiptData?.participantsCount}{" "}
                participants
              </Text>
            )}
          </View>
          <View style={styles.sectionMain1}>
            <Text style={styles.header2}>Particulars:</Text>
          </View>
          <View style={styles.voucherRow}>
            <View style={styles.voucherColAllnew}>
              <View>
                <Text style={styles.voucherParticularTableLabel}>
                  Date of booking
                </Text>
              </View>
              <View>
                <Text style={styles.voucherParticularTableLabel}>
                  Mode of payment
                </Text>
              </View>
              <View>
                <Text style={styles.voucherParticularTableLabel}>
                  GST payment no.
                </Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherParticularTableValue}>-</Text>
              </View>
              <View>
                <Text style={styles.voucherParticularTableValue}>-</Text>
              </View>
              <View>
                <Text style={styles.voucherParticularTableValue}>-</Text>
              </View>
            </View>
          </View>
          <View style={styles.voucherRow}>
            <View style={styles.voucherCol1}>
              <View>
                <Text style={styles.voucherTableLabel}>Trek Name</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>
                  {receiptData.receiptData && receiptData.receiptData.trekName}
                </Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Date of Trek</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>
                  {moment(receiptData.receiptData && receiptData.receiptData.startDate).format("DD MMM YYYY")}
                </Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Participants</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>
                  {receiptData.receiptData &&
                    receiptData.receiptData?.participantsCount}
                </Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Status</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>
                  {receiptData.receiptData &&
                    receiptData.receiptData.trekStatus}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.headernotes1}>Notes</Text>
            <Text style={styles.headernotes2}>
              - *Vouchers will be credited to the individual participant's
              Indiahikes account.
            </Text>
            <Text style={styles.headernotes2}>
              - Refunds will be credited to the mode of payment (account) used
              at the time of booking
            </Text>
            <Text style={styles.headernotes2}>
              - Cancellation fee is applied to both voucher and trek fee paid.
            </Text>
            <Text style={styles.headernotes2}>
              - No refunds for vouchers. If voucher is used for booking, it will
              be credited back in the same form.
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
};
export default ReceiptTemplate;
