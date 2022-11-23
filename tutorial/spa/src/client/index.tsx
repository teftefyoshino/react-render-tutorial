import { createRoot } from 'react-dom/client';
import { AppContainer, APP_MARKER } from '../view/app-container';

const container = document.getElementById(APP_MARKER);
if (!container) {
    throw new Error();
}
const root = createRoot(container);
root.render(<AppContainer />);
