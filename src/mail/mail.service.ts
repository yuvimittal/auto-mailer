import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import path from 'path';
import { mailHtml } from 'src/mail/mail.helper';
import { readFileSync } from 'fs';

const resumePath = path.join(__dirname, '..', '..', 'assets', 'resume.pdf');
const resumeBuffer = readFileSync(resumePath);
const subject = 'Mail Subject: Job Application';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendJobMail(to: string): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        html: mailHtml(),
        attachments: [
          {
            filename: 'Resume.pdf',
            contentType: 'application/pdf',
            content: resumeBuffer,
          },
        ],
      });
      console.log(`Mail sent to ${to}\n`);
    } catch (error) {
      console.error('Error sending mail:', error);
      throw error;
    }
  }
}
