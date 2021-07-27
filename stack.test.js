const { TestWatcher } = require('jest');
const stack = require('./stack');

test('testar pinha vazia na criação', () => {
   p = new stack();
   expect(p.isEmpty()).toBeTruthy();
});


test('testar a pinha não vazia', () => {
   p = new stack();
   p.push(2);
   expect(p.isEmpty()).toBeFalsy();
});

test('testar pilha vazia depois inserir e remover 1 elemento', () =>{
  p = new stack();
  p.push(2);
  p.pop();
  expect(p.isEmpty()).toBeTruthy();
});

test('testar tirar uma pilha que já está vazia', () => {
p = new stack();
p.push(7);
p.pop();
expect(() => {p.pop()}).toThrow();
});

test('testar inserir 2 elemento', () => {
p = new stack();
p.push(7);
p.push(98);
expect(p.push())
});

test('testar inserir 2 e remover 1 pilha', () => {
p = new stack();
p.push(27);
p.push(30);
p.pop();

expect(() => {p.pop()}).toBeTruthy();
});

test('testar pilha vazia inserir e tirar, inserir e tirar', () => {
p = new stack();
p.push(67);
p.pop();
p.push(76);
p.pop();
expect(p.isEmpty()).toBeTruthy();
});

test('testar o tamanho da pilha', () => {
p = new stack();
p.push(43);
p.push(12);
p.push(79);
expect(p.size()).toBe(3)
});

test('testar outro tamanho da pilha', () => {
p = new stack();
p.push(5);
p.push(7);
p.push(8);
p.push(8);
p.push(9);
p.push(45);
expect(p.size()).toEqual(6);
});

test('inserir o tamnho da pilha e remover', ()  => {
p = new stack();
p.push(9);
p.push(67)
p.push(98);
p.pop();
expect(p.size).toThrow();
});

test('tentar inserir e remover a pilha', () => {
p = new stack();
p.push(76);
p.pop();
p.push(57);
p.pop();
p.push(78);
p.pop();
p.push(67);
p.pop();
   expect(() => {p.pop()}).toThrow();
});

test('testar 4 pilhas não vazias', () => {
p = new stack();
p.push(75);
p.push(68);
p.push(9);
p.push(76);
expect(p.isEmpty()).toBeFalsy();
});

test('testar retornar nada', () => {
P =  new stack();
p.pop();
p.pop();
expect(p.pop()).toBeTruthy();
});

test ('testar tamanho da pilha e remover', () => {
p = new stack();
p.push(76);
p.push(74);
p.push(54);
p.push(23);
p.push(64);
p.pop();
p.pop();
expect(p.size).toThrow();
});

test('testar inserir 2,1 e remover1,2 ', () => {
p = new stack();
p.push(67);
p.push(87);
p.pop();
p.push(98);
p.pop();
p.pop();
expect(() => {p.pop()}).toThrow();
});