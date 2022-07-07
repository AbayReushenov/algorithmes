import { makeObservable, observable, computed, action } from 'mobx';
import { data, lineParity, lineParityThreeSorted, lineParityTwo, sortedData } from './helpers';

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
    return this.checkInput ? data(this.lenArray)(this.min, this.max) : [];
  }
  get sortedArray() {
    const start = performance.now();
    const parities = this.checkInput ? sortedData(this.targetArray) : [];
    const end = performance.now()
    return { parities, time: end - start };
  }
  get resultLine() {
    const start = performance.now();
    const parities = lineParity(this.targetArray);
    const end = performance.now();
    return { parities, time: end - start };
  }
  get resultLineTwo() {
    const start = performance.now();
    const parities = lineParityTwo(this.targetArray);
    const end = performance.now();
    return { parities, time: end - start };
  }

  get resultLineSorted() {
    const start = performance.now();
    const parities = lineParity(this.sortedArray.parities);
    const end = performance.now();
    return { parities, time: end - start };
  }
  get resultLineTwoSorted() {
    const start = performance.now();
    const parities = lineParityTwo(this.sortedArray.parities);
    const end = performance.now();
    return { parities, time: end - start };
  }

  get resultLineThreeSorted() {
    const start = performance.now();
    const parities = lineParityThreeSorted(this.sortedArray.parities);
    const end = performance.now();
    return { parities, time: end - start };
  }

  get efficiencyRatioTargetArray() {
    return Math.trunc(this.resultLine.time / this.resultLineTwo.time);
  }

  get efficiencyRatioSortedOneByTwo() {
    return Math.trunc(
      this.resultLineSorted.time / this.resultLineTwoSorted.time
    );
  }
  get efficiencyRatioSortedOneByThree() {
    return Math.trunc(
      this.resultLineSorted.time / this.resultLineThreeSorted.time
    );
  }

  get efficiencyRatioSortedTwoByThree() {
    return Math.trunc(
      this.resultLineTwoSorted.time / this.resultLineThreeSorted.time
    );
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
