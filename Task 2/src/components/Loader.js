const Loader = ({ show }) => {
    return (
        (show) ?
            <div className="loader">
            <Loader
                type="Tailspin"
                color="red"
                height={100}
                width={100}
                timeout={10000}
/>;
            </div> : ""
    )
}
export default Loader;