let db = require("../config/database");

class PrestamoController {
  // Obtener todos los préstamos
  static async obtenerPrestamos(req, res) {
    try {
      let lista = await db.query("SELECT * FROM prestamos");
      res.json(lista);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener préstamos", error });
    }
  }


  static async insertarPrestamo(req, res) {
    let { libro_id, usuario_id, fecha_prestamo, fecha_devolucion } = req.body;
    try {
      await db.query("INSERT INTO prestamos(libro_id, usuario_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)", 
                     [libro_id, usuario_id, fecha_prestamo, fecha_devolucion]);
      res.json({ message: "Préstamo agregado", prestamo: req.body });
    } catch (error) {
      res.status(500).json({ message: "Error al agregar préstamo", error });
    }
  }


  static async eliminarPrestamo(req, res) {
    let { id } = req.params;
    try {
      await db.query("DELETE FROM prestamos WHERE id = ?", [id]);
      res.send({ message: "Préstamo eliminado" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar préstamo", error });
    }
  }


  static async actualizarPrestamo(req, res) {
    let { id } = req.params;
    let { libro_id, usuario_id, fecha_prestamo, fecha_devolucion } = req.body;
    try {
      await db.query("UPDATE prestamos SET libro_id = ?, usuario_id = ?, fecha_prestamo = ?, fecha_devolucion = ? WHERE id = ?", 
                     [libro_id, usuario_id, fecha_prestamo, fecha_devolucion, id]);
      res.send({ message: "Préstamo actualizado" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar préstamo", error });
    }
  }


  static async buscarPrestamo(req, res) {
    let { id } = req.params;
    try {
      let prestamo = await db.query("SELECT * FROM prestamos WHERE id = ?", [id]);
      if (prestamo.length > 0) {
        res.json(prestamo[0]);
      } else {
        res.status(404).json({ message: "Préstamo no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al buscar préstamo", error });
    }
  }
}

module.exports = PrestamoController;

