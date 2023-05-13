import MovieCard from "./MovieCard"

export const Movielist=()=>{
    return (
        <div>
            <h1 className="text-4xl font-semibold text-gray-500 text-center">Movie List</h1>
            <div className="flex items-center gap-3 justify-evenly flex-wrap">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    )
}