import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const render = (content: ReactElement): string => {
    const html = renderToStaticMarkup(content);
    return `<!DOCTYPE html>${html}`;
};
