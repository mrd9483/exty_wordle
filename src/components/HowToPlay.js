import { Box, css, Typography } from "@mui/material";

function HowToPlay() {
    return (
        <Box sx={{ width: 300, p: 3 }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                How To Play
            </Typography>
            <p>
                <strong>NOTE: This is in beta... please expect issues! And crappy help!</strong>
            </p>
            <p>This game is a combination between Mastermind and Wordle. Try to guess a 5-letter word and use the clues to eventually get the solution.</p>
            <p>
                <span style={{ color: "#388e3c" }}>A green number</span> means that a letter from the guessed word is in the solution but not in the right spot. The number represents how many letters.
            </p>
            <p>
                <span style={{ color: "#0288d1" }}>A light blue number</span> means that a letter from the guessed word is in the solution and not in the right spot. The number represents how many letters are in the right spot.
            </p>
            <p>NOTE: The word will have five unique letters. Allowing non-unique letters within the solution makes it much more difficult</p>
        </Box>
    );
}

export default HowToPlay;
