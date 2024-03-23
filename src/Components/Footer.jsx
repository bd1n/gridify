import React from "react";
import { BottomNavigation, Box } from "@mui/material";

const Footer = () => {
    
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <BottomNavigation sx={{backgroundColor: "#0B3853", height: "5vh", display: "flex", position: "fixed", bottom: 0, width: "100%", textAlign: "center"}}>
                <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px", color: "white" }}>
                    Thanks for playing Gridify!
                </div>
            </BottomNavigation>
        </Box>
    )
}

export default Footer;