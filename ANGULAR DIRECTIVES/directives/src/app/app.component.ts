import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  styleProp = 'c3';
  consitionClassProp = 'c4';

  getClassName() {
    return 'c5';
  }
  getProduct(val: any) {
    console.log(val);
  }

  styleprop = 'purple';
  stylePadding = '30px';
  stylebackground = 'blue';

  ngmodel: any;

  month = 0;
  success_mssg = true;
  success_msg = false;
  success_flag = true;

  successs_msg = true;

  // ngfor
  contacts = [
    {
      firstName: 'pooja',
      lastName: 'shetty',
      contactId: 1234,
    },
    {
      firstName: 'naga',
      lastName: 'darshan',
      contactId: 12345,
    },
    {
      firstName: 'tanuja',
      lastName: 'yy',
      contactId: 123456,
    },
  ];

  title = 'directives';
}
