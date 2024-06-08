import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll = (): void => {
    const searchBar = document.getElementById('searchBar');
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;

    if (window.scrollY > navbarHeight && searchBar) 
    {
      searchBar.classList.add('visible');
      if (searchBar) searchBar.style.display = 'block';
    } 
    if (window.scrollY < navbarHeight && searchBar)
    {
      if (searchBar) searchBar.style.display = 'none';
    }
  }
}