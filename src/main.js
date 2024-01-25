"use strict";

console.log("Hello World!");

Object.defineProperty(exports, "__esModule", { value: true });
const epanet_js_1 = require("epanet-js");
const fs_1 = require("fs");
// Read an existing inp file from the disk
const net1 = (0, fs_1.readFileSync)("net1.inp");
// Initialise a new Workspace and Project object
const ws = new epanet_js_1.Workspace();
const model = new epanet_js_1.Project(ws);
// Write a copy of the inp file to the workspace
ws.writeFile("net1.inp", net1);
// Runs toolkit methods: EN_open, EN_solveH & EN_close
model.open("net1.inp", "report.rpt", "out.bin");
model.solveH();
model.close();

const report = ws.readFile("report.rpt");
console.log(report);
