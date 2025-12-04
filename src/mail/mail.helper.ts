export const mailHtml = (): string => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f6f8; margin: 0; padding: 40px;">
    <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 28px 36px; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
      <p style="font-size: 16px; color: #222;">Hello, <a href="https://www.linkedin.com/in/yourname/">I am <name here>.</a> Hope you're doing well.</p>

      <!-- email body here -->

      <div style="margin-top: 28px; border-top: 1px solid #eee; padding-top: 16px;">
        <p style="margin: 0; font-weight: 600; color: #111;">Your Name</p>
        <p style="margin: 4px 0; font-size: 14px; color: #555;">email@example.com</p>
        <p style="margin: 0; font-size: 14px;">
        </p>
      </div>
    </div>
  </body>
</html>
`;
