

export default function ContactForm() {

    return(
        <>
        <div className="form_container">
            <form >
                <h2>Message Us:</h2>
                {/* NAME */}
                <div className="entry">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                {/* END NAME */}
                {/* EMAIL */}
                <div className="entry">
                    <input type="email" />
                    <label htmlFor=""></label>
                </div>
                {/* END EMAIL */}
                {/* SUBJECT */}
                <div className="entry">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                {/* END SUBJECT */}
                {/* MESSAGE */}
                <div className="entry">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                {/* END MESSAGE */}
            </form>
        </div>
        </>
    )
}