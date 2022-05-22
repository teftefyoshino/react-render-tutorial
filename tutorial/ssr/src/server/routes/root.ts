import Router from 'express';
import { DocumentTemplate } from '@modules/tutorial-ui';
import { render } from '../render';
import { Root } from '../../view/pages';

export const rootRouter = () => {
    const router = Router();

    router.use((req, res, next) => {
        console.log(`access {path: ${req.path}} {time: ${new Date().toISOString()}}`);
        next();
    });

    router.get('/', (req, res) => {
        const component = DocumentTemplate({ title: 'SSR tutorial', content: Root() });
        if (!component) {
            return res.status(500).send('internal server error');
        }
        const html = render(component);
        res.status(200).send(html);
    });

    return router;
};
