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
const express_1 = __importDefault(require("express")); // instalar declaracion de tipos
const app = (0, express_1.default)();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World!");
}));
let cadena;
let numero;
let booleano;
let arreglo;
// Tambien podria ser let array: string[];
let tupla;
let indefinido;
let nulo;
let nunca;
let vacio; // para funciones sin retorno
const suma = (a, b) => {
    return a + b;
};
class Animal {
    comer() {
        console.log("Esta Comiendo");
    }
}
const perro = new Animal();
perro.comer();
class Cubo {
    constructor(resistencia, hp, material) {
        this.medida = 100;
        this.resistencia = resistencia;
        this.hp = hp;
        this.material = material;
    }
    destruir() {
        console.log("Se destruyo el cubo");
    }
    getHpMethod() {
        console.log(this.hp);
    }
    set setHp(hp) {
        this.hp = hp;
    }
    get getHp() {
        return this.hp;
    }
}
class CuboTierra extends Cubo {
    constructor(resistencia, hp, material) {
        super(resistencia, hp, material);
    }
    picar() {
        console.log("picando");
    }
}
const cuboTierra = new CuboTierra(100, 100, "tierra");
