import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import './Result.css';

import {
  searchAsync,
  selectDictionaryData,
  selectDictionaryLoading,
} from '../../features/dictionary/dictionarySlice';
import { ResultMapping } from './ResultMapping';
import { Box } from '@mui/material';

  interface Params {
    word?: string;
  }

export function Result(): JSX.Element {
  const data = useAppSelector(selectDictionaryData);
  const loading = useAppSelector(selectDictionaryLoading);
  const params: Params = useParams();
  const word = params.word || '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchAsync(word));
  }, [word]);

  return (loading ? <Box className='CircularProgress__Container'><CircularProgress  /></Box> : <ResultMapping data={data} />);
}
