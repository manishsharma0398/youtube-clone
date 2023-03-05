import { useContext } from "react";
import SearchResultCard from "../../components/search-result-card/SearchResultCard";
import YoutubeContext from "../../context/youtubeApi";
import "./Search.scss";

const Search = () => {
  const { searchResults } = useContext(YoutubeContext);

  return (
    <div className="search-results">
      {searchResults?.contents?.length &&
        searchResults?.contents?.map((searchResult, i) => (
          <SearchResultCard data={searchResult} key={i} />
        ))}
    </div>
  );
};
export default Search;
