import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilterIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchBar.jss';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <OutlinedInput
        className={classes.input}
        margin="dense"
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton size="small" edge="end">
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
