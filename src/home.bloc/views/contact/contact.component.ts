import { Component, OnInit } from '@angular/core';

import { CompanyModel } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

import { ConfigService, ConfigModel } from '../../../core/index';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactViewComponent implements OnInit {
  public contactInfo: any;
  public version: string = '';
  public title = 'Version View Component';
  public companyName = '';
  public companyLogo = '';
  public companyAddress = '';
  public companyAddress2 = '';
  public companyCity = '';
  public companyState = '';
  public companyZip = '';
  public companyEmail = '';
  public companyPhone = '';

  constructor(private service: CompanyService, private configService: ConfigService) { }

  public ngOnInit() {
    this.service.getCompanyInfo().subscribe((contact) => {
      this.contactInfo = contact;
      this.companyName = contact.name;
      this.companyLogo = contact.logo;
      this.companyAddress = contact.address;
      this.companyAddress2 = contact.address2;
      this.companyCity = contact.city;
      this.companyState = contact.state;
      this.companyZip = contact.zip;
      this.companyEmail = contact.email;
      this.companyPhone = contact.phone

    });

    this.configService.getConfigSettings().subscribe((cfgSettings) => {
      this.version = cfgSettings.version;
      this.title = cfgSettings.title;
    });
  }

}
