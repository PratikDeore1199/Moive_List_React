const MovieCard=(props)=>{
    return (
        <div className="p-2 rounded shadow w-[300px] text-center flex flex-col items-center justify-center gap-4">
            <img className="w-full rounded" src={props.movie.imgURL} alt="movie_img"></img>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl text-gray-700 font-bold">{props.movie.title}</h1>
                <p className="text-sm text-gray-500">{props.movie.description}</p>
                <a className="text-blue-400 hover:text-blue-700" href={props.movie.imdbLink}>Read more</a>
            </div>
        </div>
    )
}

export default MovieCard