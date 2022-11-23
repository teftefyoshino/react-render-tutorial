import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Root: FC = () => (
    <div>
        <h1>Hello! React SSR tutorial</h1>
        <div>
            <p>example page</p>
            <p>
                ・<Link to="/user/list">user list page</Link>
            </p>
        </div>
    </div>
);
