export interface DictionaryResponseData {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: License;
  sourceUrls: string[];
}

export interface Phonetics {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definitions {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: sting;
}

export interface License {
  name: string;
  url: string;
}
