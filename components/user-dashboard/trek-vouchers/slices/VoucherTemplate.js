import React, { useState, useEffect, useRef } from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink, Image } from '@react-pdf/renderer';
import moment from "moment";

const VoucherTemplate = (voucher) => {
console.log(voucher);

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
          <Image src="assets/layout/images/logo.png" style={{ width: '30%' }} />
          <Text style={styles.header1}>Gift Voucher for {voucher && voucher.voucher.title}</Text>
          <Text style={styles.header2}>Please find the Voucher details below.</Text>
        </View>
        <View style={styles.voucherRow}>
          <View style={styles.voucherCol1}>
            <View>
              <Text style={styles.voucherTableLabel}>Voucher Code</Text>
            </View>
            <View>
              <Text style={styles.voucherTableValue}>{voucher  && voucher.voucher.title}</Text>
            </View>
          </View>
          <View style={styles.voucherColAll}>
            <View>
              <Text style={styles.voucherTableLabel}>Amount</Text>
            </View>
            <View>
              <Text style={styles.voucherTableValue}>{ voucher && voucher.voucher.amount}</Text>
            </View>
          </View>
          <View style={styles.voucherColAll}>
            <View>
              <Text style={styles.voucherTableLabel}>Valid Till</Text>
            </View>
            <View>
              <Text style={styles.voucherTableValue}>{ voucher && voucher.voucher.validTill}</Text>
            </View>
          </View>
          <View style={styles.voucherColAll}>
            <View>
              <Text style={styles.voucherTableLabel}>Amount Available</Text>
            </View>
            <View>
              <Text style={styles.voucherTableValueLast}>{ voucher && voucher.voucher.amountAvailed}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
    </>
  );
};
export default VoucherTemplate;
