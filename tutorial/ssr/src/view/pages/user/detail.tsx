import type { FC } from 'react';
import { getUserDetailData } from '../../../data/user-datail';

export const UserDetailContainer = (id: string) => {
    return <App id={id} />;
};

interface Props {
    id: string;
}

const App: FC<Props> = ({ id }) => {
    const user = getUserDetailData(id);
    return (
        <div>
            <h1>user info</h1>
            {user ? (
                <table>
                    <tr>
                        <th>ID</th>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <th>名前</th>
                        <td>
                            {user.lastName} {user.firstName}
                        </td>
                    </tr>
                    <tr>
                        <th>年齢</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>性別</th>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <th>郵便番号</th>
                        <td>{user.address.zipCode}</td>
                    </tr>
                    <tr>
                        <th>都道府県</th>
                        <td>{user.address.prefecture}</td>
                    </tr>
                    {user.phoneNumbers.map((phoneNumber) => (
                        <tr key={phoneNumber.id}>
                            <th>電話番号</th>
                            <td>
                                {phoneNumber.type} {phoneNumber.number}
                            </td>
                        </tr>
                    ))}
                </table>
            ) : (
                <p>unregistered user</p>
            )}
        </div>
    );
};
