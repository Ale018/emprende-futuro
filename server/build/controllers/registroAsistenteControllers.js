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
exports.registroAsistenteController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistroAsistenteController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const RegistroAsistente = yield database_1.default.query('SELECT * FROM RegistroAsistente');
            resp.json(RegistroAsistente);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into RegistroAsistente set ?', [req.body]);
        resp.json({ text: 'Registro exitoso' });
        console.log(req.body);
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            yield database_1.default.query('DELETE FROM RegistroAsistente WHERE Id_RegistroAsistente=?', [Id_RegistroAsistente]);
            resp.json({ message: 'Registro eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            yield database_1.default.query('UPDATE RegistroAsistente set? WHERE Id_RegistroAsistente=?', [req.body, Id_RegistroAsistente]);
            resp.json({ message: 'Registro actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_RegistroAsistente } = req.params;
            const RegistroAsistente = yield database_1.default.query('SELECT * FROM RegistroAsistente WHERE Id_RegistroAsistente=?', [Id_RegistroAsistente]);
            if (RegistroAsistente.length > 0) {
                return resp.json(RegistroAsistente[0]);
            }
            resp.status(404).json({ text: 'Este asistente no existe' });
        });
    }
}
exports.registroAsistenteController = new RegistroAsistenteController();
exports.default = exports.registroAsistenteController;
