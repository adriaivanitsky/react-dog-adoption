import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditDog from './EditDog.js';

test('editdog should render dog information to a form', async () => {
  const { container } = render(
    <MemoryRouter>
      <EditDog match={{ params: { id: 5 } }} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('pumpkin');
  expect(container).toMatchSnapshot();
});
