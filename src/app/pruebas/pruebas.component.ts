import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createObjetive(){
    let div:any = document.getElementById('eldiv');
    let newDiv = `
    <div class="flex flex-row items-center bg-gray-200 p-4 space-x-2 w-fit rounded-lg" >
        
    <div class="flex flex-col w-72" >
      <span>Objetivo:</span>
      <textarea type="text" cols="4" rows="4"></textarea>
    </div>
  
    <div class="flex flex-col w-72">
      <span>Herramienta:</span>
      <textarea type="text" cols="4" rows="4"></textarea>
    </div>
  
    <div class="flex flex-col">
      <span>Puntos:</span>
      <input type="number" value="32" >
    </div>
  
    <div class="flex flex-col">
      <span>Calificacion:</span>
      <input type="number" value="324533465">
    </div>
  
    <button class=" bg-gray-400 p-3 rounded-xl " >Guardar cambios</button>
  
  </div>
    `
    div.innerHTML += newDiv;
  }

}
