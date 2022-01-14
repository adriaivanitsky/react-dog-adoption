import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogInfo from './DogInfo.js';

test('should render a dog and its stats to the page', async () => {
  const container = render(
    <MemoryRouter>
      <DogInfo match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('gertie', 'the best girl in the whole world');
  expect(container).toMatchSnapshot();
});
