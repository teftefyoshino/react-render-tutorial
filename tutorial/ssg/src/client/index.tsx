import { hydrateRoot } from 'react-dom/client';
import { App, APP_MARKER } from '../view/app';

const container = document.getElementById(APP_MARKER);
if (!container) {
    throw new Error();
}

hydrateRoot(container, <App />);
