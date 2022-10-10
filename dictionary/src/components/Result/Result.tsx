import {
  Accordion,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  searchAsync,
  selectDictionaryData,
} from '../../features/dictionary/dictionarySlice';

  interface Params {
    word?: string;
  }

export const Result = (): JSX.Element => {
  const data = useAppSelector(selectDictionaryData);
  const params: Params = useParams();
  const word = params.word || '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchAsync(word));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [word]);

  return (
    <Grid>
      {data?.map((e, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`{${index}-content`}
            id={`{${index}-header`}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};
