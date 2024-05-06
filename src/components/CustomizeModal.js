import React, { useContext } from 'react';

import {
  Box,
  Typography,
  Modal,
  Grid,
  Select,
  Chip,
  Button,
} from '@mui/material';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import SelectField from './SelectField';
import NewsContext from '../contexts/NewsContext';

function CustomizeModal({
  open,
  setOpen,
  filterSources,
  setFilterSource,
  newsCategories,
  category,
  setCategory,
}) {
  const { sources, filterAuthors, setFilterAuthor, authors } =
    useContext(NewsContext);

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
    setOpen(false);
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
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            '@media (max-width: 600px)': {
              pl: '20px',
            },
          }}
        >
          Customize News Feed
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 1,
            '@media (max-width: 600px)': {
              display: 'block',
              p: '0 20px',
            },
          }}
        >
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
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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

        <Box
          sx={{
            mt: 3,
            float: 'right',
            '@media (max-width: 600px)': {
              pr: '20px',
            },
          }}
        >
          <Button
            color="error"
            variant="contained"
            size="large"
            sx={{ height: 55, mr: 2 }}
            onClick={() => setOpen(false)}
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
  );
}

export default CustomizeModal;
