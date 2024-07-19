import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDiaologComponent } from './remove-diaolog.component';

describe('RemoveDiaologComponent', () => {
  let component: RemoveDiaologComponent;
  let fixture: ComponentFixture<RemoveDiaologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveDiaologComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDiaologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
