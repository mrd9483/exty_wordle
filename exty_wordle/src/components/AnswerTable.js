import { Box, keyframes } from "@mui/material";
import AnswerBar from "./AnswerBar";
import { fadeInLeftBig } from "react-animations";
import styled from "@emotion/styled";

const bounceAnimation = keyframes`${fadeInLeftBig}`;

const BouncyDiv = styled.div`
    animation: 1.5s ${bounceAnimation};
`;

function AnswerTable(prop) {
    return (
        <Box>
            {prop.answerList.map((answer) => (
                <BouncyDiv>
                    <AnswerBar answer={answer} />
                </BouncyDiv>
            ))}
        </Box>
    );
}

export default AnswerTable;
