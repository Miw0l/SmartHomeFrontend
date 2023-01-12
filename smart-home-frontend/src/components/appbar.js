import React, {useState} from "react"
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const MyAppBar = () => {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography>LOGO</Typography>
            <Button variant="contained">Hello</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default MyAppBar
