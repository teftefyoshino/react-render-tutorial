import { StaticRouter } from 'react-router-dom/server';
import { AppContainer } from '../view/app-container';

export function AppOnServerSide(url: string) {
    return (
        <StaticRouter location={url}>
            <AppContainer />
        </StaticRouter>
    );
}
