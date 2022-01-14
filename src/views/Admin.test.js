import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Admin from './Admin.js';

test('admin should render a button', () => {
  const { container } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  screen.getByText('save');
  expect(container).toMatchSnapshot();
});
