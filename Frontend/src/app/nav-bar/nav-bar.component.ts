import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy {

  @ViewChild('loginForm') loginForm!: NgForm;
  formSubmitted: boolean = false;

  onPasswordChange(password: any): void {
    const passwordValue = password.value;
    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasNumbers = /[0-9]/.test(passwordValue);
    const hasSpecialCharacters = /[!@#$%^&*]/.test(passwordValue);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialCharacters) {
      password.control.setErrors({ invalidPassword: true });
    } else {
      password.control.setErrors(null);
    }
  }

  onLoginSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log('User created:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error:', errorCode, errorMessage);
        });
    }
  }

  resetForm() {
    if (this.loginForm) {
      this.loginForm.resetForm();
    }
    this.formSubmitted = false;
  }

  private readonly fixedHeight = 307;

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);

    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.resetForm();
      });
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll = (): void => {
    const searchBar = document.getElementById('searchBar');

    if (window.scrollY > this.fixedHeight && searchBar) 
    {
      searchBar.classList.add('visible');
      searchBar.style.display = 'block';
    } 
    else if (window.scrollY < this.fixedHeight && searchBar)
    {
      searchBar.style.display = 'none';
    }
  }
}