jest.mock('lottie-react');

import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    test('it shows the loading state and then renders the main content', async () => {
        render(<App />);

        // Check that the loading component is in the document
        expect(screen.getByTestId('loading-page')).toBeInTheDocument();

        // Wait fort 3 seconds and check that the loading component is removed
        await waitFor(() => {
            expect(screen.queryByTestId('loading-page')).not.toBeInTheDocument();
        }, { timeout: 3500 });

        // Additional assertions to check main content
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('about')).toBeInTheDocument();
        expect(screen.getByTestId('features')).toBeInTheDocument();
        expect(screen.getByTestId('media')).toBeInTheDocument();
        expect(screen.getByTestId('stores')).toBeInTheDocument();
        expect(screen.getByTestId('press kit')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
