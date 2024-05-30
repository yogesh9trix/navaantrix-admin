/** @format */

import {
  Box,
  Container,
  InputAdornment,
  Button,
  Paper,
  TextField,
  styled,
  Typography,
} from '@mui/material';

import Symbol from '../../../Assets/SVG/symbol';
import {
  AccountCircle,
  Https,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';
import { isEmpty } from '../../../Util/utils';

const LoginContainer = styled(Paper, { label: 'loginPaper' })({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
  padding: 32,
});

function Login() {
  const [viewPassword, setViewPassword] = useState(false);
  const [password, setPassword] = useState({ value: '', error: '' });
  const [username, setUsername] = useState({ value: '', error: '' });

  const [viewportHeight] = useState(window.innerHeight);

  const handleLoginBtn = function () {
    if (isEmpty(password.value)) {
      setPassword({ ...password, error: 'Empty password!' });
    }
    if (isEmpty(username.value)) {
      setUsername({ ...username, error: 'Empty username!' });
    }
  };

  const HelperText = function ({ text }) {
    return (
      <Typography variant="p" color="error">
        {text}
      </Typography>
    );
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: { xs: 'start', md: 'center' },
        justifyContent: 'center',
        mt: { xs: 4 },
        height: viewportHeight,
      }}
    >
      <LoginContainer elevation={3}>
        <Box>
          <Symbol width="40" height="40" color="#fafafa" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            autoComplete: 'off',
          }}
        >
          <TextField
            required
            type="text"
            label="username"
            variant="outlined"
            autoComplete="off"
            value={username.value}
            helperText={<HelperText text={username.error} />}
            error={Boolean(username.error)}
            onChange={(event) =>
              setUsername({ value: event.target.value, error: '' })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            type={viewPassword ? 'text' : 'password'}
            label="password"
            variant="outlined"
            autoComplete="off"
            value={password.value}
            helperText={password.error && <HelperText text={password.error} />}
            error={Boolean(password.error)}
            onChange={(event) =>
              setPassword({ value: event.target.value, error: '' })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Https />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  onClick={() => setViewPassword(!viewPassword)}
                  sx={{ cursor: 'pointer' }}
                  position="end"
                >
                  {viewPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />

          <Button sx={{ mt: 2 }} variant="contained" onClick={handleLoginBtn}>
            Login
          </Button>
        </Box>
      </LoginContainer>
    </Container>
  );
}

export default Login;
