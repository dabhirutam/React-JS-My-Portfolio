
const Heading = () => {
    return (
        <div className="position-relative">
            <p className="position-absolute top-50 start-50 translate-middle tls-3 z-n1 fw-medium" style={{WebkitTextStroke: '5px #313131', fontSize: '7vw', color: 'transparent', letterSpacing: '0.8rem'
            }}>ABOUT</p>
            <h2 className="d-flex align-items-center justify-content-center column-gap-1">
                <span className="d-inline-block pt-1 px-3 bg-danger"></span>
                ABOUT US
                <span className="d-inline-block pt-1 px-3 bg-danger"></span>
            </h2>
        </div>
    )
}

export default Heading;