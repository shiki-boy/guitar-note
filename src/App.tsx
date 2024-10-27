import { useState } from "react";
import "./App.css";

function App() {
    const allNotes = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ];

    const white = ["C", "D", "E", "F", "G", "A", "B"];
    const black = ["C#", "D#", "F#", "G#", "A#"];

    const guitar = [["E"], ["B"], ["G"], ["D"], ["A"], ["E"]];

    const [selected, setSetselected] = useState("C");

    guitar.forEach((k) => {
        let i = 1;
        while (i !== 13) {
            const nextNote = allNotes[(allNotes.indexOf(k[0]) + i) % 12];
            k.push(nextNote);
            i++;
        }
    });

    const handleClick = (note: string) => {
        setSetselected((old) => {
            if (old === note) {
                return "";
            }
            return note;
        });
    };

    return (
        <main>
            <div className="piano">
                {white.map((k) => (
                    <div
                        key={k}
                        className={"key " + (selected === k ? "active" : "")}
                        onClick={() => handleClick(k)}
                    >
                        {k}
                    </div>
                ))}

                <div className="blacks">
                    {black.slice(0, 2).map((k) => (
                        <div
                            className={
                                "black key" + (selected === k ? " active" : "")
                            }
                            onClick={() => handleClick(k)}
                            key={k}
                        >
                            {k}
                        </div>
                    ))}
                </div>

                <div className="blacks-2">
                    {black.slice(2).map((k) => (
                        <div
                            className={
                                "black key" + (selected === k ? " active" : "")
                            }
                            onClick={() => handleClick(k)}
                            key={k}
                        >
                            {k}
                        </div>
                    ))}
                </div>
            </div>

            <div className={"guitar " + (selected ? "has-active" : "")}>
                {new Array(13).fill("").map((_, i) => (
                    <div
                        className={
                            "fret" +
                            ([1, 3, 5, 7, 9, 12].includes(i) ? " empty" : "")
                        }
                        key={i}
                        data-num={i}
                    ></div>
                ))}

                {guitar.map((notes, i) =>
                    notes.map((f, n) => (
                        <div
                            className={
                                "fret" +
                                (i === guitar.length - 1 ? " last" : "") +
                                (f === selected ? " active" : "")
                            }
                            key={f + n}
                            data-note={f}
                        ></div>
                    ))
                )}
            </div>
        </main>
    );
}

export default App;
