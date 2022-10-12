import {
  Accordion,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DictionaryResponseData } from '../../types/interface.d';
import { NotFound } from './NotFound';
import ReactAudioPlayer from 'react-audio-player';
import './ResultMapping.css';

interface Props {
    data: DictionaryResponseData[] | null
}

export function ResultMapping(props: Props): JSX.Element {
  return (
    <Grid className='Accordion__Container'> {props.data ? props.data?.map((e, index) => (
      <Accordion key={index} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${index}-content`}
          id={`${index}-header`}
        >
          <Typography>{index+1}) Word: {e.word}. Definition: {e.meanings[0].definitions[0].definition} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {e.phonetic ? (<Typography>Phonetic:{e.phonetic} </Typography>) : <></>}
          {e.phonetics.length ? (<Typography className='Typography__Title'>phonetics</Typography>) : <></>}
          {e.phonetics?.map((phon, index) => (
            <Card key={phon.text + index}>
              <CardContent>
                <Typography>Phonetic-Text: {phon.text}</Typography>
                {phon.audio ? <ReactAudioPlayer src={`${phon.audio}`} controls className='AudioPlayer' /> : <></> }
                {phon.sourceUrl ? (<Typography>Source-URL: <Link href={`${phon.sourceUrl}`} underline="none">
                  {phon.sourceUrl}
                </Link></Typography>) : <></>}
                {phon.license ? (<>
                  <Typography>License-Name: {phon.license.name}</Typography>
                  <Typography>License-URL: <Link href={`${phon.license.url}`} underline="none">
                    {phon.license.url}
                  </Link></Typography></>) : <></>}
              </CardContent>
            </Card>))}
          <Typography className='Typography__Title'>meanings</Typography>
          {e.meanings?.map((el, index) => (
            <Card key={el.partOfSpeech + index}>
              <CardContent>
                <Typography>Part of speech: {el.partOfSpeech}</Typography>
                {el.definitions?.map((defin) => (
                  <Card key={defin.definition}>
                    <CardContent>
                      <Typography>Definition: {defin.definition}</Typography>
                      {defin.synonyms.length ?  <Typography>Synonyms: {defin.synonyms?.map(
                        (syn, index) => `${index + 1}) ` + `${syn}` + ', ')}</Typography> : <></>}
                      {defin.antonyms.length ?  <Typography>Antonyms: {defin.antonyms?.map(
                        (anto, index) => `${index + 1}) ` + `${anto}` + ', ')}</Typography> : <></>}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>))}
          <Typography className='Typography__Title'>license</Typography>
          <Card>
            <CardContent>
              <Typography>License-Name: {e.license.name}</Typography>
              <Typography>License-Url: <Link href={`${e.license.url}`} underline="none">
                {e.license.url}
              </Link></Typography>
            </CardContent>
          </Card>
          <Typography className='Typography__Title'>SourseUrls</Typography>
          <Card>
            <CardContent>
              {e.sourceUrls?.map((url, index) => (<Typography key={url}>{index+1}) <Link href={`${url}`} underline="none">
                {url}
              </Link></Typography>))}
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    )): <NotFound />}
    </Grid>
  );
}
