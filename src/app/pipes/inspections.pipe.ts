import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { inspectionTypes, plotTypes } from '../_fake-db/inspections';

@Pipe({
  name: 'inspectionPipe'
})
export class InspectionPipe implements PipeTransform {
  transform(value: any | any[], args?: any): any {
    const InspectionTypes = inspectionTypes;
    const multi = typeof value === 'object' ? true : false;

    if (multi) {
      const results = [];
      for (const eachValue of value) {
        for (const inspection of InspectionTypes) {
          if (eachValue === inspection.value) {
            results.push(`${inspection.label}`);
          }
        }
      }
      return results.join(', ');
    } else {
      for (const inspection of InspectionTypes) {
        if (value === inspection.value) {
          return `${inspection.label}`;
        }
      }
    }
  }
}

@Pipe({
  name: 'plotPipe'
})
export class PlotPipe implements PipeTransform {
  transform(value: any | any[], args?: any): any {
    const PlotTypes = plotTypes;
    const multi = typeof value === 'object' ? true : false;

    if (multi) {
      const results = [];
      for (const eachValue of value) {
        for (const plot of PlotTypes) {
          if (eachValue === plot.value) {
            results.push(`${plot.label}`);
          }
        }
      }
      return results.join(', ');
    } else {
      for (const plot of PlotTypes) {
        if (value === plot.value) {
          return `${plot.label}`;
        }
      }
    }
    return `value`;
  }
}

@NgModule({
  declarations: [ InspectionPipe, PlotPipe ],
  exports: [ InspectionPipe, PlotPipe ]
})
export class InspectionsPipeModule {}
