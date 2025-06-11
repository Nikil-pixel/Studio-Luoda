import formData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400
    });
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
  });

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Mailgun Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500
    });
  }
}
