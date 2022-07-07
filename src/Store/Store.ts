import { makeObservable, observable, computed, action } from 'mobx';
import { data, lineParity, sortedData } from './helpers';

export class Store {
  lenArray = 2;
  min = 0;
  max = 1;
  constructor() {
    makeObservable(this, {
      lenArray: observable,
      min: observable,
      max: observable,
      checkInput: computed,
      targetArray: computed,
      sortedArray: computed,
      resultLine: computed,
      setLenArray: action,
      setMin: action,
      setMax: action('Set the max value of array'),
    });
  }
  get checkInput() {
    return this.min < this.max;
  }
  get targetArray() {
    console.log(this.checkInput, this.min, this.max)
    return this.checkInput ? data(this.lenArray)(this.min, this.max) : [];
  }
  get sortedArray(){
    return this.checkInput ? sortedData(this.targetArray): [];
  }
  get resultLine(){
    const start = performance.now();
    const parities = lineParity(this.targetArray);
    const end = performance.now()
    return {parities, time: end - start}
  }
  setLenArray(num: number) {
    if (num <= 100000 && num > 2) {
      this.lenArray = num;
    }
  }
  setMin(num: number) {
    if (num < 100000 && num >= 0) {
      this.min = num;
    }
  }
  setMax(num: number) {
    if (num <= 100000 && num > 0 && this.min < num) {
      this.max = num;
    } else {
      this.max = this.min + 1;
    }
  }
}
export const storeClass = new Store();
