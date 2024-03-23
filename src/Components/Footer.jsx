import React from "react";
import { AppBar, BottomNavigation, Box } from "@mui/material";

const Footer = () => {
    
    return(
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <BottomNavigation sx={{backgroundColor: "#0B3853", height: "5vh", display: "flex", position: "static", textAlign: "center", marginTop: "auto"}}>
                <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px", color: "white" }}>
                    Gridify
                </div>
            </BottomNavigation>
        </Box>
    )
}

export default Footer;