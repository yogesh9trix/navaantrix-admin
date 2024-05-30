/** @format */

import { Box, Typography } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function Logo() {
  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
      <EqualizerIcon fontSize="medium" sx={{ color: 'yellow' }} />
      <Typography
        sx={{
          fontFamily: 'Hachi',
        }}
      >
        DataRipper
      </Typography>
    </Box>
  );
}

export default Logo;
