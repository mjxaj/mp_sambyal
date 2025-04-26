# Setting Up Email Functionality

This guide will help you set up the email functionality in the website so that the contact form works correctly.

## Prerequisites
- A Gmail account (recommended: mpratap0024@gmail.com)
- Two-factor authentication enabled on your Google account

## Step 1: Generate an App Password
1. Go to your Google Account at [https://myaccount.google.com/](https://myaccount.google.com/)
2. In the navigation panel, select Security
3. Under "Signing in to Google," select 2-Step Verification
4. At the bottom of the page, select App passwords
5. Enter a name for the app password (e.g., "MP Sambyal Website")
6. Click Create
7. Google will display the generated app password. Copy this password.

## Step 2: Set Up Environment Variables
1. Copy the `.env.local.example` file to a new file called `.env.local`
2. Open the `.env.local` file and update the values:
   ```
   EMAIL_USER=mpratap0024@gmail.com
   EMAIL_PASS=your_app_password_from_step_1
   ```
3. Save the file

## Step 3: Enable Email Sending in the Code
1. Open the file `src/app/api/contact/route.ts`
2. Uncomment the nodemailer implementation section (remove the `/*` and `*/` markers)
3. Save the file

## Step 4: Test the Email Functionality
1. Run the website locally with `npm run dev`
2. Fill out the contact form and submit it
3. You should receive the email at mpratap0024@gmail.com

## Troubleshooting
- If emails are not being sent, check the console logs for error messages
- Verify that the app password is correct
- Make sure your Gmail account doesn't have any security settings that might block the application
- Check if your internet connection is stable

## Production Deployment
When deploying to production, make sure to set the environment variables in your hosting provider's settings panel (e.g., Vercel, Netlify).

## Security Note
Never commit your `.env.local` file to a public repository as it contains sensitive information. The `.gitignore` file should already be configured to exclude it. 