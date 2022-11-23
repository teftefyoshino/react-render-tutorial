import { type FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserDetailData } from '@modules/static-data';

export const UserDetail: FC = () => {
    const { id } = useParams();
    if (!id) {
        return <div>error!</div>;
    }
    const user = getUserDetailData(id);
    useEffect(() => {
        console.log('useEffect!!');
    }, []);
    return (
        <div>
            <h1>user info</h1>
            <p>
                <Link to={'/user/list'}>{'< return list page'}</Link>
            </p>
            <p>
                <Link to={'/'}>{'< return top page'}</Link>
            </p>
            {user ? (
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            ) : (
                <p>unregistered user</p>
            )}
        </div>
    );
};
