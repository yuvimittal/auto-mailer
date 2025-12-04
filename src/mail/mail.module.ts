import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { google } from 'googleapis';
import { MailService } from './mail.service';
import dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => {
        const OAuth2 = google.auth.OAuth2;
        console.log('Setting up OAuth2 Client for Gmail...');
        const oauth2Client = new OAuth2(
          process.env.CLIENT_ID,
          process.env.CLIENT_SECRET,
          'https://developers.google.com/oauthplayground',
        );

        oauth2Client.setCredentials({
          refresh_token: process.env.REFRESH_TOKEN,
          access_token: process.env.ACCESS_TOKEN,
        });

        const accessToken = await oauth2Client.getAccessToken();

        return {
          transport: {
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.EMAIL,
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken: accessToken.token!,
            },
          },
          defaults: {
            from: `"Your Name" <${process.env.EMAIL}>`,
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
