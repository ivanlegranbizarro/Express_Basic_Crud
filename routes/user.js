const { Router } = require('express');
const {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
} = require('../controllers/user');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;
