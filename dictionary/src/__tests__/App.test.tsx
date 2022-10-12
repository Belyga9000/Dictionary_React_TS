import { render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

type TestElement = Document | Element | Window | Node;

const wrapper = (someRoute: string = '/') =>(
  <MemoryRouter initialEntries={[someRoute]}>
    <App />
  </MemoryRouter>);

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

it('renders search bar', () => {
  render(wrapper());
  expect(screen.getByLabelText('Search')).toBeInTheDocument();
});

it('input works', () => {
  render(wrapper());
  const input = screen.getByLabelText('Search');
  fireEvent.change(input, { target: { value: 'cat' }});
  expect(hasInputValue(input, 'cat')).toBe(true);
  expect(screen.getByLabelText('Search')).toBeInTheDocument();
});


