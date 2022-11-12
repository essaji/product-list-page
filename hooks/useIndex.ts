import { useQuery, gql } from "@apollo/client";
import {useState} from "react";

const MOVIES_QUERY = gql`
  query fetchMovies ($page: Int, $sortBy: String) {
      discoverMovies (page: $page sortBy: $sortBy) @rest(path: "discover/movie?page={args.page}&sort_by={args.sortBy}") {
          page
          total_pages
          total_results
          results {
              id
              title
              overview
              poster_path
              release_date
              vote_average
          }
      }
  }
`

const SEARCH_MOVIE = gql`
  query searchMovies ($query: String $page: Int) {
      discoverMovies(query: $query page: $page) @rest(path: "search/movie?query={args.query}&page={args.page}") {
          page
          total_pages
          total_results
          results {
              id
              title
              overview
              poster_path
              release_date
              vote_average
          }
      }
  }
`

const useIndex = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLgTwoCols, setIsLgTwoCols] = useState(false)
  const [sortBy, setSortBy] = useState("popularity.desc")
  const [movieData, setMovieData] = useState({
    movies: [],
    page: 0,
    totalPages: 0
  })
  const onMovieData = (data: any) => {
    const movies = data?.discoverMovies?.results.map((r: any) => ({ ...r, vote_average: Math.ceil(r.vote_average / 2) }))
    const page = data?.discoverMovies.page
    const totalPages = data?.discoverMovies.total_pages
    setMovieData({ movies, page, totalPages })
  }
  const { loading } = useQuery(MOVIES_QUERY, {
    variables: { page: currentPage, sortBy },
    skip: !!searchQuery,
    onCompleted: onMovieData
  })
  const { loading: searchQueryLoading } = useQuery(SEARCH_MOVIE, {
    variables: { query: searchQuery, page: currentPage },
    skip: !searchQuery,
    onCompleted: onMovieData
  })

  return {
    loading: loading || searchQueryLoading,
    movieData,
    fetchNextPage: () => setCurrentPage(page => page + 1),
    fetchPrevPage: () => setCurrentPage(page => page - 1),
    onFilterMovies: (query: string) => setSearchQuery(query),
    onToggleColumns: () => setIsLgTwoCols(v => !v),
    onSortBy: (sortByVal: string) => {
      setSearchQuery("")
      setSortBy(sortByVal)
    },
    isLgTwoCols
  }
}

export default useIndex