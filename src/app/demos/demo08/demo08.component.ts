import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component implements OnInit {


  currentStyle: any;

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;

  isActive: boolean = false;

  ngOnInit (): void {
    console.log("Chargement du composant demo08");
    this.setCurrentStyle();
  }

  setCurrentStyle (): void {

    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '12px',
    };

  }

  switchItalic () {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  switchBold () {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  switchSize () {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  switchClass () {
    this.isActive = !this.isActive;
  }

}
