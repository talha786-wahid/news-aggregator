import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, CircularProgress } from '@mui/material';

import Header from './components/Header';
import Filters from './components/Filters';
import NewsCard from './components/NewsCard';

import { apis } from './api';
import fetchData from './helpers/fetchData';
import NewsContext from './contexts/NewsContext';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [filterSources, setFilterSource] = useState([]);

  const newsApi = apis['newsApi'];
  const { setNews, newsLoading, setNewsLoading, filters, setFilters } =
    useContext(NewsContext);

  const getData = async () => {
    console.log('searchText', searchText);
    let categoryValue = localStorage.getItem('category') || '';
    const category = categoryValue ? `?category=${categoryValue}` : '';

    let fSources = localStorage.getItem('filteredSources');
    const parsedSources = JSON.parse(fSources) || [];

    const sourceStr =
      parsedSources.length > 0 ? `?sources=${parsedSources.join(',')}` : '';
    const searchValue = searchText
      ? `?q=${searchText}`
      : category || sourceStr
      ? ''
      : '?q=news';
    const prepareUrl = `${newsApi.url}/${
      !category && !sourceStr ? 'everything' : 'top-headlines'
    }${category}${searchValue}${sourceStr}&apiKey=${newsApi.key}`;

    try {
      const response = await fetchData(prepareUrl);
      setNews(response?.articles || []);
      setFilters({ news: response?.articles || [] });
    } catch (error) {
      console.log('error', error);
    } finally {
      setNewsLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    getData();
  };

  return (
    <Box
      sx={{
        padding: '2rem 6rem',
        '@media (max-width: 768px)': {
          padding: '0',
        },
      }}
    >
      <Header
        search={searchText}
        setSearch={setSearchText}
        handleSearch={handleSearch}
        filterSources={filterSources}
        setFilterSource={setFilterSource}
      />
      <Filters search={searchText} />
      {newsLoading ? (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {filters.news?.length > 0 ? (
            filters.news.map(
              (article) =>
                article.source?.id && (
                  <Grid item xs={12} md={4} lg={3} key={article.id}>
                    <NewsCard data={article} />
                  </Grid>
                )
            )
          ) : (
            <Typography sx={{ textAlign: 'center', m: 2 }} variant="h5">
              No Data
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
}
