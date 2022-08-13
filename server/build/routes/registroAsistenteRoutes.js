"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registroAsistenteControllers_1 = require("./../controllers/registroAsistenteControllers");
const express_1 = require("express");
class RegistroAsistenteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', registroAsistenteControllers_1.registroAsistenteController.list);
        this.router.post('/', registroAsistenteControllers_1.registroAsistenteController.create);
        this.router.delete('/:id', registroAsistenteControllers_1.registroAsistenteController.delete);
        this.router.put('/:id', registroAsistenteControllers_1.registroAsistenteController.update);
        this.router.get('/:id', registroAsistenteControllers_1.registroAsistenteController.getOne);
    }
}
const registroAsistenteRoutes = new RegistroAsistenteRoutes();
exports.default = registroAsistenteRoutes.router;
