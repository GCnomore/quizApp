import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice, Question } from './quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  answers: Answers;
  quiz: Quiz;
  currentQuestionIndex: number;
  private showResults = false;
  title: 'This-Quiz';

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getJSON('frenchQuiz').subscribe((data) => {
      this.quiz = new Quiz('frenchQuiz', data);
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }
  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }
  nextOrViewResults() {
    if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
      this.showResults = true;
      return;
    }
    this.currentQuestionIndex++;
  }
}
