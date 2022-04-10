import { BuildGrid } from './modules/BuildGrid.js';
import { ChangeGridDensity } from './modules/ChangeGridDensity.js';
import { ClearSquares } from './modules/ClearSquares.js';
import { ColorPicker, ColorButton } from './modules/ColorPicker.js';
import { PaintSquare } from './modules/PaintSquare.js';

const grid = document.querySelector('.grid-container');
const sizeSign = document.querySelector('#sizeSign');
const gridDensity = 40;
sizeSign.textContent = `GRID: ${gridDensity} x ${gridDensity}`;

BuildGrid(gridDensity);
PaintSquare(grid);
ClearSquares(grid);
ColorPicker(grid);
ColorButton(grid);
ChangeGridDensity(grid, sizeSign);
