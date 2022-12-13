import { FC, useCallback, useState } from 'react';

export const APP_MARKER = 'app';

export const App: FC = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount((c) => c + 1), []);
    return (
        <div>
            <button onClick={increment}>increment</button>
            <p>count: {count}</p>
        </div>
    );
};
