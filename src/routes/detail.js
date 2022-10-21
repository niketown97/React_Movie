import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import detail from "../Detail.module.css";
function Detail(){
    const {id}=useParams();
    const [movie,setMovie] = useState({});
    const [loading,setLoading] = useState(true);
    const getMovie = async () => {
        const json = await(await(fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        setMovie(json.data.movie);
        setLoading(false);
        
    }
    useEffect(() => {
        getMovie();
    },[])
    return (
        <div>
            {loading ? <p className={detail.loading}>정보 불러오는 중 ...</p> : (
                <div className={detail.wrap}>
                    <img className={detail.movieImg}src={movie.large_cover_image} />
                    <div>
                        <h1 className={detail.detail_title}>{movie.title}</h1>
                        <ul>
                            {(movie.genres).map((g) => <li key={g}>{g}</li>)}
                        </ul>
                    </div>
                    <p>{movie.description_full}</p>
                </div>
            )}
        </div>)

}
export default Detail;