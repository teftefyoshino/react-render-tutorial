import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Root } from './components/root';
import { UserDetail, UserList } from './components/user';

export const APP_MARKER = 'app';

export const AppContainer: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/user/list" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
    );
};
