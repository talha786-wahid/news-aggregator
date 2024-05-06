import React, { useState, useContext } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SelectField from './SelectField';
import { newsCategories } from '../helpers/data';
import NewsContext from '../contexts/NewsContext';
import fetchData from '../helpers/fetchData';
import { apis } from '../api';

function Filters({ search }) {
  const newsApi = apis['newsApi'];
  const [date, setDate] = React.useState(null);
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const { news, sources, setFilters, setNewsLoading } = useContext(NewsContext);

  const getFilteredData = async (url) => {
    setNewsLoading(true);
    try {
      const response = await fetchData(url);
      return response?.articles || [];
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    } finally {
      setNewsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (date || category || source) {
      let searchParams = new URLSearchParams();
      searchParams.append('apiKey', newsApi.key);

      if (search !== '') {
        searchParams.append('q', search);
      } else if (!category && !source) {
        searchParams.append('q', 'news');
      }

      if (category) {
        searchParams.append('category', category);
      }

      if (source) {
        searchParams.append('sources', source);
      }

      const preparedUrl = `${
        newsApi.url
      }/top-headlines?${searchParams.toString()}`;

      try {
        const res = await getFilteredData(preparedUrl);
        setFilters({
          date: date ? date.format('MM-DD-YYYY') : '',
          category: category && category,
          source: source && source,
          news: res?.filter((item) =>
            date
              ? new Date(item.publishedAt).toLocaleDateString() ===
                date.format('M/D/YYYY')
              : true
          ),
        });
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    }
  };

  const clearFilter = () => {
    setFilters({
      date: '',
      category: '',
      source: '',
    });
    setDate(null);
    setCategory('');
    setSource('');
    setFilters({ news: news });
  };
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5" component="h6" fontWeight={600}>
        Filters
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          sx={{ m: '7px 7px 0 0' }}
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <SelectField
        name="Select Source"
        data={sources}
        value={source}
        setValue={setSource}
      />
      <SelectField
        name="Select Category"
        data={newsCategories}
        value={category}
        setValue={setCategory}
      />
      <Button
        startIcon={<FilterListIcon />}
        color="primary"
        variant="outlined"
        size="large"
        sx={{ height: 55 }}
        onClick={handleSubmit}
      >
        Filter
      </Button>

      <Button
        startIcon={<ClearIcon />}
        color="primary"
        variant="outlined"
        size="large"
        sx={{ m: '7px', height: 55 }}
        onClick={clearFilter}
      >
        Clear
      </Button>
    </Box>
  );
}

export default Filters;
