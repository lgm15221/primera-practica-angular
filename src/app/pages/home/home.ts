import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../components/card/card';
import { Title } from '../../components/title/title';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Title, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}