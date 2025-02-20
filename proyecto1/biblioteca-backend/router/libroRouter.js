// Rutas para Libros
router.get("/libros", LibroController.obtenerLibros); 
router.post("/libros", LibroController.insertarLibro); 
router.delete("/libros/:id", LibroController.eliminarLibro); 
router.put("/libros/:id", LibroController.actualizarLibro); 
router.get("/libros/:titulo", LibroController.buscarLibro);

module.exports = router;
