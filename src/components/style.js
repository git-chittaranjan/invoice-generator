import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        color: "#262626",
        fontFamily: "Helvetica",
        fontSize: 12,
        padding: "30px 50px"
    },

    //============== Logo and Company Address section ============== 
    logo: {
        display: "block",
        width: '75px',
        marginTop: 0,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    companyName: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        //fontFamily: "Helvetica-Bold",
        fontFamily: "Times-Bold",
        marginBottom: 10
    },
    companyAddress: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 10,
        marginBottom: 40
    },


    //============== Header section ==============
    header: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    invoiceTitle: {
        marginBottom: 3,
        fontSize: 24
    },
    subTitle: {
        marginBottom: 2,
    },
    headerBlock: {
        marginTop: 10,
        marginBottom: 8
    },
    textMargin: {
        marginBottom: 3
    },
    textBold: {
        fontFamily: "Times-Bold"
    },
    extraBold: {
        fontSize: 15,
        fontFamily: "Helvetica-Bold"
    },
    billTo: {
        marginBottom: 5
    },
    timesRoman: {
        fontFamily: "Times-Roman"
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    alignRight: {
        marginLeft: "auto"
    },



    //============== Body section - Main Table ==============
    content: {
        display: 'flex',
        flex: 1,
    },
    table: {
        width: "100%",
        borderColor: "1px solid #f3f4f6",
        margin: "20px 0"
    },
    tableHeader: {
        backgroundColor: "#e5e5e5"
    },
    col1: {
        flex: 0.5,
    },
    col2: {
        flex: 3,
    },
    col3: {
        flex: 1,
    },
    col4: {
        flex: 1,
    },
    col5: {
        flex: 1,
    },
    td: {
        padding: 5
    },


    //============== Body section - Below Table ==============
    totals: {
        display: "flex",
        alignItems: "flex-end"
    },
    totalContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "8px"
    },


    //============== Footer section ==============
    footer: {
        position: 'absolute',
        bottom: 70, // Add margin from the bottom
        left: 50,
        right: 50
    },
    footerFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    thankYou: {
        marginBottom: 10
    },
    signature: {
        display: "block",
        width: '100px',
        height: '35px',
        marginTop: 0,
        marginBottom: -10,
        marginLeft: 'auto',
        marginRight: 'auto'
    }

}); 