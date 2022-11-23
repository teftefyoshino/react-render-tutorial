import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Root } from './components/root';
import { UserDetail, UserList } from './components/user';

export const APP_MARKER = 'app';

// export const AppMarker = () => <div id={APP_MARKER}></div>;

export const AppContainer = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/user/list" element={<UserList />} />
                <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
};
