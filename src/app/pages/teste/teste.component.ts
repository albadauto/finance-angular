import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor() { }

  @Input() teste!: string;
  ngOnInit(): void {
  }

}
