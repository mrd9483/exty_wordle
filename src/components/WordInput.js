import styled from "@emotion/styled";
import { Box } from "@mui/material";

function WordInput(prop) {
    const LetterInput = styled(Box)`
        border: 2px solid black;
        display: inline-block;
        margin: 0 3px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        border-radius: 8px;
        box-shadow: 0px 0px 2px gray;
        text-transform: uppercase;
    `;

    const input = prop.input.padEnd(5, '\u00A0');
    return (
        <Box sx={{ display:'flex', justifyContent: 'center' }}>
            {input.split('').map((letter, index) => (
                <LetterInput key={index}>{letter}</LetterInput>
            ))}
        </Box>
    );
}

export default WordInput;
