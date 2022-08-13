"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluacionEventoControllers_1 = require("./../controllers/evaluacionEventoControllers");
const express_1 = require("express");
class EvaluacionEventoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', evaluacionEventoControllers_1.evaluacionEventoController.list);
        this.router.post('/', evaluacionEventoControllers_1.evaluacionEventoController.create);
        this.router.delete('/:id', evaluacionEventoControllers_1.evaluacionEventoController.delete);
        this.router.put('/:id', evaluacionEventoControllers_1.evaluacionEventoController.update);
        this.router.get('/:id', evaluacionEventoControllers_1.evaluacionEventoController.getOne);
    }
}
const evaluacionEventoRoutes = new EvaluacionEventoRoutes();
exports.default = evaluacionEventoRoutes.router;
