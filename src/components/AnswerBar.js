import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

function AnswerBar(prop) {
    const theme = useTheme();

    const Letter = styled(Box)`
        border: 1px solid gray;
        margin: 0 3px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        border-radius: 5px;
        box-shadow: 0px 0px 2px gray;
        text-transform: uppercase;
    `;

    const Correct = styled(Letter)`
        background-color: ${theme.palette.success.dark};
        margin-left:30px;
    `;

    const Exists = styled(Letter)`
        background-color: ${theme.palette.info.dark};
    `;

    return (
        <Box sx={{ mb: 1, display: "flex", alignContent: "center", justifyContent: "center" }}>
            {prop.answer.word.split("").map((letter, index) => (
                <Letter key={index}>{letter}</Letter>
            ))}
            <Correct sx={{ ml: 1.5 }}>{prop.answer.correct}</Correct>
            <Exists sx={{ ml: 1.5 }}>{prop.answer.exists}</Exists>
        </Box>
    );
}

export default AnswerBar;
