import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme: string = '1';
  inputCtrl: FormControl = new FormControl({value: '', disabled: true});
  previousNumber: number = 0;
  currentOperation: string = '';
  historyData: string = '';
  keyCode;

  constructor() {

  }

  ngOnInit() {
    this.getTheme();
  }
  
  getTheme() {
    let item = localStorage.getItem('theme');
    if (item) this.theme = item;
  }

  setTheme(themeNumber: string) {
    localStorage.setItem('theme', themeNumber);
    this.theme = themeNumber;
  }

  addNumber(number: string) {
    if (this.currentOperation == '') {
      this.historyData = '';
      this.previousNumber = 0;
      this.currentOperation = ' ';
      this.inputCtrl.setValue('');
    }
    this.inputCtrl.setValue(this.inputCtrl.value + number);
  }

  addPercentage() {
    if (!this.inputCtrl.value.includes('.')) {
      this.inputCtrl.setValue(this.inputCtrl.value + '.');
    }
  }

  addition() {
    if (this.inputCtrl.value != '') {
      if (this.currentOperation == '') {
        this.previousNumber = Number(this.inputCtrl.value);
        this.historyData = this.previousNumber + " +";
        this.inputCtrl.setValue('');
      } else if (this.previousNumber == 0) {
        this.previousNumber = Number(this.inputCtrl.value);
        this.historyData = this.previousNumber + " +";
        this.inputCtrl.setValue('');
      } else if (this.previousNumber != 0 && this.currentOperation != '') {
        if (this.currentOperation == '+') {
          this.previousNumber += Number(this.inputCtrl.value);
        } else if (this.currentOperation == '-') {
          this.previousNumber -= Number(this.inputCtrl.value);
        } else if (this.currentOperation == 'x') {
          this.previousNumber *= Number(this.inputCtrl.value);
        } else if (this.currentOperation == '/') {
          this.previousNumber /= Number(this.inputCtrl.value);
        }
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " +";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' +';
        }
        this.inputCtrl.setValue('');
      }
      this.currentOperation = '+';
    }
  }

  subtraction() {
    if (this.inputCtrl.value != '') {
      if (this.currentOperation == '') {
        this.previousNumber = Number(this.inputCtrl.value);
        this.historyData = this.previousNumber + " -";
        this.inputCtrl.setValue('');
      } else if (this.previousNumber == 0) {
        this.previousNumber = Number(this.inputCtrl.value);
        this.historyData = this.previousNumber + " -";
        this.inputCtrl.setValue('');
      } else if (this.previousNumber != 0 && this.currentOperation != '') {
        if (this.currentOperation == '+') {
          this.previousNumber += Number(this.inputCtrl.value);
        } else if (this.currentOperation == '-') {
          this.previousNumber -= Number(this.inputCtrl.value);
        } else if (this.currentOperation == 'x') {
          this.previousNumber *= Number(this.inputCtrl.value);
        } else if (this.currentOperation == '/') {
          this.previousNumber /= Number(this.inputCtrl.value);
        }
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " -";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' -';
        }
        this.inputCtrl.setValue('');
      }
      this.currentOperation = '-';
    }
  }

  multiplication() {
    if (this.inputCtrl.value != '') {
      if (this.currentOperation == '') {
        this.previousNumber = Number(this.inputCtrl.value);
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " x";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' x';
        }
        this.inputCtrl.setValue('');
      } else if (this.previousNumber == 0) {
        this.previousNumber = Number(this.inputCtrl.value);
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " x";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' x';
        }
        this.inputCtrl.setValue('');
      } else if (this.previousNumber != 0 && this.currentOperation != '') {
        if (this.currentOperation == '+') {
          this.previousNumber += Number(this.inputCtrl.value);
        } else if (this.currentOperation == '-') {
          this.previousNumber -= Number(this.inputCtrl.value);
        } else if (this.currentOperation == 'x') {
          this.previousNumber *= Number(this.inputCtrl.value);
        } else if (this.currentOperation == '/') {
          this.previousNumber /= Number(this.inputCtrl.value);
        }
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " x";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' x';
        }
        this.inputCtrl.setValue('');
      }
      this.currentOperation = 'x';
    }
  }

  division() {
    if (this.inputCtrl.value != '') {
      if (this.currentOperation == '') {
        this.previousNumber = Number(this.inputCtrl.value);
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + ' /';
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + " /";
        }
        this.inputCtrl.setValue('');
      } else if (this.previousNumber == 0) {
          this.previousNumber = Number(this.inputCtrl.value);
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + ' /';
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + " /";
        }
        this.inputCtrl.setValue('');
      } else if (this.previousNumber != 0 && this.currentOperation != '') {
        if (this.currentOperation == '+') {
          this.previousNumber += Number(this.inputCtrl.value);
        } else if (this.currentOperation == '-') {
          this.previousNumber -= Number(this.inputCtrl.value);
        } else if (this.currentOperation == 'x') {
          this.previousNumber *= Number(this.inputCtrl.value);
        } else if (this.currentOperation == '/') {
          this.previousNumber /= Number(this.inputCtrl.value);
        }
        if (Number.isInteger(this.previousNumber)) {
          this.historyData = this.previousNumber + " /";
        } else {
          this.historyData = Number.parseFloat(this.previousNumber.toString()).toFixed(4) + ' x';
        }
        this.inputCtrl.setValue('');
      }
      this.currentOperation = '/';
    }
  }

  back() {
    this.inputCtrl.setValue(this.inputCtrl.value.slice(0, -1));
  }

  reset() {
    this.previousNumber = 0;
    this.currentOperation = '';
    this.historyData = '';
    this.inputCtrl.setValue('');
  }

  sum() {
    let currentNumber = Number(this.inputCtrl.value);
    if (!this.historyData.includes('=')) {
      if (this.currentOperation == "+") {
        this.inputCtrl.setValue(Number.parseFloat((this.previousNumber + Number(this.inputCtrl.value)).toFixed(4).toString()));
      } else if (this.currentOperation == "-") {
        this.inputCtrl.setValue(Number.parseFloat((this.previousNumber - Number(this.inputCtrl.value)).toFixed(4).toString()));
      } else if (this.currentOperation == "x") {
        this.inputCtrl.setValue(Number.parseFloat((this.previousNumber * Number(this.inputCtrl.value)).toFixed(4).toString()));
      } else if (this.currentOperation == "/") {
        this.inputCtrl.setValue(Number.parseFloat((this.previousNumber / Number(this.inputCtrl.value)).toFixed(4).toString()));
      }
      this.previousNumber = currentNumber;
      this.historyData += " " + currentNumber + " = " + this.inputCtrl.value;
      this.currentOperation = '';
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.keyCode = event.keyCode;
    switch (this.keyCode) {
      case 103: 
        this.addNumber('7');
        break;
      case 104: 
        this.addNumber('8');
        break;
      case 105: 
        this.addNumber('9');
        break;
      case 100: 
        this.addNumber('4');
        break;
      case 101: 
        this.addNumber('5');
        break;
      case 102: 
        this.addNumber('6');
        break;
      case 97: 
        this.addNumber('1');
        break;
      case 98: 
        this.addNumber('2');
        break;
      case 99: 
        this.addNumber('3');
        break;
      case 96: 
        this.addNumber('0');
        break;
      case 8:
        this.back();
        break;
      case 107:
        this.addition();
        break;
      case 109:
        this.subtraction();
        break;
      case 110:
        this.addPercentage();
        break
      case 111:
        this.division();
        break;
      case 106:
        this.multiplication();
        break;
      case 46:
        this.reset();
        break;
      case 13:
        this.sum();
        break;
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
    this.keyCode = 0;
  }
}