import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({
  name,
  data = [],
  value,
  setValue,
  width = null,
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const getOptionLabel = (item) => {
    return item?.id && item?.name
      ? item.name
      : item?.category || item?.source?.name || '';
  };

  const getOptionValue = (item) => {
    return item?.id && item?.name
      ? item.id
      : item?.value || item?.source?.id || '';
  };

  return (
    <FormControl sx={{ m: '7px 7px 0 0', minWidth: 200, width: width }}>
      <InputLabel id="demo-simple-select-autowidth-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={name}
      >
        <MenuItem value="">
          <em>Select</em>
        </MenuItem>
        {data.map((item) => {
          return item.value || item.source?.id || (item.id && item.name) ? (
            <MenuItem key={item.id || item.title} value={getOptionValue(item)}>
              {getOptionLabel(item)}
            </MenuItem>
          ) : null;
        })}
      </Select>
    </FormControl>
  );
}
