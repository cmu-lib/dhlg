/*
 * @file
 * Morse code generator
 * Usage:  encodeMorse(string), decodeMorse(string)
 *   
 * Modified with thanks from https://libraries.io/npm/morsee
 * License: MIT
 *   
 **/ 

const letters = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  ä: '.-.-',
  á: '.--.-',
  å: '.--.-',
  é: '.-..',
  ñ: '-.--',
  ö: '--.',
  ü: '.--',
}

const digits = {
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
}

const specials = {
  ' ': ' ',
  '\n': '.-.-',
  '&': '.-...',
  '\'': '.----.',
  '@': '.--.-.',
  ')': '-.--.-',
  '(': '-.--.',
  ':': '---...',
  ',': '--..--',
  '=': '-...-',
  '!': '-.-.--',
  '.': '.-.-.-',
  '-': '-....-',
  '+': '.-.-.',
  '"': '.-..-.',
  '?': '..--..',
  '/': '-..-.',
}

const toMorse = {
  ...letters,
  ...digits,
  ...specials,
}

const fromMorse = Object.keys(toMorse)
  .reduce((obj, char) => ({ ...obj, [toMorse[char]]: char }), {})
  
  
const encodeMorse = str => [...str.toLowerCase()]
  .map(letter => toMorse[letter])
  .join(' ')

const decodeMorse = str => str.split(' ')
  .map(morse => fromMorse[morse])
  .join('')
