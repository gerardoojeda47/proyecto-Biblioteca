let db = require("../config/database");

class UsuarioController {
  // Obtener todos los usuarios
  static async obtenerUsuarios(req, res) {
    try {
      let lista = await db.query("SELECT * FROM usuarios");
      res.json(lista);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener usuarios", error });
    }
  }


  static async insertarUsuario(req, res) {
    let { nombre, email, telefono } = req.body;
    try {
      await db.query("INSERT INTO usuarios(nombre, email, telefono) VALUES (?, ?, ?)", 
                     [nombre, email, telefono]);
      res.json({ message: "Usuario agregado", usuario: req.body });
    } catch (error) {
      res.status(500).json({ message: "Error al agregar usuario", error });
    }
  }

 
  static async eliminarUsuario(req, res) {
    let { id } = req.params;
    try {
      await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
      res.send({ message: "Usuario eliminado" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar usuario", error });
    }
  }


  static async actualizarUsuario(req, res) {
    let { id } = req.params;
    let { nombre, email, telefono } = req.body;
    try {
      await db.query("UPDATE usuarios SET nombre = ?, email = ?, telefono = ? WHERE id = ?", 
                     [nombre, email, telefono, id]);
      res.send({ message: "Usuario actualizado" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar usuario", error });
    }
  }

  static async buscarUsuario(req, res) {
    let { id } = req.params;
    try {
      let usuario = await db.query("SELECT * FROM usuarios WHERE id = ?", [id]);
      if (usuario.length > 0) {
        res.json(usuario[0]);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al buscar usuario", error });
    }
  }
}

module.exports = UsuarioController;

