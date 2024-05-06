import React, { useState } from 'react';

import NewsContext from './NewsContext';

export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  const [sources, setSources] = useState([]);
  const [filterAuthors, setFilterAuthor] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [filters, setFilters] = useState({
    date: '',
    category: '',
    source: '',
    news: [],
  });

  const contextValue = {
    news,
    setNews,
    newsLoading,
    setNewsLoading,
    filters,
    setFilters,
    sources,
    setSources,
    authors,
    setAuthors,
    filterAuthors,
    setFilterAuthor,
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};
