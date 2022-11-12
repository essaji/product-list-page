import Head from 'next/head'
import useIndex from "../hooks/useIndex";
import Spinner from "../components/Spinner/Spinner";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import FilterInput from "../components/FilterInput/FilterInput";

export default function Home() {
  const { movieData, loading, fetchPrevPage, fetchNextPage, onFilterMovies } = useIndex()

  const renderProducts = () => {

    if (loading) return <Spinner />

    return (
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex justify-between items-end">
          <FilterInput onSearchQueryChange={onFilterMovies} />
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
