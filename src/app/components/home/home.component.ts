import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scroll(
        'app-down-arrow,  #top_bar_scroll_to_about, #top_bar_scroll_to_venue_placeholder',
        'app-about-content'
    );

    this.scroll(
        '#top_bar_scroll_to_speaker',
        'app-speaker-content'
    );

    this.scroll(
        '#footer_copyright, #footer_notice, #footer_privacy, #footer_sitemap',
        '#landing',
        1000
    );
  }

  scroll(from, to, duration = 600) {
    $(from).on( 'click', () => {
      $('html, body').animate({
            scrollTop: $(to).offset().top
          }, duration
      );
    });
  }
}
