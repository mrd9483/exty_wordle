import * as React from "react";
import { Button, Container, Stack, Box } from "@mui/material";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function KeyComponent(props) {
    const [isDark, setIsDark] = React.useState(false);

    const click = () => {
        if (props.submittedState) {
            props.onClick(props.letter);
        } else {
            setIsDark(!isDark);
        }
    };

    const whatColor = () => {
        if (isDark) return "custom";
        if (!props.submittedState) return "secondary";
        return "primary";
    };

    return (
        <Button disabled={props.submittedState && isDark} onClick={() => click()} color={whatColor()} variant="contained" sx={{ fontFamily: "Roboto, monospace", fontSize: 16, fontWeight: "bold", height: 45, minWidth: 0, width: 27, m: 0.25, p: 0 }}>
            {props.letter}
        </Button>
    );
}

function SubmitComponent(props) {
    return (
        <span>
            {props.submittedState && (
                <Button onClick={() => props.onSubmit()} color={props.submittedState ? "primary" : "secondary"} variant="contained" sx={{ height: 45, fontWeight: "bold", minWidth: 0, width: 50, m: 0.25 }}>
                    ENTER
                </Button>
            )}
        </span>
    );
}

function EditComponent(props) {
    return (
        <Button onClick={() => props.onEdit()} variant="contained" color={props.submittedState ? "primary" : "secondary"} sx={{ height: 45, minWidth: 0, width: 50, m: 0.33 }}>
            <SettingsOutlinedIcon fontSize="medium" />
        </Button>
    );
}

function DeleteComponent(props) {
    return (
        <span>
            {props.submittedState && (
                <Button hidden={!props.submittedState} onClick={() => props.onDeleteLetter()} variant="contained" color={props.submittedState ? "primary" : "secondary"} sx={{ height: 45, minWidth: 0, width: 50, m: 0.33 }}>
                    <BackspaceOutlinedIcon fontSize="medium" />
                </Button>
            )}
        </span>
    );
}

function Keyboard(props) {
    const [isSubmittedState, setIsSubmittedState] = React.useState(true);
    const keyboardKeys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const handleClick = (letter) => {
        props.onKeyClick(letter);
    };

    const handleEdit = () => {
        setIsSubmittedState(!isSubmittedState);
    };

    return (
        <Container maxWidth="sm">
            <Stack>
                <Box sx={{ mx: "auto" }}>
                    {keyboardKeys[0].split("").map((letter) => (
                        <KeyComponent submittedState={isSubmittedState} key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    <EditComponent submittedState={isSubmittedState} onEdit={() => handleEdit()} />
                    {keyboardKeys[1].split("").map((letter) => (
                        <KeyComponent submittedState={isSubmittedState} key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    <SubmitComponent submittedState={isSubmittedState} onSubmit={props.onSubmit} />
                    {keyboardKeys[2].split("").map((letter) => (
                        <KeyComponent submittedState={isSubmittedState} key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                    <DeleteComponent submittedState={isSubmittedState} onDeleteLetter={props.onDeleteLetter} />
                </Box>
            </Stack>
        </Container>
    );
}

export default Keyboard;
