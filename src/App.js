import * as React from "react";
import { Container, Divider, Popover, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import ReactGA from 'react-ga';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Keyboard from "./components/Keyboard";
import TopMenu from "./components/TopMenu";
import AnswerTable from "./components/AnswerTable";
import WordInput from "./components/WordInput";

import Dictionary from "./utils/Dictionary";
import DictionaryData from "./assets/DictionaryData";
import GameLogic from "./utils/GameLogic";

import "./App.css";

function App() {

    ReactGA.initialize('G-NSHBWH8CDZ');

    const dictionaryData = DictionaryData();
    const dictionary = Dictionary(dictionaryData.dict[5], dictionaryData.sol[5]);

    const [input, setInput] = React.useState("");
    const [answerList, setAnswerList] = React.useState([]);
    const [error, setError] = React.useState({ isError: false, error: "" });
    const [wordInputAnchor, setWordInputAnchor] = React.useState(null);

    const solution = React.useRef(dictionary.getRandomWord());
    const wordInputRef = React.useRef();
    const gameLogic = GameLogic(solution.current);

    const handleKeyClick = (key) => {
        if (input.length < 5) setInput(input + key);
    };

    const handleSubmit = () => {
        if (dictionary.checkIfAllowedWord(input)) {
            const guessInfo = gameLogic.guess(input);
            if (guessInfo.correct === 5) {
                alert('You Win!');
            } else {
                setAnswerList([guessInfo, ...answerList]);
            }
            setInput("");
        } else {
            if (input.length < 5) {
                setError({ isError: true, error: "Not a complete word!" });
            } else {
                setError({ isError: true, error: "Word not in dictionary" });
            }
            setWordInputAnchor(wordInputRef.current);
        }
    };

    const handleDeleteLetter = () => {
        if (input.length > 0) {
            setInput(input.substring(0, input.length - 1));
        }
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const handlePopoverClose = () => {
        setError({ isError: false });
        setWordInputAnchor(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (input.length < 5) setInput(input + String.fromCharCode(event.keyCode));
        };

        //document.addEventListener("keydown", handleKeyDown);
    }, [input]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="wrapper">
                <header>
                    <TopMenu />
                    <Container sx={{ mt: 1.5 }} maxWidth="sm">
                        <div ref={wordInputRef}>
                            <WordInput input={input}></WordInput>
                        </div>
                        <Popover
                            open={error.isError}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            anchorEl={wordInputAnchor}
                            onClose={handlePopoverClose}
                        >
                            <Typography sx={{ p: 2 }}>{error.error}</Typography>
                        </Popover>
                    </Container>
                    <Divider>Answers</Divider>
                </header>
                <div className="content">
                    <Container maxWidth="sm">
                        <AnswerTable answerList={answerList} />
                    </Container>
                </div>
                <footer>
                    <Divider></Divider>
                    <Keyboard onKeyClick={handleKeyClick} onSubmit={handleSubmit} onDeleteLetter={handleDeleteLetter} />
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
