import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={movie.data.movie.large_cover_image}></img>
          <h2>title:{movie.data.movie.title}</h2>
          <h2>url:{movie.data.movie.url}</h2>
          <h2>year:{movie.data.movie.year}</h2>
          <h2>rating:{movie.data.movie.rating}</h2>
          <h2>runtime:{movie.data.movie.runtime}</h2>
          <h3>description:{movie.data.movie.description_full}</h3>
          <Link to="/">뒤로가기</Link>
        </div>
      )}
    </div>
  );
}
export default Detail;
