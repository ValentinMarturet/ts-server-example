import express, { Request, Response } from "express"; // instalar declaracion de tipos

const app: express.Application = express();
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

let cadena: string;
let numero: number;
let booleano: boolean;
let arreglo: Array<string>;
// Tambien podria ser let array: string[];
let tupla: [string, number, boolean];
let indefinido: undefined;
let nulo: null;
let nunca: never;
let vacio: void; // para funciones sin retorno

const suma = (a: number, b: number): number => {
  return a + b;
};

class Animal {
  comer(): void {
    console.log("Esta Comiendo");
  }
}

const perro: Animal = new Animal();
perro.comer();

abstract class Cubo {
  private medida: number = 100;
  private resistencia: number;
  private hp: number;
  private material: string;

  constructor(resistencia: number, hp: number, material: string) {
    this.resistencia = resistencia;
    this.hp = hp;
    this.material = material;
  }

  protected destruir(): void {
    console.log("Se destruyo el cubo");
  }

  getHpMethod(): void {
    console.log(this.hp);
  }

  set setHp(hp: number) {
    this.hp = hp;
  }

  get getHp(): number {
    return this.hp;
  }

  abstract picar(): void; //Necesario un metodo abstracto para considerar la clase como abstracta
  // es un metodo que se define cuando se extiende la clase
}

class CuboTierra extends Cubo {
  constructor(resistencia: number, hp: number, material: string) {
    super(resistencia, hp, material);
  }

  picar(): void {
    console.log("picando");
  }
}

const cuboTierra = new CuboTierra(100, 100, "tierra");
