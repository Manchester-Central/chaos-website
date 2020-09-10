import { Injectable } from '@angular/core';
import * as reader from 'g-sheets-api';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  private getSheetAsObsevable = bindCallback(reader as (options: any, callback: (result: any[]) => void) => void);

  constructor() { }

  getSheet<T>(sheetId: string) {
    const readerOptions = {
      sheetId,
      returnAllResults: true
    };
    return this.getSheetAsObsevable(readerOptions).pipe(map(a => a as T[]));
  }
}
