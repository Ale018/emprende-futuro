"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registroAsistenciaControllers_1 = require("./../controllers/registroAsistenciaControllers");
const express_1 = require("express");
class RegistroAsistenciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', registroAsistenciaControllers_1.registroAsistenciaController.list);
        this.router.post('/', registroAsistenciaControllers_1.registroAsistenciaController.create);
        this.router.delete('/:id', registroAsistenciaControllers_1.registroAsistenciaController.delete);
        this.router.put('/:id', registroAsistenciaControllers_1.registroAsistenciaController.update);
        this.router.get('/:id', registroAsistenciaControllers_1.registroAsistenciaController.getOne);
    }
}
const registroAsistenciaRoutes = new RegistroAsistenciaRoutes();
exports.default = registroAsistenciaRoutes.router;
