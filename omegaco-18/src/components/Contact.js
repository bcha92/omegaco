import "../stylesheets/Contact.scss";

const formData = {};

export default function Contact() {
    const submitHandler = () => {
        console.log(formData);
    };

    return (
        <form onSubmit={() => submitHandler}>
            <input type="submit" />
        </form>
    );
}