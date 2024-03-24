import React from "react";
import { AppBar } from "@mui/material";

const Header = () => {
    return(
        <AppBar sx={{backgroundColor: "#0B3853", height: "8vh", display: "flex", textAlign: "center", position: "static", paddingBottom: "1vh"}}>
            <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px" }}>
                <img src = "./images/Gridify_Logo.jpg" alt = ""/>Gridify
            </div>
        </AppBar>
    )
}

export default Header;