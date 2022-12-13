import { renderToString } from 'react-dom/server';
import { AppOnServerSide } from './app';

export const renderToHTMLStirng = (url: string): string => {
    const content = renderToString(AppOnServerSide(url));
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
