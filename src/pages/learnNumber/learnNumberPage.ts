import { Component } from '@angular/core';

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
}
