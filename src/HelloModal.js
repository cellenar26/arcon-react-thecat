import "./HelloModal.scss"

export default function HelloModal({onClose}) {
    return (
        <div className="HelloModal">
            <div className="content">
                <h3>Modal</h3>
                <p>this is hello modal</p>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}