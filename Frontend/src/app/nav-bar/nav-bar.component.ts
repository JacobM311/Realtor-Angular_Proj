import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private readonly fixedHeight = 300;

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
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