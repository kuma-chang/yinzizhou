import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch the language
  };

  return (
    <Box 
        sx={{ 
          minWidth: 230,
          position: 'absolute',
          bottom: 16,
          padding: '8px',
        }}
    >
      <FormControl fullWidth>
        <InputLabel id="language-picker-label">{t("language")}</InputLabel>
        <Select
          labelId="language-picker-label"
          id="language-picker"
          value={i18n.language}
          defaultValue={i18n.language}
          label="language"
          onChange={(e) => changeLanguage(e.target.value)} 
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"zh-TW"}>中文（繁體）</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguagePicker;
