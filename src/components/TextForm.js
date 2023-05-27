import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPERCASE!", "success");

    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");

    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("All Clear!!!", "success");

    };

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p><b>{text === "" ? text.split(" ").length - 1 : text.split(" ").length} words</b> and <b>{text.length} characters</b></p>
                <p><b>Total Read Time:</b> {text === "" ? 0.008 * (text.split(" ").length - 1) : 0.008 * text.split(" ").length} minutes || {text === "" ? 60 * 0.008 * (text.split(" ").length - 1) : 60 * 0.008 * text.split(" ").length} seconds</p>
                <h2>Preview</h2>
                <p>{text === "" ? "Enter something to preview here" : text}</p>
            </div>
        </>
    )
}
