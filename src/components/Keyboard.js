import { Button, Container, Stack, Box } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

function KeyComponent(props) {
    return (
        <Button onClick={() => props.onClick(props.letter)} variant="contained" sx={{ fontFamily: "Consolas, monospace", fontSize:24, fontWeight:"bold", height: 45, minWidth: 0, width: 29, m: 0.25, p:0 }}>
            {props.letter}
        </Button>
    );
}

function SubmitComponent(props) {
    return (
        <Button onClick={() => props.onSubmit()} variant="contained" sx={{ height:45, fontWeight:"bold", minWidth: 0, width: 50, m: 0.25 }}>
            <KeyboardReturnIcon fontSize="large"/>
        </Button>
    );
}

function DeleteComponent(props) {
    return (
        <Button onClick={() => props.onDeleteLetter()} variant="contained" sx={{ height:45,  minWidth: 0, width: 50, m: 0.25 }}>
            <BackspaceOutlinedIcon fontSize="large" />
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
                        <KeyComponent key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    {keyboardKeys[1].split("").map((letter) => (
                        <KeyComponent key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                </Box>
                <Box sx={{ mx: "auto" }}>
                    <SubmitComponent onSubmit={props.onSubmit} />
                    {keyboardKeys[2].split("").map((letter) => (
                        <KeyComponent key={letter} onClick={() => handleClick(letter)} letter={letter} />
                    ))}
                    <DeleteComponent onDeleteLetter={props.onDeleteLetter} />

                </Box>
            </Stack>
        </Container>
    );
}

export default Keyboard;
