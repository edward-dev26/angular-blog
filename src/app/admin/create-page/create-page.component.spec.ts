import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageComponent } from './create-page.component';
import {AppModule} from '../../app.module';
import {AdminModule} from '../admin.module';

describe('CreatePageComponent', () => {
  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePageComponent ],
      imports: [
        AppModule,
        AdminModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
