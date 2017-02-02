import { Component } from '@angular/core';
import { MediaPlugin } from 'ionic-native';
import {Platform} from "ionic-angular/index";

@Component({
  selector: 'learn-number',
  templateUrl: 'learnNumber.tpl.html'
})

export class LearnNumberPage {
  public currentNumber: number;
  public previousNumber: number;
  public nextNumber: number;

  constructor() {
    this.reset();
  }

  public get numberOfCharInCurrentNumber(): number {
    return this.currentNumber.toString().length;
  }

  public nextNumberRequested(): void {
    ++this.previousNumber;
    ++this.currentNumber;
    ++this.nextNumber;
  }

  public previousNumberRequested(): void {
    if (this.currentNumber < 1)
      return;

    --this.nextNumber;
    --this.currentNumber;
    --this.previousNumber;
  }

  public reset(): void {
    this.currentNumber = 0;
    this.previousNumber = -1;
    this.nextNumber = 1;
  }

  public playSound() {
    const file = new MediaPlugin("/android_asset/www/assets/sound/sample.mp3");
    file.play();
  }
}
