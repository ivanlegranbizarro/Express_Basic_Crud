const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es un campo obligatorio'],
	},
	correo: {
		type: String,
		required: [true, 'El correo es un campo obligatorio'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'La contraseña es un campo obligatorio'],
	},
	imagen: {
		type: String,
	},
	rol: {
		type: String,
		required: true,
		emun: ['ADMIN_ROLE', 'USER_ROLE'],
	},
	estado: {
		type: Boolean,
		default: true,
	},
	google: {
		type: Boolean,
		default: false,
	},
});

module.exports = model('Usuario', UsuarioSchema);
