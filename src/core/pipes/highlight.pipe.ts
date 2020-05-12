import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  public transform(text: string, search: any): string {
    if (search && text) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t: any) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');

      return text.replace(regex, (match) => `<span class="highlight: search">${match}</span>`);
    } else {
      return text;
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightPipe],
  exports: [HighlightPipe],
})
export class HighlightPipeFilter { }
