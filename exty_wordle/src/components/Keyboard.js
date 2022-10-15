import { Button, Container, Stack, Box } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

function KeyComponent(props) {
    return (
        <Button key={props.letter} onClick={() => props.onClick(props.letter)} variant="contained" sx={{ minWidth: 0, width: 30, m: 0.25 }}>
            {props.letter}
        </Button>
    );
}

function SubmitComponent(props) {
    return (
        <Button onClick={() => props.onSubmit()} variant="contained" sx={{ minWidth: 0, width: 50, m: 0.25 }}>
            <KeyboardReturnIcon />
        </Button>
    );
}

function DeleteComponent(props) {
    return (
        <Button onClick={() => props.onDeleteLetter()} variant="contained" sx={{ minWidth: 0, width: 50, m: 0.25 }}>
            <BackspaceOutlinedIcon />
        </Button>
    );
}

function Keyboard(props) {
    const keyboardKeys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const handleClick = (letter) => {
        props.onKeyClick(letter);
    };

    return (
        <Container maxWidth="sm">
            <Stack>
                <Box sx={{ mx: "auto" }}>
                    {keyboardKeys[0].split("").map((letter) => (
                        <KeyComponent onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    {keyboardKeys[1].split("").map((letter) => (
                        <KeyComponent onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    <SubmitComponent onSubmit={props.onSubmit} />
                    {keyboardKeys[2].split("").map((letter) => (
                        <KeyComponent onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                    <DeleteComponent onDeleteLetter={props.onDeleteLetter} />

                </Box>
            </Stack>
        </Container>
    );
}

export default Keyboard;
