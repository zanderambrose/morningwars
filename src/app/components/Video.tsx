import Button from 'react-bootstrap/Button';

const Video = () => {
    return (
        <div id="video" className="d-flex flex-column justify-content-evenly align-items-center" style={{ height: "100vh" }}>
            <h2 className="font-weight-bold">Latest Video</h2>
            <div className="d-flex flex-column align-items-center">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/nNl2rjdJjT8" title="Morning Wars - Runaway (Official Audio)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h4 className="mt-4 mb-0">Morning Wars - Runaway</h4>
                <Button as="a" href="https://www.youtube.com/@morningwars" target="_blank" className="mt-4" variant="primary">View more videos</Button>{' '}
            </div>
        </div>
    )
}

export default Video
