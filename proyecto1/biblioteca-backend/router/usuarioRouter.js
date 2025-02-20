router.get("/prestamos", PrestamoController.obtenerPrestamos); 
router.post("/prestamos", PrestamoController.insertarPrestamo); 
router.delete("/prestamos/:id", PrestamoController.eliminarPrestamo); 
router.put("/prestamos/:id", PrestamoController.actualizarPrestamo); 
router.get("/prestamos/:id", PrestamoController.buscarPrestamo); 

module.exports = router;