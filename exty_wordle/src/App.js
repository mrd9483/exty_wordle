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

    return (
        <div>
            <TopMenu />
            <Container maxWidth="sm">
                <WordInput input={input} />
                <Divider>Answers</Divider>
                <AnswerTable answerList={answerList} />
                <Keyboard onKeyClick={handleKeyClick} />
            </Container>
        </div>
    );
}

export default App;
