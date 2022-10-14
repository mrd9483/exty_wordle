import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Keyboard from "./components/Keyboard";
import TopMenu from "./components/TopMenu";
import AnswerTable from "./components/AnswerTable";

import "./App.css";

import WordInput from "./components/WordInput";
import { Container, Divider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const [input, setInput] = React.useState("");
    const [answerList, setAnswerList] = React.useState([]);

    const handleKeyClick = (key) => {
        if (input.length < 5) {
            setInput(input + key);
        } else {
            answerList.push({ word: input });
            setAnswerList(answerList);
            setInput("");
        }
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

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
                    <Keyboard onKeyClick={handleKeyClick} />
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
