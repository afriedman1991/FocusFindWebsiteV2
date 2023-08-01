jest.mock('lottie-react');

(global as any).IntersectionObserver = class IntersectionObserver {
    observe() { /* ... */ }
    unobserve() { /* ... */ }
    disconnect() { /* ... */ }
};
  
  

import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('it shows the loading state and then renders the main content', async () => {
    render(<App />);

    // Check that the loading component is in the document
    expect(screen.getByTestId('loading-page')).toBeInTheDocument();

    // Wait fort 3 seconds and check that the loading component is removed
    await waitFor(() => {
        expect(screen.queryByTestId('loading-page')).not.toBeInTheDocument();
    }, { timeout: 3500 });

    // Additional assertions to check main content
    expect(screen.getByText("About Focus Find")).toBeInTheDocument();
});
