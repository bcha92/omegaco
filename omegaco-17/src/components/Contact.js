import { useState } from "react";
import "../stylesheets/Contact.scss";

const formData = {
    name: "",
    email: "",
    message: "",
};

export default function Contact() {
    const [ form, formUpdate ] = useState(formData);

    const [ isSubmit, setSubmit ] = useState(false);
    const [ error, setError ] = useState("");

    const submitHandler = (event) => {
        for (let i = 0; i < Object.keys(form).length; i++) {
            if (form[Object.keys(form)[i]].length < 1) {
                event.preventDefault();
                setError(Object.keys(form)[i]);
                return;
            }
        }

        // If all the error detectors are cleared
        setSubmit(true);
        console.log(form);
    };

    const dataEntry = (event, input) => {
        formUpdate({ ...form, [input]: event.target.value });
    };

    return (
        <section id="contact-form">
            <h2>Contact Us</h2>
            {isSubmit ?
            // After form is submitted
            <>
            <h3>Thank you for your interest in OMEGACO.</h3>
            <h3>Our representative will contact you very soon.</h3>
            </> :

            // Before form is submitted
            <form onSubmit={(e) => submitHandler(e)}>
                {Object.keys(formData).map(input => {
                    if (input === "message") {
                        return <textarea
                            key={`textarea-${input}`}
                            rows="3"
                            placeholder={input[0].toUpperCase() + input.slice(1,)}
                            onChange={(e) => dataEntry(e, input)}
                        />
                    }
                    else {
                        return <input
                            key={`input-${input}`}
                            type={input}
                            placeholder={input[0].toUpperCase() + input.slice(1,)}
                            onChange={(e) => dataEntry(e, input)}
                        />
                    }
                })}
                {error !== "" ? <p className="error-message">Please enter your {error}!</p> : <></>}
                <input className="submit" type="submit" />
            </form>}
        </section>
    );
}