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
          <Typography className='Typography__Title'>word: {e.word} phonetic: {e.phonetic} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='Typography__Title'>phonetics</Typography>
          {e.phonetics?.map((phon) => (
            <Card>
              <CardContent>
                <Typography>phonetic-Text: {phon.text}</Typography>
                {phon.audio ? <ReactAudioPlayer src={`${phon.audio}`} controls className='AudioPlayer' /> : <></> }
                <Typography>source-URL: <Link href={`${phon.sourceUrl}`} underline="none">
                  {phon.sourceUrl}
                </Link></Typography>
                <Typography>license</Typography>
                <Typography>license-Name: {phon.license.name}</Typography>
                <Typography>license-URL: <Link href={`${phon.license.url}`} underline="none">
                  {phon.license.url}
                </Link></Typography>
              </CardContent>
            </Card>))}
          <Typography className='Typography__Title'>meanings</Typography>
          {e.meanings?.map((el) => (
            <Card>
              <CardContent>
                <Typography>part of speech: {el.partOfSpeech}</Typography>
                {el.definitions?.map((defin) => (
                  <Card>
                    <CardContent>
                      <Typography>definition: {defin.definition}</Typography>
                      {defin.synonyms.length ?  <Typography>synonyms: {defin.synonyms?.map(
                        (syn, index) => `${index + 1}) ` + `${syn}` + ', ')}</Typography> : <></>}
                      {defin.antonyms.length ?  <Typography>antonyms: {defin.antonyms?.map(
                        (anto, index) => `${index + 1}) ` + `${anto}` + ', ')}</Typography> : <></>}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>))}
          <Typography className='Typography__Title'>license</Typography>
          <Card>
            <CardContent>
              <Typography>license-Name: {e.license.name}</Typography>
              <Typography>license-Url: <Link href={`${e.license.url}`} underline="none">
                {e.license.url}
              </Link></Typography>
            </CardContent>
          </Card>
          <Typography className='Typography__Title'>sourseUrls</Typography>
          <Card>
            <CardContent>
              {e.sourceUrls?.map((url, index) => (<Typography>{index+1}) <Link href={`${url}`} underline="none">
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
