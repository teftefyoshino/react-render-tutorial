import type { FC } from 'react';
import { Link } from 'react-router-dom';
import users from '@modules/static-data/user/users.json';

export const UserList: FC = () => {
    return (
        <div>
            <h1>sample user list</h1>
            <div>
                <ul>
                    {users.data.map((user) => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.displayName}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
