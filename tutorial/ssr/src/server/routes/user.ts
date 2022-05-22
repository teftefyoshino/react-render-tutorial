import Router from 'express';
import { DocumentTemplate } from '@modules/tutorial-ui';
import { render } from '../render';
import { List, Detail } from '../../view/pages/user';

export const userRouter = () => {
    const router = Router();

    router.use((req, res, next) => {
        console.log(`access {path: ${req.path}} {time: ${new Date().toISOString()}}`);
        next();
    });

    router.get('/list', (req, res) => {
        const component = DocumentTemplate({
            title: 'SSR tutorial : user list',
            content: List(),
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
            content: Detail(req.params.id),
        });
        if (!component) {
            return res.status(500).send('internal server error');
        }
        const html = render(component);
        res.status(200).send(html);
    });

    return router;
};
