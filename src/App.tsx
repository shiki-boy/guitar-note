import "./App.css";

function App() {
    const white = ["C", "D", "E", "F", "G", "A", "B"];
    const black = ["C#", "D#", "F#", "G#", "A#"];

    return (
        <>
            <div className="piano">
                {white.map((k) => (
                    <div key={k} className="key">{k}</div>
                ))}

                <div className="blacks">
                    {black.slice(0,2).map(k => (
                        <div className="black key" key={k}>{k}</div>
                    ))}
                </div>

                <div className="blacks-2">
                    {black.slice(2).map(k => (
                        <div className="black key" key={k}>{k}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
