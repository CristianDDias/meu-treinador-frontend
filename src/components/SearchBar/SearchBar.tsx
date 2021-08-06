import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilterIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchBar.jss';

interface SearchBarProps {
  placeholder: string;
  onSearch: (search: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <div className={classes.container}>
      <OutlinedInput
        className={classes.input}
        margin="dense"
        value={search}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        endAdornment={
          <InputAdornment position="end">
            <IconButton size="small" edge="end" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <IconButton size="small">
        <FilterIcon />
      </IconButton>
    </div>
  );
};
