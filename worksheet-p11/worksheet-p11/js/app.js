// app.js — perakit: hanya import dan pemanggilan.
import { state } from "./state.js";
import { tampilkanProfil, render } from "./dom.js";
import { pasangPendengar } from "./events.js";

tampilkanProfil();
render(state);
pasangPendengar();

window.state = state;     // sementara, hapus setelah uji
window.render = render;   // sementara, hapus setelah uji
