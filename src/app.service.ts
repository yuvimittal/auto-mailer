import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

const TIMEOUT_MS = 6000;
const BATCH_SIZE = 5;

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}

  async sendMailParallel(to: string[]): Promise<boolean> {
    for (let i = 0; i < to.length; i += BATCH_SIZE) {
      const batch = to.slice(i, i + BATCH_SIZE);

      await Promise.allSettled(
        batch.map((toAddress) => this.mailService.sendJobMail(toAddress)),
      );

      console.log(`✅ Batch ${i / BATCH_SIZE + 1} sent...`);
      await new Promise((res) => setTimeout(res, TIMEOUT_MS));
    }

    return true;
  }
}
