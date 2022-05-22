import type { FC, ReactElement } from 'react';

export interface Props {
    title: string;
    content: ReactElement;
}

export const DocumentTemplate: FC<Props> = ({ title, content }) => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={title} />
                <title>{title}</title>
            </head>
            <body>{content}</body>
        </html>
    );
};
