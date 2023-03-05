import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import YoutubeContext from "../../context/youtubeApi";

import SearchResultCard from "../../components/search-result-card/SearchResultCard";

import "./Search.scss";
import Spinner from "../../components/spinner/Spinner";

const Search = () => {
  const { searchResults, searchYoutubeVideos, isLoading } =
    useContext(YoutubeContext);

  const searchTerm = useParams().searchTerm;

  useEffect(() => {
    searchYoutubeVideos(searchTerm);
  }, [searchTerm]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="search-results">
      {searchResults?.contents?.length &&
        searchResults?.contents?.map((searchResult, i) => (
          <SearchResultCard data={searchResult} key={i} />
        ))}
    </div>
  );
};
export default Search;
