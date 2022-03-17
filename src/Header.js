
function Header(props) {

    return(
        <header>
            <div className="wrapper">
                <div className="titleContainer">
                    <h1>🐐</h1>
                    <div className="title">
                        <h1>Climbing</h1>
                        <h1>Tracker</h1>

                    </div>
                </div>
                <div className="imgContainer">
                    <img src={props.photoSource} alt="A climbing sheep" />
                </div>
            </div>
        </header>
    )
}

export default Header