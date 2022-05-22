import Router from 'express';
import { DocumentTemplate } from '@modules/tutorial-ui';
import { render } from '../render';
import { UserListContainer } from '../../view/pages/user/list';
import { UserDetailContainer } from '../../view/pages/user/detail';

export const userRouter = () => {
    const router = Router();

    router.use((req, res, next) => {
        console.log(`access {path: ${req.path}} {time: ${new Date().toISOString()}}`);
        next();
    });

    router.get('/list', (req, res) => {
        const component = DocumentTemplate({
            title: 'SSR tutorial : user list',
            content: UserListContainer(),
        });
        if (!component) {
            return res.status(500).send('internal server error');
        }
        const html = render(component);
        res.status(200).send(html);
    });

    router.get('/:id', (req, res) => {
        const component = DocumentTemplate({
            title: 'SSR tutorial : user page',
            content: UserDetailContainer(req.params.id),
        });
        if (!component) {
            return res.status(500).send('internal server error');
        }
        const html = render(component);
        res.status(200).send(html);
    });

    return router;
};
