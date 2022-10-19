import * as React from "react";

import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu, Drawer } from "@mui/material";
import HelpRounded from "@mui/icons-material/HelpRounded";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";

import ReleaseNotes from "./ReleaseNotes";
import HowToPlay from "./HowToPlay";
import GuessDialog from "./GuessDialog";

function TopMenu({ solution }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpenReleaseNotes, setIsOpenReleaseNotes] = React.useState(false);
    const [isOpenHowToPlay, setIsOpenHowToPlay] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleGiveUp = () => {
        setDialogOpen(true);
    }

    const closeGiveUp = () => {
        setDialogOpen(false);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openHowToPlay = () => {
        setIsOpenHowToPlay(true);
        setAnchorEl(null);
    };

    const openReleaseNotes = () => {
        setIsOpenReleaseNotes(true);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Murdle
                    </Typography>
                    <div>
                        <IconButton size="large" aria-label="account of current user" saria-controls="menu-appbar" aria-haspopup="true" onClick={handleGiveUp} color="inherit">
                            <PsychologyAltOutlinedIcon />
                        </IconButton>
                        <IconButton size="large" aria-label="account of current user" saria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <HelpRounded />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={openHowToPlay}>How to Play</MenuItem>
                            <MenuItem onClick={openReleaseNotes}>Release Notes</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isOpenReleaseNotes} onClose={() => setIsOpenReleaseNotes(false)}>
                <ReleaseNotes />
            </Drawer>
            <Drawer anchor="left" open={isOpenHowToPlay} onClose={() => setIsOpenHowToPlay(false)}>
                <HowToPlay />
            </Drawer>
            <GuessDialog dialogOpen={dialogOpen} onCloseDialog={closeGiveUp} solution={solution} />
        </Box>
    );
}

export default TopMenu;
