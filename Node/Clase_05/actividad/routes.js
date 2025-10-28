import express from 'express';
import * as vuelo from './controllers/vueloController.js';
import * as mostrar from './controllers/mostrarController.js';
const router = express.Router();

router.get('/', vuelo.index);
router.post('/', vuelo.store);

router.get('/mostrar', mostrar.index)

export default router;