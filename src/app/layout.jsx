import StyledComponentsRegistry from './registry';
import Providers from './providers';
import Layout from '../../components/layout';
import '../../styles/globals.css';
import '../../styles/timeLine.css';

export const metadata = {
    title: 'Oualid KHIAL, Full stack developer and tech teacher',
    description: 'Full stack developer portfolio and PhD researcher details.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Providers>
                        <Layout>
                            {children}
                        </Layout>
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
