import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { getNews } from "../../_store/news/actions";
import NewsList from "../../_components/NewsList";
import { TextField } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = React.useState(1);

  const dispatch = useDispatch();

  const handleChangePage = (_, newPage) => {
    console.log("new page", newPage);
    setPage(newPage);
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      debouncedLoad();
    }
  }, [query, page]);

  const loadNews = () => {
    dispatch(getNews({ q: query, pageSize: 10, page: page }));
  };

  const data = useSelector((state) => state.news);
  const articles = data ? data.articles : [];
  const totalResults = data ? data.totalResults : 0;
  const count = Math.ceil(totalResults / 10);

  const debouncedLoad = debounce(loadNews, 500);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {articles && articles.length > 0 && (
        <Pagination
          component="div"
          count={count}
          page={page}
          onChange={handleChangePage}
        />
      )}
      <TextField
        label="Search Page"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <NewsList data={articles} />
    </div>
  );
}
