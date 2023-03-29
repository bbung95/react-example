import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ScoreList from "./components/ScoreList";
import Score from "./components/Score";
import { generateRandomNumber } from "./utils/random";
import { useEffect, useState } from "react";

function App() {
    const [scores, setScores] = useState([]);
    const [randomNumber, setRandomNumber] = useState();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCheckNumber = (value) => {
        const answer = [...value].map((item) => Number(item));

        if (answer.join("") === randomNumber.join("")) {
            alert("정답");
            setIsSuccess(true);
        }

        const info = randomNumber.reduce(
            (prev, cur, idx) => {
                if (cur === answer[idx]) {
                    return { ...prev, strike: prev.strike + 1 };
                } else {
                    if (answer.includes(cur)) {
                        return { ...prev, ball: prev.ball + 1 };
                    }
                }

                return { ...prev };
            },
            { strike: 0, ball: 0, answer }
        );

        setScores([...scores, info]);
    };

    useEffect(() => {
        setRandomNumber(generateRandomNumber());
    }, []);

    return (
        <div className="App">
            <Header random={randomNumber} isSuccess={isSuccess} />
            <Section handler={handleCheckNumber} />
            <ScoreList>
                {scores.map((item, idx) => (
                    <Score key={idx} info={item} idx={idx + 1} />
                ))}
            </ScoreList>
        </div>
    );
}

export default App;
