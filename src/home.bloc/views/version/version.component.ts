import { Component, OnInit } from '@angular/core';

import { ReleaseModel } from '../../models/release.model';
import { ReleaseService } from '../../services/release.service';

import { ConfigService, ConfigModel } from '../../../core/index';

@Component({
  selector: 'app-root',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionViewComponent implements OnInit {
  public releases: ReleaseModel[];
  public version: string = '';
  public title = 'Version View Component';

  constructor(private service: ReleaseService, private configService: ConfigService) { }

  public ngOnInit() {
    this.service.getReleaseNotes().subscribe((releases) => {
      this.releases = releases;
    });

    this.configService.getConfigSettings().subscribe((cfgSettings) => {
      this.version = cfgSettings.version;
      this.title = cfgSettings.title;
    });
  }

}
