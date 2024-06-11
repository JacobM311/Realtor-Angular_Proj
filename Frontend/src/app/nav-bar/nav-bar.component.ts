import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  @ViewChild('loginForm') loginForm!: NgForm;

  onLoginSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login Form Data:', form.value);
    }
  }

  resetForm() {
    if (this.loginForm) {
      this.loginForm.resetForm();
    }
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