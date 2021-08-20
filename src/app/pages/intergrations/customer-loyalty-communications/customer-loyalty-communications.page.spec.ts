import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerLoyaltyCommunicationsPage } from './customer-loyalty-communications.page';

describe('CustomerLoyaltyCommunicationsPage', () => {
  let component: CustomerLoyaltyCommunicationsPage;
  let fixture: ComponentFixture<CustomerLoyaltyCommunicationsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoyaltyCommunicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerLoyaltyCommunicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
