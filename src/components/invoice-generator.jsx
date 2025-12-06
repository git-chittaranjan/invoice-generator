
import { Page, Text, View, Document, PDFViewer, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { styles } from './style';
import { Table, TD, TH, TR } from '@ag-media/react-pdf-table';
import { tableData, totalData } from './data';
import { toWords } from 'number-to-words';


export default function Invoice() {

    const invoiceID = "#INV-2024-001"
    const invoiceDate = "24th January 2025"
    const customerName = "Chittaranjan Saha"
    const customerPhoneNumber = "+91 6296969436"
    const customerPanNumber = "HUFPS6215G"
    const customerAddressLine1 = "SummerLin Villas, Villa No - 22"
    const customerAddressLine2 = "Hyderabad, Telengana, 500086"
    const companyAddressLine1 = "Kalaiya, Sub-Metropolitan City-5"
    const companyAddressLine2 = "Bara, Nepal, 500032"
    const companyPhoneNumber1 = "+977-9763570043"
    const companyPhoneNumber2 = "+977-9709223262"
    const emailID = "account@easymylearning.com"
    const billPreparedBy = "Bishal Kumar"
    const modeOfPayment = "Online"
    const remark = "NA"
    const billPrintDateTime = "28th January 2025"
    const subTotal = "Rs. 5695"
    const discount = "Rs. 1999"
    const total = "Rs. 3696"
    const totalNumaric = 3696


    //================ Numaric to Word converter ======================
    const totalWordsLowerCase = toWords(totalNumaric);
    const totalWordsUpperCase = totalWordsLowerCase.charAt(0).toUpperCase() + totalWordsLowerCase.slice(1) + " rupees."


    const InvoicePDF = () => (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* ============== Logo and Company Address section ============== */}
                <View>
                    <View>
                        <Image style={styles.logo} src="/EML_Logo.png" />
                    </View>
                    <View style={styles.companyName}>
                        <Text>EasyMy Learning Pvt. Ltd.</Text>
                    </View>
                    <View style={styles.companyAddress}>
                        <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 2 }}>{companyAddressLine1}</Text>
                        <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 2 }}>{companyAddressLine2}</Text>
                        <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 2 }}>Phone No : {companyPhoneNumber1}, {companyPhoneNumber2}</Text>
                        <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 2 }}>Email ID : {emailID}</Text>
                    </View>
                </View>

                {/* ============== Header section ============== */}
                <View style={styles.header}>
                    <View>
                        <View>
                            <Text style={[styles.billTo, styles.extraBold]}>Bill To:</Text>
                            <View style={[styles.row, styles.textMargin, styles.timesRoman]}>
                                <Text>Customer Name : </Text>
                                <Text style={styles.textBold}>{customerName}</Text>
                            </View>
                            <Text style={[styles.textMargin, styles.timesRoman]}>Phone Number : {customerPhoneNumber}</Text>
                        </View>
                        <View style={styles.headerBlock}>
                            <Text style={[styles.textBold, styles.subTitle]}>Address</Text>
                            <Text style={[styles.textMargin, styles.timesRoman]}>{customerAddressLine1}</Text>
                            <Text style={[styles.textMargin, styles.timesRoman]}>{customerAddressLine2}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.invoiceTitle, styles.textBold, styles.alignRight]}>INVOICE</Text>
                        <Text style={[styles.textMargin, styles.alignRight]}>Invoice ID : {invoiceID}</Text>
                        <Text style={[styles.textMargin, styles.alignRight]}>Invoice Date : {invoiceDate}</Text>
                        <Text style={[styles.textMargin, styles.alignRight]}>PAN Number : {customerPanNumber}</Text>
                    </View>
                </View>


                {/* ============== Body section - Table ============== */}
                <View style={[styles.content, { fontSize: 11 }]}>
                    <Table style={styles.table}>
                        <TH style={[styles.tableHeader, styles.textBold]}>
                            <TD style={[styles.td, styles.col1]}>SL No.</TD>
                            <TD style={[styles.td, styles.col2]}>Item Name</TD>
                            <TD style={[styles.td, styles.col3]}>Quantity</TD>
                            <TD style={[styles.td, styles.col4]}>Unit Price</TD>
                            <TD style={[styles.td, styles.col5]}>Total Amount</TD>
                        </TH>
                        {tableData.map((item, index) => (
                            <TR key={index}>
                                <TD style={[styles.td, styles.col1]}>{item.slno}</TD>
                                <TD style={[styles.td, styles.col2]}>{item.description}</TD>
                                <TD style={[styles.td, styles.col3, { justifyContent: 'center' }]}>{item.quantity}</TD>
                                <TD style={[styles.td, styles.col4, { justifyContent: 'flex-end' }]}>{item.unitPrice.toFixed(2)}</TD>
                                <TD style={[styles.td, styles.col5, { justifyContent: 'flex-end' }]}>{item.totalPrice.toFixed(2)}</TD>
                            </TR>
                        ))}
                    </Table>


                    {/* ============== Body section - Subtotal ============== */}
                    <View style={[styles.totals, styles.timesRoman]}>
                        <View style={{ minWidth: "250px" }}>
                            {/* {totalData.map((item, index) => (
                                <View key={index} style={styles.totalContent}>
                                    <Text style={item.label === "Total" ? styles.textBold :
                                        {}}> {item.label}</Text>
                                    <Text style={item.label === "Total" ? styles.textBold :
                                        {}}> {item.value}</Text>
                                </View>
                            ))} */}
                            <View style={styles.totalContent}>
                                <Text>Subtotal</Text>
                                <Text>{subTotal}</Text>
                            </View>
                            <View style={styles.totalContent}>
                                <Text>Discount</Text>
                                <Text>{discount}</Text>
                            </View>
                            <View style={[styles.totalContent, styles.textBold]}>
                                <Text>Total</Text>
                                <Text>{total}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row, styles.timesRoman, { marginTop: 10 }]}>
                        <Text style={styles.textBold}>Total Amount in Words : </Text>
                        <Text>{totalWordsUpperCase}</Text>
                    </View>

                </View>


                {/* ============== Footer section ============== */}
                <View style={styles.footer}>
                    <View style={styles.footerFlex}>
                        <View>
                            <View>
                                <Text style={[styles.thankYou, styles.extraBold]}>Thank You!</Text>
                                <Text style={[styles.textMargin, styles.timesRoman]}>Bill Prepared By : {billPreparedBy}</Text>
                                <Text style={[styles.textMargin, styles.timesRoman]}>Mode od Payment : {modeOfPayment}</Text>
                                <Text style={[styles.textMargin, styles.timesRoman]}>Remark : {remark}</Text>
                            </View>
                        </View>

                        {/* ========== Right flex ==========  */}
                        <View>
                            <View>
                                <Image style={styles.signature} src="/signature.png" />
                            </View>
                            <Text style={[styles.textMargin, styles.timesRoman, { marginLeft: "auto", marginRight: "auto" }]}>Authorized Signatory</Text>
                            <Text style={[styles.textMargin, styles.alignRight, styles.timesRoman]}>Bill Print Date & Time : {billPrintDateTime}</Text>
                        </View>
                    </View>

                </View>


                {/* ============== Disclaimer section ============== */}
                <View style={{ fontSize: 10, position: "absolute", bottom: 30, left: 0, right: 0 }}>
                    <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 3 }}>This invoice is system-generated and does not require a signature.</Text>
                    <Text style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 3, color: 'gray' }}>https://www.chittaranjansaha.com/</Text>
                </View>
                <View style={{ fontSize: 9, position: "absolute", bottom: 15, right: 50 }}>
                    <Text>| Page 1 of 1 |</Text>
                </View>
            </Page>
        </Document >
    );
    return (
        <div className="max-w-3xl mx-auto mt-12 mb-8 px-4 sm:px-6 lg:px-8 space-y-6">
            {/* PDF Container */}
            <div className="w-full h-[500px] sm:h-[45vh] lg:h-[70vh] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all">
                <PDFViewer style={{ width: "100%", height: "100%" }}>
                    <InvoicePDF />
                </PDFViewer>
            </div>

            {/* Download Button */}
            <div className="text-center">
                <PDFDownloadLink document={<InvoicePDF />} fileName="Invoice.pdf">
                    {({ loading }) => (
                        <button
                            className="mt-6 px-16 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            {loading ? "Preparing document..." : "Download PDF"}
                        </button>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    )
} 