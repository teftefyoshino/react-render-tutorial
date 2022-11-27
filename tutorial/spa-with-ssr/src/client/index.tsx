import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer, APP_MARKER } from '../view/app-container';

const container = document.getElementById(APP_MARKER);
if (!container) {
    throw new Error();
}
const app = (
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
);
hydrateRoot(container, app);
