import seasonInfo from "../resource/season.json";

export const Header = () => {
    return (
        <h1>{`Battle pass calculator for Valorant Episode ${seasonInfo.currentEpisode} Act ${seasonInfo.currentAct}`}</h1>
    );
};
