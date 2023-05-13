const MovieCard=()=>{
    return (
        <div className="p-2 rounded shadow w-[300px] text-center flex flex-col items-center justify-center gap-4">
            <img className="w-full rounded" src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" alt="movie_img"></img>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl text-gray-700 font-bold">Avengers: Endgame</h1>
                <p className="text-sm text-gray-500">jeifbbwhjhdbjad jdgbkJBXJAS BJx ,hbaKJchbkjHs cx cbhlahKBLk</p>
                <a className="text-blue-400 hover:text-blue-700" href="https://www.imdb.com/title/tt0499549/">Read more</a>
            </div>
        </div>
    )
}

export default MovieCard