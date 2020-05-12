import { Component, OnInit } from '@angular/core';
import { ConfigService, ConfigModel } from '../core/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = '';
  public logo: string = '';
  public version: string = '';

  constructor(private configService: ConfigService) { }

  public ngOnInit() {
    this.configService.getConfigSettings().subscribe((cfgSettings) => {
      this.title = cfgSettings.title;
      this.logo = cfgSettings.logo;
      this.version = cfgSettings.version;
    });
  }

}
