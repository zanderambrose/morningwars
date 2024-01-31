import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Merch = () => {
    return (
        <div id="merch" className="d-flex flex-column  align-items-center">
            <h2 className="font-weight-bold mb-4 fs-1">Merch</h2>
            <div className="d-flex justify-content-around align-items-center mt-4 w-100">
                <FontAwesomeIcon icon={faImage} size="6x" />
                <FontAwesomeIcon icon={faImage} size="6x" />
                <FontAwesomeIcon icon={faImage} size="6x" />
            </div>
        </div>
    )
}

export default Merch 
