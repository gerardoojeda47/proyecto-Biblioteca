let db = require("../config/database");

class LibroController {
  // Obtener todos los libros
  static async obtenerLibros(req, res) {
    try {
      let lista = await db.query("SELECT * FROM libros");
      res.json(lista);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener libros", error });
    }
  }


  static async insertarLibro(req, res) {
    let { titulo, autor, anio_publicacion, disponibilidad } = req.body;
    try {
      await db.query("INSERT INTO libros(titulo, autor, anio_publicacion, disponibilidad) VALUES (?, ?, ?, ?)", 
                     [titulo, autor, anio_publicacion, disponibilidad]);
      res.json({ message: "Libro agregado", libro: req.body });
    } catch (error) {
      res.status(500).json({ message: "Error al agregar libro", error });
    }
  }


  static async eliminarLibro(req, res) {
    let { id } = req.params;
    try {
      await db.query("DELETE FROM libros WHERE id = ?", [id]);
      res.send({ message: "Libro eliminado" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar libro", error });
    }
  }


  static async actualizarLibro(req, res) {
    let { id } = req.params;
    let { titulo, autor, anio_publicacion, disponibilidad } = req.body;
    try {
      await db.query("UPDATE libros SET titulo = ?, autor = ?, anio_publicacion = ?, disponibilidad = ? WHERE id = ?", 
                     [titulo, autor, anio_publicacion, disponibilidad, id]);
      res.send({ message: "Libro actualizado" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar libro", error });
    }
  }


  static async buscarLibro(req, res) {
    let { id } = req.params;
    try {
      let libro = await db.query("SELECT * FROM libros WHERE id = ?", [id]);
      if (libro.length > 0) {
        res.json(libro[0]);
      } else {
        res.status(404).json({ message: "Libro no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al buscar libro", error });
    }
  }


  static async librosMasSolicitados(req, res) {
    try {
      let lista = await db.query("SELECT libro_id, COUNT(*) as cantidad FROM prestamos GROUP BY libro_id ORDER BY cantidad DESC LIMIT 10");
      res.json(lista);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener libros más solicitados", error });
    }
  }

 
  static async estadoPrestamos(req, res) {
    try {
      let lista = await db.query("SELECT * FROM prestamos WHERE fecha_devolucion IS NULL");
      res.json(lista);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener estado de préstamos", error });
    }
  }
}

module.exports = LibroController;

