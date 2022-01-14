import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs.js';

test('should render a player to the page', async () => {
  const container = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('gertie', 'blue');
  expect(container).toMatchSnapshot();
});
