import type { FC } from 'react';
import users from '@modules/static-data/user/users.json';

export const UserList: FC = () => {
    return (
        <div>
            <h1>sample user list</h1>
            <div>
                <ul>
                    {users.data.map((user) => (
                        <li key={user.id}>
                            <a href={`/user/${user.id}`}>{user.displayName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
