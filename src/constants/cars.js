import mercedes from './car-photos/mercedes.png';
import ferrari from './car-photos/ferrari.png';
import alphatauri from './car-photos/alphatauri.png';
import mclaren from './car-photos/mclaren.png';
import redbull from './car-photos/redbull.png';
import astonmartin from './car-photos/astonmartin.png';
import randomCar from './car-photos/random-car.png';

import hamilton from './pilot-photos/hamilton.png';
import norris from './pilot-photos/norris.png';
import gasly from './pilot-photos/gasly.png';
import leclerc from './pilot-photos/leclerc.png';
import verstappen from './pilot-photos/verstappen.png';
import vettel from './pilot-photos/vettel.png';

export const cars = [
  {
    name: 'Redbull',
    pilot: 'Max Verstappen',
    carImg: redbull,
    pilotImg: verstappen,
    speedRange: [14, 30],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: 'Ferrari',
    pilot: 'Charles Leclerc',
    carImg: ferrari,
    pilotImg: leclerc,
    speedRange: [15, 28],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: 'Mercedes',
    pilot: 'Lewis Hamilton',
    carImg: mercedes,
    pilotImg: hamilton,
    speedRange: [16, 27],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: 'Alphatauri',
    pilot: 'Pierre Gasly',
    carImg: alphatauri,
    pilotImg: gasly,
    speedRange: [15, 25],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: 'Mclaren',
    pilot: 'Lando Norris',
    carImg: mclaren,
    pilotImg: norris,
    speedRange: [17, 24],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: 'Aston Martin',
    pilot: 'Sebastian Vettel',
    carImg: astonmartin,
    pilotImg: vettel,
    speedRange: [17, 23],
    startPlace: -390,
    finishPlace: 550,
    currentPlace: -390,
  },
  {
    name: '?',
    pilot: '?',
    carImg: randomCar,
  },
];
