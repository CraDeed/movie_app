import React, { useEffect } from "react";
import "./Detail.css";

function Detail({ history, location }) {
    useEffect(() => {
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }
    }, [location, history]);

    if (location.state) {
        const { year, title, summary, large_poster, genres } = location.state;
        return (
            <div className="detail_movie">
                <img src={large_poster} alt={title} title={title} />
                <div className="detail_data">
                    <h3 className="detail_title">{title}</h3>
                    <h5 className="detail_year">{year}</h5>
                    <div className="mdetail_genres">
                        {genres.map((genre, index) => (
                            <div key={index} className="genres__genre">
                                {genre}
                            </div>
                        ))}
                    </div>
                    <p className="detail_summary">{summary}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Detail;
