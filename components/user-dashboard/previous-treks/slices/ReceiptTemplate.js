import React, { useState, useEffect, useRef } from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink, Image } from '@react-pdf/renderer';
import moment from "moment";
const ReceiptTemplate = (receiptData) => {
const [selectedReceipts, setselectedReceipts] = useState();

//console.log(receiptData);
//setselectedReceipts(selectedReceiptsData);

  const styles = StyleSheet.create({
    page: {
      // flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
      width: '100%',
    },
    header1: {
      fontSize: '14px',
      marginBottom: '10px',
      marginTop: '20px',
    },
    header2: {
      fontSize: '12px',
      marginBottom: '10px',
    },
    voucherRow: {
      flexDirection: 'row',
      marginLeft: '10px',
      marginRight: '10px',
      padding: 10,
    },
    voucherCol1: {
      width: '40%',
    },
    voucherColAll: {
      width: '20%',
    },
    voucherTableLabel: {
      fontSize: '12px',
      backgroundColor: '#f8c301',
      padding: '10px',
    },
    voucherTableValue: {
      fontSize: '12px',
      padding: '10px',
      borderBottom: '1px solid #d3d3d3',
      borderLeft: '1px solid #d3d3d3',
    },
    voucherTableValueLast: {
      fontSize: '12px',
      padding: '10px',
      borderLeft: '1px solid #d3d3d3',
      borderRight: '1px solid #d3d3d3',
      borderBottom: '1px solid #d3d3d3',
    },
  });
   
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image src="assets/images/logo.jpg" style={{ width: '30%' }} />
            <Text style={styles.header1}>Receipt for Batch -  {receiptData.receiptData && receiptData.receiptData.trekName} - 
            {receiptData.receiptData && 
             moment(
                receiptData.receiptData?.startDate
              ).format("MM/DD/YYYY")}{" "}
              -{" "}
              {moment(
                receiptData.receiptData?.endDate
              ).format("MM/DD/YYYY")}
            </Text>
          </View>
          <View style={styles.voucherRow}>
            <View style={styles.voucherCol1}>
              <View>
                <Text style={styles.voucherTableLabel}>Trek Name</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>{receiptData.receiptData && receiptData.receiptData.trekName}</Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Date of Trek</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>{receiptData.receiptData && receiptData.receiptData.startDate}</Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Participants</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValue}>{receiptData.receiptData && receiptData.receiptData?.participantsCount}</Text>
              </View>
            </View>
            <View style={styles.voucherColAll}>
              <View>
                <Text style={styles.voucherTableLabel}>Status</Text>
              </View>
              <View>
                <Text style={styles.voucherTableValueLast}>{receiptData.receiptData && receiptData.receiptData.trekStatus}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};
export default ReceiptTemplate;
