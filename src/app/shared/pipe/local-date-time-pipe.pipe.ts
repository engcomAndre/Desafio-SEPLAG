import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment'; // add this 1 of 4

@Pipe({
  name: 'localDateTimePipe'
})
export class LocalDateTimePipePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut = "";/*moment.Moment = moment(date,'YYYY-MM-DDTHH:mm:ss'); */
    return dateOut; /*.format("DD-MM-YYYY HH:mm");*/
  }

}
