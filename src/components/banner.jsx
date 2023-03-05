const Banner = (props) => {
    let title=props.data
    return ( 
        <div className="Banner d-flex align-items-center justify-content-center">
            <div className="Title">
                <h1 className="text-light fw-bolder">{title}</h1>
            </div>
        </div>
     );
}
 
export default Banner;