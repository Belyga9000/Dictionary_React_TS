import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';

export function Home(): JSX.Element {
  const [wordInput, setWordInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(wordInput);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [wordInput]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <TextField
        id="word-input"
        label="Search"
        autoComplete="off"
        autoSave="off"
        variant="outlined"
        onChange={(e) => setWordInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') navigate(wordInput);
        }}
        sx={{ width: '350px', marginTop: '100px' }}
      />
    </Grid>
  );
}
