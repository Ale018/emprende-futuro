"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroAsistenciaController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistroAsistenciaController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const RegistroAsistenciaActividad = yield database_1.default.query('SELECT * FROM RegistroAsistenciaActividad');
            resp.json(RegistroAsistenciaActividad);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into RegistroAsistenciaActividad set ?', [req.body]);
        resp.json({ text: 'Asistencia registrada' });
        console.log(req.body);
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            yield database_1.default.query('DELETE FROM RegistroAsistenciaActividad WHERE Id_RegistroAsistente=?', [Id_RegistroAsistente]);
            resp.json({ message: 'Asistencia eliminada' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            yield database_1.default.query('UPDATE RegistroAsistenciaActividad set? WHERE Id_RegistroAsistente=?', [req.body, Id_RegistroAsistente]);
            resp.json({ message: 'Asistencia actualizada' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            const RegistroAsistenciaActividad = yield database_1.default.query('SELECT * FROM RegistroAsistenciaActividad WHERE Id_RegistroAsistente=?', [Id_RegistroAsistente]);
            if (RegistroAsistenciaActividad.length > 0) {
                return resp.json(RegistroAsistenciaActividad[0]);
            }
            resp.status(404).json({ text: 'Esta asistencia no esta registrada' });
        });
    }
}
exports.registroAsistenciaController = new RegistroAsistenciaController();
exports.default = exports.registroAsistenciaController;
