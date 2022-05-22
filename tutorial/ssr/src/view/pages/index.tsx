import type { FC } from 'react';

export const IndexContainer = () => {
    return <App />;
}

const App: FC = () => (
    <div>
        <h1>Hello! React SSR tutorial</h1>
        <div>
            <p>example page</p>
            <a href='/user/list'>
                user list page
            </a>
        </div>
    </div>
);

