import { Injectable } from '@nestjs/common';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
  createdAt: Date;
}

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private idCounter = 1;

  findAll(): Feedback[] {
    return this.feedbacks;
  }

  create(name: string, feedback: string): Feedback {
    const newFeedback = {
      id: this.idCounter++,
      name,
      feedback,
      createdAt: new Date(),
    };
    this.feedbacks.push(newFeedback);
    return newFeedback;
  }
}
