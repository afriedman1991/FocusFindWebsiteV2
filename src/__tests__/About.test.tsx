import { render, screen } from '@testing-library/react';
import { links as readOnlyLinks, socialLinks as readOnlySocialLinks } from '../../__mocks__/mockData.ts';
import About from '../components/About';

const links = [...readOnlyLinks];
const socialLinks = [...readOnlySocialLinks];

describe('About component', () => {
    test('it receives and renders the correct links and socialLinks props', () => {
        render(<About links={links} socialLinks={socialLinks} />);

        // Check if all the links are rendered correctly
        links.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.name });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', link.href);
        });

        // Check if all the social links are rendered correctly
        socialLinks.forEach(socialLink => {
            const socialLinkElement = screen.getByRole('img', { name: socialLink.alt });
            expect(socialLinkElement).toBeInTheDocument();
            expect(socialLinkElement).toHaveAttribute('src', socialLink.source);
            expect(socialLinkElement).toHaveAttribute('alt', socialLink.alt);

            const anchorElement = screen.getByRole('link', { name: socialLink.alt });
            expect(anchorElement).toHaveAttribute('href', socialLink.href);
        });
    });
});
