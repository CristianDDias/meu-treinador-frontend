import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilterIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    boxShadow: theme.softShadow,
    zIndex: theme.zIndex.appBar,
  },
  input: {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <OutlinedInput
        margin="dense"
        placeholder={placeholder}
        className={classes.input}
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
