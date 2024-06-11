import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  findAll() {
    return this.feedbackService.findAll();
  }

  @Post()
  create(@Body() createFeedbackDto: { name: string, feedback: string }) {
    const { name, feedback } = createFeedbackDto;
    if (!name || !feedback) {
      throw new BadRequestException('Name and feedback are required');
    }
    return this.feedbackService.create(name, feedback);
  }
}

