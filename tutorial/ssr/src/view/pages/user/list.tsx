import type { FC } from 'react';
import users from '../../../data/users.json';

export const UserListContainer = () => {
    return <App />;
}

const App: FC = () => {
    return (
        <div>
            <h1>sample user list</h1>
            <div>
                <ul>
                    {users.data.map((user) =>(
                            <li key={user.id}>{user.displayName}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

