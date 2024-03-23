import React from "react";
import { AppBar } from "@mui/material";

const Header = () => {
    
    return(
        <AppBar sx={{backgroundColor: "#0B3853", height: "10%", display: "flex", textAlign: "center"}}>
            <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px" }}>
                Gridify
            </div>
        </AppBar>
    )
}

export default Header;