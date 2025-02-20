const express = require("express");
const app = express();
const libroRouter = require("./router/libroRouter");
const usuarioRouter = require("./router/usuarioRouter");
const prestamoRouter = require("./router/prestamoRouter");

app.use(express.json());
app.use("/api", libroRouter);
app.use("/api", usuarioRouter);
app.use("/api", prestamoRouter);

const PORT = 4002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
