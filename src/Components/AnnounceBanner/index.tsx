type AnnounceBannerProps = {
    children: React.ReactNode;
}

const AnnounceBanner: React.FC<AnnounceBannerProps> = (props) => {
    return (
        <div className="announce">
            <p>ANNOUNCEMENT</p>
            <h1>{props.children}</h1>
        </div>
    )
}

export default AnnounceBanner;