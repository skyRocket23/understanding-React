import React,{useState} from 'react'
import Navbar from './Navbar'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("Uppercase was clicked"+text);
        setText(newText)
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        console.log("Uppercase was clicked" + text);
        setText(newText)
    }

    const handleClearText = () => {
        let newText = '';
        console.log("Uppercase was clicked" + text);
        setText(newText)
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);;
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[]+/);
        setText(newText.join(" "))
    }

    const handleWordLength = () => {
        let r = 0.008 * text.split(" ").length;
        let newText='';
        if(r<2){
            newText='Very Short Text';
        }
        else if(r<5){
            newText='Short Text'
        }
        else{
            newText='Long Text';
        }
        console.log(newText);
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("ON change");
        setText(event.target.value)
    }
    const[text, setText] = useState('Enter the text');
    // text="new text"; Wrong way
    // setText("new Text")
    let res = 0.008 * text.split(" ").length;
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light' ? 'green':'white'}} id="myBox" rows="12"></textarea>
                </div>

                <button className="btn btn-success mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-info mx-2" onClick={handleDownClick}>Lowercase</button>
                <button className="btn btn-warning mx-2" onClick={handleWordLength}>Text Strength</button>
                <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>ExtraSpaces</button> */}
                
            </div>

            <div className="container my-3">
                <h1>
                    Your text summary
                </h1>
                <p>{text.split(" ").length} and {text.length} characters</p>
                <p>Total {res} Reading minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
        
    )
}
