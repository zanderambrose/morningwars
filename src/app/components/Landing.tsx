const Landing = () => {
    const containerStyle = {
        // height: `calc(100vh - 74px)`,
        height: `100vh`,
    };

    return (
        <div id="home" className="d-flex align-items-center" style={containerStyle}>
            <div className="d-flex justify-content-evenly" style={{ width: "100%" }}>
                <img
                    src="/morningwarslogo.jpeg"
                    width="500"
                    height="500"
                    className="d-inline-block align-top"
                    alt="Album Cover"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className="font-weight-bold">Prospect Gallery</h2>
                    <p>Release Date</p>
                    <p>Pre-Save Here</p>
                </div>
            </div>
        </div>
    )
}

export default Landing
