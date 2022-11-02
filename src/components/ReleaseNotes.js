import { Box, Typography } from "@mui/material";

function ReleaseNotes() {
    return (
        <Box sx={{ width: 300, p: 3 }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Release Notes
            </Typography>
            <h5>2022.11.01</h5>
            <ul>
                <li>Overhauled difficulties</li>
                <li>Added ability to "disable" buttons</li>
            </ul>
            <h5>2022.10.18</h5>
            <ul>
                <li>Added Give up button</li>
            </ul>
            <h5>2022.10.17</h5>
            <ul>
                <li>A complete overhaul for the look and feel</li>
                <li>Now written in React</li>
            </ul>
            <h5>2022.10.07</h5>
            <ul>
                <li>Name change again (hopefully I'll settle on this one)</li>
                <li>Added "Easy Mode"</li>
            </ul>
            <h5>2022.10.05</h5>
            <ul>
                <li>Name change (not sure how I confused Minesweeper with Mastermind!</li>
                <li>Added release notes section</li>
                <li>Moved help from modal to left slider, to better play with mobile</li>
                <li>Moved keyboard out of modal and onto main page</li>
                <li>Cleaned up the UI a little</li>
                <li>The keyboard now actually selects letters</li>
                <li>Works in mobile</li>
                <li>Removed words with duplicate letters from potential solutions</li>
            </ul>
        </Box>
    );
}

export default ReleaseNotes;
