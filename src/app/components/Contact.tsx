import Button from 'react-bootstrap/Button';

const Merch = () => {
    return (
        <div id="contact" className="d-flex flex-column  align-items-center mt-4">
            <h2 className="font-weight-bold mb-4 fs-1">Contact</h2>
            <div className="d-flex flex-column align-items-center">
                <p className="fs-5 fw-bold">Management, Bookings, Label</p>
                <p className="fst-italic">Independent</p>
                <p>goodmorningwars@gmail.com</p>
            </div>
            <Button className="mt-4" variant="primary">Sign up for mailing list</Button>{' '}
        </div>
    )
}

export default Merch 
