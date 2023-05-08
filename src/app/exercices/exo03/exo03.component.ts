import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component {

}

function myTimer() {
  console.log()
}
setTimeout(myTimer, 1000)


function stopTimer() {
  myTimer()
}
stopTimer(myTimer)


function setTimer() {

}
