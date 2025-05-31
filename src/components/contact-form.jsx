import "../style/components.css"


export function ContactForm ({  setContactOpen }) {
    
    function handleSubmit (e) {
        e.preventDefault();


    }
    return (
        <div className="contact-form-container">
            <div className="contact-form-header">
                <span onClick={() => setContactOpen(false)} > {"<"}</span>

                <span>Contact Us</span>
            </div>

            <form onSubmit={handleSubmit}>
                {/* <input  */}
            </form>
        </div>
    )
}