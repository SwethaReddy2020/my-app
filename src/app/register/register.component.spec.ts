import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize registration form', () => {
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.controls.firstName).toBeDefined();
    expect(component.registerForm.controls.lastName).toBeDefined();
    expect(component.registerForm.controls.address).toBeDefined();
    expect(component.registerForm.controls.contactNumber).toBeDefined();
    expect(component.registerForm.controls.email).toBeDefined();
    expect(component.registerForm.controls.profilePicture).toBeDefined();
    expect(component.registerForm.controls.password).toBeDefined();
  });

  it('should have a disabled Register button when form is invalid', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

  it('should enable Register button when form is valid', () => {
    component.registerForm.controls.firstName.setValue('John');
    component.registerForm.controls.lastName.setValue('Doe');
    component.registerForm.controls.address.setValue('123 Main St');
    component.registerForm.controls.contactNumber.setValue('1234567890');
    component.registerForm.controls.email.setValue('john.doe@example.com');
    component.registerForm.controls.profilePicture.setValue('file.jpg');
    component.registerForm.controls.password.setValue('password');
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeFalsy();
  });

  it('should submit the registration form', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
