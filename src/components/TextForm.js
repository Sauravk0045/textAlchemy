
import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    // function for uppercase
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Text is coverted into uppercase","success");
    }
    // function for lowercaase
    const handledownClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Text is coverted into Lowercase","success");
    }
    // function for clearText
    const handleclearClick = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("Text is Cleared","success");
    }
    // function for input text
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // function for speak text
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text is coverted into Speech","success");
        
    }
    //   function for captail the first letter
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Text is coverted into Capitalize","success");


    }
    //    const handleLightTheme = () => {
    //     document.querySelector('.body').style.backgroundColor = "white"
    //   }

    //   const handleDarkTheme = () => {
    //     document.querySelector('.body').style.backgroundColor = "#42743"
    //     document.querySelector('.body').style.color = "white"

    //   }
    // function for copy text
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copied","success");
    }
    //function for remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Blank Spaces has been removed","success");
    }
    //function for count words
    const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
      }
    return (
        <> <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3">

                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capital the text</button>
            {/* <button className="btn btn-primary mx-1 my-1" onClick={handleLightTheme}>Light Theme</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDarkTheme}> Dark Theme </button> */}
            <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text  </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h3>your text summary</h3>
                <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
                <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter your text in the  above text box to preview'}</p>
            </div>

        </>

    )
}
