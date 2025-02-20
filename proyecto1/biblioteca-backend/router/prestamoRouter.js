// Rutas para Usuarios
router.get("/usuarios", UsuarioController.obtenerUsuarios); 
router.post("/usuarios", UsuarioController.insertarUsuario); 
router.delete("/usuarios/:id", UsuarioController.eliminarUsuario); 
router.put("/usuarios/:id", UsuarioController.actualizarUsuario); o
router.get("/usuarios/:id", UsuarioController.buscarUsuario); 

module.exports = router;