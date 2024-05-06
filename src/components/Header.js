import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Modal,
  Grid,
  Select,
  Chip,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import SelectField from './SelectField';
import { newsCategories } from '../helpers/data';
import { apis } from '../api';
import fetchData from '../helpers/fetchData';
import NewsContext from '../contexts/NewsContext';

function Header({ setSearch, handleSearch, filterSources, setFilterSource }) {
  const newsApi = apis['newsApi'];
  const {
    sources,
    setSources,
    filterAuthors,
    setFilterAuthor,
    authors,
    setAuthors,
  } = useContext(NewsContext);
  const [modalOpen, setModalOpen] = useState(false);

  let categoryValue = localStorage.getItem('category');
  let fSources = localStorage.getItem('filteredSources');
  const filteredData = JSON.parse(fSources);

  let fAuthors = localStorage.getItem('filteredAuthors');
  const filteredAuthors = JSON.parse(fAuthors);

  const [category, setCategory] = useState(categoryValue || '');
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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

  const handleChange = (event, setValue) => {
    const value = event.target.value;
    setValue(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = () => {
    localStorage.setItem('category', category || '');
    localStorage.setItem(
      'filteredAuthors',
      JSON.stringify(filterAuthors) || ''
    );
    localStorage.setItem(
      'filteredSources',
      JSON.stringify(filterSources) || ''
    );

    setModalOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography variant="h5" component="div" fontWeight={600}>
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
      >
        <SettingsIcon onClick={handleOpenModal}>
          <span>Menu Icon</span>
        </SettingsIcon>
      </Grid>
      {/* Modal Button */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Customize News Feed
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item md={12} sm={12}>
              <FormControl sx={{ mt: '7px', width: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">
                  Select Sources
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={filterSources}
                  onChange={(e) => handleChange(e, setFilterSource)}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {sources.map((source) => (
                    <MenuItem key={source.id} value={source.id}>
                      {source.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12}>
              <FormControl sx={{ mt: '7px', width: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">
                  Select Authors
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={filterAuthors}
                  onChange={(e) => handleChange(e, setFilterAuthor)}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {authors.map((a) => {
                    let author = a?.author && a?.author;
                    return (
                      <MenuItem key={author} value={author}>
                        {author}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12}>
              <SelectField
                width="100%"
                name="Category"
                data={newsCategories}
                value={category}
                setValue={setCategory}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, float: 'right' }}>
            <Button
              color="error"
              variant="contained"
              size="large"
              sx={{ height: 55, mr: 2 }}
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="large"
              sx={{ height: 55 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default Header;
