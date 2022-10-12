import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const dataAPI = axios.create();

export const mockDataResponse = [
  {
    'word': 'extinguisher',
    'phonetics': [],
    'meanings': [
      {
        'partOfSpeech': 'noun',
        'definitions': [
          {
            'definition': 'One who, or that which, extinguishes something.',
            'synonyms': [],
            'antonyms': []
          }
        ],
        'synonyms': [
          'extincteur'
        ],
        'antonyms': [
          'generator'
        ]
      }
    ],
    'license': {
      'name': 'CC BY-SA 3.0',
      'url': 'https://creativecommons.org/licenses/by-sa/3.0'
    },
    'sourceUrls': [
      'https://en.wiktionary.org/wiki/extinguisher'
    ]
  }
];

export const mockResponse = () => {
  const mock = new  MockAdapter(dataAPI);

  mock.onGet('/').reply(200, mockDataResponse);
};
