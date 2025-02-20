const express = require("express");
const app = express();
const libroRouter = require("./router/libroRouter");
const libroRouter = require("./router/prestamoRouter");
const usuarioRouter = require("./router/usuarioRouter");

app.use(express.json());
app.use("/api", libroRouter);
app.use("/api", autorRouter);
app.use("/api", usuarioRouter);


const PORT =  4002;
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto");
});