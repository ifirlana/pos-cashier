import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectBlankComponent } from './redirect-blank.component';

describe('RedirectBlankComponent', () => {
  let component: RedirectBlankComponent;
  let fixture: ComponentFixture<RedirectBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
