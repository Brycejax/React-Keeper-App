import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {/* <Note title="title" content="content" /> */}
            {notes.map(noteItem => {
                return <Note key={noteItem.key} title = {noteItem.title} content = {noteItem.content}/>
            })}
            <Footer />
        </div>
    );
}

export default App;