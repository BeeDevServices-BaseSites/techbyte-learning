const Cookies = () => {
    return (
        <div>
            <input type="checkbox" id="showblock"/>
            <div className="slideout">
                <label className="slideout_tab" htmlFor="showblock">
                    <span className="tab_text">
                        <span>Cookie Info</span>
                    </span>
                </label>
                <div className="slideout_content">
                    <div className="push_right">
                        <p className="pst">
                            Psst....<img className="cookie_img" src="https://lordicon.com/icons/wired/flat/2354-cookies.svg" alt="Cookies"/>
                        </p>
                        <p className="cookie">
                            We use Cookies to offer you a better browsing experience, analyse site traffic and personalize content.
                        </p>
                        <p className="cookie">
                            By continuing to browse TechByte Learning you will consent to our use of cookies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cookies;