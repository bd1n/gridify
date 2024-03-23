import React from "react";
import { BottomNavigation, Box } from "@mui/material";

const Footer = () => {
    
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
<<<<<<< HEAD
            <BottomNavigation sx={{backgroundColor: "#0B3853", height: "5vh", display: "flex", position: "fixed", bottom: 0, textAlign: "center", width: "100%"}}>
=======
            <BottomNavigation sx={{backgroundColor: "#0B3853", height: "5vh", display: "flex", position: "fixed", bottom: 0, width: "100%", textAlign: "center"}}>
>>>>>>> b68de547df16e34b24a3024599e3f1d7a3c531d8
                <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px", color: "white" }}>
                    Thanks for playing Gridify!
                </div>
            </BottomNavigation>
        </Box>
    )
}

export default Footer;