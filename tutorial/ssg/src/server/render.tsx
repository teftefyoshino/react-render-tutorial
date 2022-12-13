import { renderToString } from 'react-dom/server';
import { App } from '../view/app';

export const renderToHTMLStirng = (): string => {
    const content = renderToString(<App />);
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={title} />
            <title>SPA with SSR tutorial</title>
        </head>
        <body>
            <div id="app">${content}</div>
            <script type='text/javascript' src="client.js" ></script>
        </body>
    </html>`;
};
