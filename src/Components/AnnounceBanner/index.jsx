import './styles.css';


const AnnounceBanner = (props) => {
    return (
        <div className="announce">
            <p>ANNOUNCEMENT</p>
            <h1>{props.children}</h1>
        </div>
    )
}

export default AnnounceBanner;