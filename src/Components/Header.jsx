import React from "react";
import { AppBar } from "@mui/material";

const Header = () => {
    //"#0B3853"
    return(
        <AppBar sx={{backgroundColor: "#0B3853", height: "8vh", display: "flex", textAlign: "center", position: "sticky"}}>
            <div style={{marginRight: "auto", marginTop: "auto", marginBottom: "auto", paddingLeft:"16px", fontSize: "24px" }}>
                Gridify
            </div>
        </AppBar>
    )
}

export default Header;