import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';

const LISTBOX_PADDING = 8;

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

const PopperComponent = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...other }, ref) => {
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    });
    const itemCount = itemData.length;
    const itemSize = 50;
    const height = itemCount > 8 ? 8 * itemSize : itemCount * itemSize;
    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <FixedSizeList
            height={height + LISTBOX_PADDING}
            width="100%"
            itemCount={itemCount}
            itemSize={itemSize}
            itemData={itemData}
            outerElementType={OuterElementType}
            innerElementType="ul"
            overscanCount={5}
          >
            {({ data, index, style }: ListChildComponentProps) => {
              const { props, label, selected, group, key } = data[index];
              const inlineStyle = {
                ...style,
                top: Number(style.top) + LISTBOX_PADDING,
              };
              if (group) {
                return (
                  <ListSubheader key={key} component="div" style={inlineStyle}>
                    {group}
                  </ListSubheader>
                );
              }
              return (
                <li {...props} style={inlineStyle}>
                  <Checkbox checked={selected} sx={{ marginRight: (theme) => theme.spacing(1) }} />
                  {label}
                </li>
              );
            }}
          </FixedSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

interface SelectAutocompleteVirtualizedProps<T> {
  options: T[];
  value?: T[];
  onChange: (value: T[]) => void;
  groupBy?: (option: T) => string;
  getOptionLabel?: (option: T) => string;
  getOptionLabelList?: (option: T) => string;
}

export function SelectAutocompleteVirtualized<T>({
  options,
  value,
  onChange,
  groupBy,
  getOptionLabel,
  getOptionLabelList,
}: SelectAutocompleteVirtualizedProps<T>) {
  const handleChange = (_: any, newValue: T[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      fullWidth
      multiple
      disableCloseOnSelect
      size="small"
      ListboxComponent={ListboxComponent}
      PopperComponent={PopperComponent}
      value={value}
      options={options}
      groupBy={groupBy}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => <TextField {...params} placeholder="Selecione" />}
      renderGroup={(params) => params}
      renderOption={(props, option, { selected }) => ({
        props,
        label: getOptionLabelList ? getOptionLabelList(option) : option,
        selected,
      })}
      ChipProps={{
        sx: {
          background: (theme) => alpha(theme.palette.primary.main, 0.1),
        },
      }}
      onChange={handleChange}
    />
  );
}

SelectAutocompleteVirtualized.defaultProps = {
  value: undefined,
  groupBy: undefined,
  getOptionLabel: undefined,
  getOptionLabelList: undefined,
};
