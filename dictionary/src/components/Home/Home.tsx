import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export function Home(): JSX.Element {

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
        sx={{ width: '350px', marginTop: '100px' }}
      />
    </Grid>
  );
}
