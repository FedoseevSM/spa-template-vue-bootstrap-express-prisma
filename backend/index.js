"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = Number(process.env.SERVER_PORT) || 3001;
app.get('/', (_, res) => {
    res.json('Hello from server');
});
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
