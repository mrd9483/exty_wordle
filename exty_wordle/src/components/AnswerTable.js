import { Box, List } from "@mui/material";
import AnswerBar from "./AnswerBar";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

function AnswerTable(prop) {
    return (
        <Box sx={{ mt: 1 }}>
            <List>
                <TransitionGroup>
                    {prop.answerList.map((answer) => (
                        <Collapse key={answer.word}>
                            <AnswerBar answer={answer} />
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
}

export default AnswerTable;
