import * as React from "react";
import { Container, Divider, Input } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";

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
    const dictionaryData = DictionaryData();
    const dictionary = Dictionary(dictionaryData.dict[5], dictionaryData.sol[5]);

    const [input, setInput] = React.useState("");
    const [answerList, setAnswerList] = React.useState([]);
    const [solution, setSolution] = React.useState(dictionary.getRandomWord());

    const gameLogic = GameLogic(solution);

    const handleKeyClick = (key) => {
        if (input.length < 5) setInput(input + key);
    };

    const handleSubmit = () => {
        let guessObj = gameLogic.guess(input);

        setAnswerList([guessObj, ...answerList]);
        setInput("");
    };

    const handleDeleteLetter = () => {
        if (input.length > 0) setInput(input.substring(0, input.length - 1));
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (input.length < 5) setInput(input + String.fromCharCode(event.keyCode));
        };

        document.addEventListener("keydown", handleKeyDown);
    }, [input]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="wrapper">
                <header>
                    <TopMenu />
                    <Container sx={{ mt: 1.5 }} maxWidth="sm">
                        <WordInput input={input} />
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
