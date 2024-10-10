import AnnounceBanner from "../../Components/AnnounceBanner";
import Posts from "../../Components/Posts";

import './styles.css';

const Home = () => {
    return (
        <div className="home">
            <AnnounceBanner>This website is under development</AnnounceBanner>
            <h1>Welcome to Spilum.Net</h1>
            <p>A sandbox for exploring programming and experimenting.</p>
            <Posts />
        </div>
    )
}

export default Home;