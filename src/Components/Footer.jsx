import React from "react";
import { BottomNavigation, Box } from "@mui/material";
import { right } from "@popperjs/core";

const Footer = () => {
    
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <BottomNavigation sx={{backgroundColor: "#0B3853", height: "5vh", display: "flex", position: "fixed", bottom: 0, textAlign: "center", width: "100%"}}>
                <div style={{marginTop: "auto", marginBottom: "auto", marginLeft: "auto", paddingRight:"16px", fontSize: "16px", color: "white"}}>
                    Project by Devang Ray, Brennan Dolan, and Anubhav Kamath
                </div>
            </BottomNavigation>
        </Box>
    )
}

export default Footer;