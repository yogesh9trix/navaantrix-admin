/** @format */

import { useRef } from 'react';
import { Autocomplete, Box, Chip, TextField, Tooltip } from '@mui/material';

function MultiSelectBox(props) {
  const {
    variant,
    selectedList,
    handleChange,
    handleClose,
    selectList,
    placeholder,
    selectAllHandler,
    width = '250px',
  } = props;
  const searchInputRef = useRef();

  return (
    <Box
      label="multiselect-wrapper"
      sx={{ display: 'flex', gap: 1, width: { xs: '100%', sm: width } }}
    >
      <Autocomplete
        value={selectedList}
        options={selectList}
        onBlur={handleClose}
        onChange={(event, value, reason) => {
          if (reason === 'clear') {
            selectAllHandler(false);
          } else {
            searchInputRef?.current.focus();
            handleChange(event, value, reason);
          }
        }}
        getLimitTagsText={(more) => `+${more}`}
        loading={true}
        disableCloseOnSelect
        multiple
        limitTags={1}
        clearText="Clear All"
        sx={{ width: '100%' }}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          } else {
            const key = Object.keys(option)[0];
            return option[key];
          }
        }}
        renderInput={(params) => (
          <TextField
            inputRef={searchInputRef}
            {...params}
            size="small"
            variant={variant || 'filled'}
            label={placeholder}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              {key}
            </li>
          );
        }}
        renderTags={(options, getTagProps) => {
          return options.map((option, index) => {
            const { key, ...optionProps } = getTagProps({ index });
            let chipText = option;
            if (typeof option !== 'string') {
              chipText = Object.values(option)[0];
            }

            return (
              <Tooltip key={index} title={chipText}>
                <Chip
                  size="small"
                  {...optionProps}
                  label={
                    chipText.length > 10
                      ? chipText.slice(0, 7) + '..'
                      : chipText
                  }
                />
              </Tooltip>
            );
          });
        }}
      />
    </Box>
  );
}

export default MultiSelectBox;
