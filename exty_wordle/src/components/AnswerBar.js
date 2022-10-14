import { Box } from "@mui/material";
import styled from "@emotion/styled";

function AnswerBar(prop) {
    const Letter = styled(Box)`
        border: 1px solid gray;
        display: inline-block;
        margin: 0 3px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px gray;
        text-transform: uppercase;
    `;

    return (
        <div>
            {prop.answer.word.split('').map((letter) => (
                <Letter>{letter}</Letter>
            ))}
        </div>
    );
}

export default AnswerBar;
