import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import Keyboard from "./components/Keyboard";
import TopMenu from "./components/TopMenu"

import "./App.css";



function App() {
    const handleKeyClick = (key) => {
        alert(key);
    };

    return (
        <div>
            <header>
                <TopMenu />
            </header>
            <Keyboard onKeyClick={handleKeyClick} />
        </div>
    );
}

export default App;
