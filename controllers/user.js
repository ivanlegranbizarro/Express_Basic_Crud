const { response } = require('express');

const usuariosGet = (req, res = response) => {
	const { q, nombre } = req.query;

	res.json({
		msg: 'Petición GET a mi API - Controlador',
		q,
		nombre,
	});
};

const usuariosPost = (req, res = response) => {
	const { nombre, edad } = req.body;
	res.json({
		nombre,
		edad,
	});
};

const usuariosPut = (req, res = response) => {
	const { id } = res.params.id;

	res.json({
		msg: 'Petición PUT a mi API - Controlador',
		id,
	});
};

const usuariosDelete = (req, res = response) => {
	res.json({
		msg: 'Petición DELETE a mi API - Controlador',
	});
};

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
};
