import { React, useState } from 'react'
import './bmi.css';

const BMI = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");
    
    let calcBmi = (e) => {
        e.preventDefault();
        if(weight === 0 || height === 0){
            alert("Please enter a valid weight and height");
        } else {
            let bmi = weight / ((height * height) / 10000);
            setBmi(bmi.toFixed(1));

            if(bmi < 20){
                setMessage("Underweight");
            } else if (bmi >= 20 && bmi < 27){
                setMessage("Normal");
            } else {
                setMessage("Overweight");
            }
        }
    }


  return (
    <section className="maximus__bmi">
        <div className="maximus__bmi-content">
            <h2>Let's Calculate Your <span>BMI</span></h2>
            <p>Easily determine your body mass index with our accurate calculation tool.</p>
            <div className="maximus__bmi-content_form">
                <form>
                    <input type="text" 
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Weight / kg"
                        id="weight"
                    />
                    <input type="text"
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Height / cm"
                        id="height"
                    />
                </form>
                <p>
                    <span>Your BMI is: <span>{bmi}</span></span>
                    <span>Your weight is: <span>{message}</span></span>
                </p>
                <button type="submit" onClick={calcBmi}>
                    Calculate
                </button>
            </div>
        </div>
    </section>
  )
}

export default BMI