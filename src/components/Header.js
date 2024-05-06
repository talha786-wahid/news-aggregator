import React, { useState, useEffect, useContext } from 'react';
import { Typography, TextField, IconButton, Grid, Button } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

import { apis } from '../api';
import { newsCategories } from '../helpers/data';
import fetchData from '../helpers/fetchData';
import NewsContext from '../contexts/NewsContext';
import CustomizeModal from './CustomizeModal';

function Header({ setSearch, handleSearch, filterSources, setFilterSource }) {
  const newsApi = apis['newsApi'];
  const { sources, setSources, setFilterAuthor, setAuthors } =
    useContext(NewsContext);

  const [modalOpen, setModalOpen] = useState(false);

  let categoryValue = localStorage.getItem('category');
  let fSources = localStorage.getItem('filteredSources');
  const filteredData = JSON.parse(fSources);

  let fAuthors = localStorage.getItem('filteredAuthors');
  const filteredAuthors = JSON.parse(fAuthors);

  const [category, setCategory] = useState(categoryValue || '');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getSources = async () => {
    try {
      const response = await fetchData(
        `${newsApi.url}/top-headlines/sources?apiKey=${newsApi.key}`
      );
      setSources(response?.sources);
    } catch (error) {
      console.log('error', error);
    }
  };
  const getAuthors = async () => {
    try {
      const response = await fetchData(
        `${newsApi.url}/top-headlines?country=us&apiKey=${newsApi.key}`
      );
      setAuthors(response?.articles);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    setFilterSource(filteredData || []);
    setFilterAuthor(filteredAuthors || []);
    getSources();
    getAuthors();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          component="div"
          fontWeight={600}
          sx={{
            '@media (max-width: 600px)': {
              textAlign: 'center',
              mt: 1,
            },
          }}
        >
          News App
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <TextField
          label="Search..."
          variant="outlined"
          size="normal"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        justifyContent="end"
        alignItems="center"
        sx={{
          '@media (max-width: 600px)': {
            justifyContent: 'center',
            mt: 1,
          },
        }}
      >
        <Button
          startIcon={<SettingsIcon />}
          color="primary"
          variant="contained"
          size="large"
          sx={{ height: 55 }}
          onClick={() => setModalOpen(true)}
        >
          Customize
        </Button>
      </Grid>
      <CustomizeModal
        open={modalOpen}
        setOpen={setModalOpen}
        filterSources={filterSources}
        setFilterSource={setFilterSource}
        sources={sources}
        category={category}
        setCategory={setCategory}
        newsCategories={newsCategories}
      />
    </Grid>
  );
}

export default Header;
