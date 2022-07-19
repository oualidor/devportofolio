import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
import {Box, Flex} from "theme-ui";
import Me from "../../src/assets/Images/me.jpeg";
import {AiFillPhone, AiOutlineIe, AiOutlineMail} from "react-icons/ai";
import SkillTag from "../SkillTag/SkillTag";
import React from "react";
// Create styles
const styles = {
    container: { position: "absolute", top: 0, left: 0, width: "21cm", height: "29.7cm", backgroundColor: "white", padding: 4, display: "flex", zIndex: -11, },
    left: { width: "35%", height: "100%", backgroundColor: "white", padding: 5},
    right: { width: "64%", height: "100%", backgroundColor: "", padding: 5},
    imageHolder: { width: "100%", height: "7cm", backgroundColor: "", borderRadius: "20%"},
    viewer: {
        width: "100%", //the pdf viewer will take up all of the width and height
        height: "100%",
    },
};

// Create Document Component
function BasicDocument() {
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.container}>
                    <View style={styles.left}>
                        <View style={styles.imageHolder}>
                            <img src={Me} width={"100%"} height={"100%"} style={{boxShadow: "10px 10px 10px grey"}}/>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text>World</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}
export default BasicDocument;
