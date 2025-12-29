// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const multer = require('multer');

const app = express();

// Multer setup for file uploads (store in memory for email attachment)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
    }
  }
});

// ENV values
const PORT = process.env.PORT || 4000;
const API_KEY = process.env.CONTACT_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_TO = process.env.MAIL_TO || 'paviontechnologies@gmail.com';

if (!API_KEY || !RESEND_API_KEY) {
  console.error('❌ Please set CONTACT_API_KEY and RESEND_API_KEY in .env');
  process.exit(1);
}

// Initialize Resend
const resend = new Resend(RESEND_API_KEY);

// CORS allow
app.use(
  cors({
    origin: [
      'http://localhost:5173',                     // dev
      'http://127.0.0.1:5173',                      // dev with IP address
      'https://melodic-tapioca-fbbff4.netlify.app', // Netlify
      'https://paviontechnologies.com',            // domain
      'https://www.paviontechnologies.com',        // www version of domain
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-api-key', 'Authorization'],
  })
);

// JSON body parse
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Contact backend is running ✅');
});

// MAIN CONTACT ROUTE
app.post('/api/contact', async (req, res) => {
  const clientKey = req.headers['x-api-key'];

  if (!clientKey || clientKey !== API_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Pavion Website <onboarding@resend.dev>', // Use Resend's default domain
      to: [MAIL_TO],
      replyTo: email,
      subject: `New message from ${name} - ${subject}`,
      html: `
        <h2>New message from Pavion Technologies website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }

    console.log('✅ Contact email sent from', email, 'ID:', data.id);
    return res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('❌ Mail error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// CAREERS APPLICATION ROUTE
app.post('/api/careers', upload.single('resume'), async (req, res) => {
  const clientKey = req.headers['x-api-key'];

  if (!clientKey || clientKey !== API_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { fullName, email, phone, location, linkedinUrl, coverLetter } = req.body;

  if (!fullName || !email || !phone || !location || !coverLetter) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const emailOptions = {
      from: 'Pavion Careers <onboarding@resend.dev>',
      to: [MAIL_TO],
      replyTo: email,
      subject: `New Job Application from ${fullName}`,
      html: `
        <h2>🎯 New Job Application - Pavion Technologies</h2>
        <hr style="border: 1px solid #eee;" />
        <h3>Applicant Details:</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; background: #f9f9f9; font-weight: bold; width: 150px;">Full Name:</td>
            <td style="padding: 10px; background: #f9f9f9;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Email:</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; background: #f9f9f9;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Location:</td>
            <td style="padding: 10px;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">LinkedIn:</td>
            <td style="padding: 10px; background: #f9f9f9;">${linkedinUrl ? `<a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a>` : 'Not provided'}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px;">Cover Letter / Why Join Us:</h3>
        <div style="padding: 15px; background: #f5f5f5; border-left: 4px solid #6366f1; margin: 10px 0;">
          ${coverLetter.replace(/\n/g, '<br/>')}
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          ${req.file ? '📎 Resume attached to this email' : '⚠️ No resume attached'}
        </p>
      `,
    };

    // Add attachment if resume is uploaded
    if (req.file) {
      emailOptions.attachments = [{
        filename: req.file.originalname,
        content: req.file.buffer,
      }];
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('❌ Resend career error:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }

    console.log('✅ Career application email sent from', email, 'ID:', data.id);
    return res.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('❌ Career mail error:', err);
    return res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Contact server running on http://localhost:${PORT}`);
});