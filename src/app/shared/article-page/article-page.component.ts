import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article: Article | undefined;

  articles: Article[] = [
    {
      title: 'Noteworthy technology acquisitions 2021',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      content: 'Dolore laboris culpa est sint veniam adipisicing elit cupidatat adipisicing exercitation nulla. Cupidatat sint tempor amet et est duis commodo do sit ullamco in voluptate labore qui. Adipisicing magna proident Lorem magna nostrud laboris velit quis labore id laborum.',
      link: '/articles/tech-acquisitions-2021',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img8.jpg'
    },
    {
      title: 'Breaking the barriers of quantum computing',
      description: 'Exploring the latest advancements in quantum computing and their potential impact on various industries.',
      content: 'Adipisicing excepteur excepteur culpa pariatur ut dolor voluptate sint ex mollit voluptate. Nostrud reprehenderit minim dolore irure. Cillum dolore nisi duis excepteur cupidatat elit. Nisi ex amet incididunt do laboris officia irure sit do minim. Sint reprehenderit consectetur amet elit consectetur commodo enim est aute occaecat eu quis non. Magna ad reprehenderit ullamco minim enim amet occaecat non enim ullamco aliqua laboris consectetur non. Adipisicing labore consectetur duis veniam quis sit tempor fugiat irure fugiat tempor cupidatat.',
      link: '/articles/quantum-computing-breakthrough',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img7.jpg'
    },
    {
      title: 'The future of AI in healthcare',
      description: 'How AI is revolutionizing the healthcare industry and its potential for future developments.',
      content: 'Sunt cillum in consequat sunt aliqua. Fugiat laboris nostrud id est qui qui elit laborum ad eu nostrud. Enim qui reprehenderit aliquip laborum ullamco aute exercitation occaecat laboris dolor anim. Pariatur minim id aliqua pariatur esse incididunt Lorem minim officia est ut. Ea amet enim cupidatat voluptate tempor tempor excepteur ea tempor nisi quis. Consequat anim ea magna ullamco commodo irure.',
      link: '/articles/future-ai-healthcare',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img6.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.articles.find(article => article.link.endsWith(slug!));
  }
}
