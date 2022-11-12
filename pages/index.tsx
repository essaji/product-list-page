import Head from 'next/head'
import Image from 'next/image'
import useIndex from "../hooks/useIndex";
import Spinner from "../components/Spinner/Spinner";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import FilterInput from "../components/FilterInput/FilterInput";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";

export default function Home() {
  const { movieData, loading, fetchPrevPage, fetchNextPage, onFilterMovies, isLgTwoCols, onToggleColumns, onSortBy } = useIndex()
  const renderProducts = () => {

    if (loading) return <Spinner />

    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 ${isLgTwoCols ? "lg:grid-cols-2" : "lg:grid-cols-4"} gap-2 md:gap-8 py-4`}>
        {movieData.movies.map((movie: any) => {
          return <ProductCard key={movie.id} imageUrl={movie.poster_path} title={movie.title} date={movie.release_date} starCount={movie.vote_average} />
        })}
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Product listing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <div className="container lg:my-12 mx-auto px-4">
        <Image src="https://placehold.jp/800x200.png" height={200} width={800} alt="" className="m-auto py-4" />
        <div className="flex justify-center md:justify-between flex-col md:flex-row items-center gap-4">
          <FilterInput onSearchQueryChange={onFilterMovies} />
          <Select onChange={onSortBy} />
        </div>
        <div className="flex justify-center md:justify-end lg:justify-between items-center pt-4 lg:py-4" >
          <div className="hidden lg:flex" >
            <Button onClick={onToggleColumns}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 0H5v14h4V5zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5zm6 0h-4v14h4V5z" fill="white"/>
              </svg>
            </Button>
          </div>
          <Pagination
            currentPage={movieData.page}
            onClickNext={fetchNextPage}
            onClickPrev={fetchPrevPage}
            totalPages={movieData.totalPages}
          />
        </div>
        {renderProducts()}
      </div>
    </div>
  )
}
