import Button from 'react-bootstrap/Button';

const Video = () => {
    return (
        <div id="video" className="d-flex flex-column justify-content-evenly align-items-center" style={{ height: "100vh" }}>
            <h2 className="font-weight-bold fs-1">Latest Video</h2>
            <div className="d-flex flex-column align-items-center">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/nNl2rjdJjT8" title="Morning Wars - Runaway (Official Audio)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="mt-4 mb-0 fs-4 fst-italic">Morning Wars - Runaway</p>
                <Button as="a" href="https://www.youtube.com/@morningwars" target="_blank" className="mt-4" variant="primary">View more videos</Button>{' '}
            </div>
        </div>
    )
}

export default Video
