// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();

// Multer setup for file uploads (store in memory for email attachment)render
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
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

if (!API_KEY || !MAIL_USER || !MAIL_PASS) {
  console.error('❌ Please set CONTACT_API_KEY, MAIL_USER, MAIL_PASS in .env');
  process.exit(1);
}

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

// Transporter Configuration (Using Custom SMTP)
const transporter = nodemailer.createTransport({
  host: MAIL_HOST, 
  port: MAIL_PORT, 
  secure: true, // true for port 465
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS, 
  },
});

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
    const mailOptions = {
      from: `"Pavion Website" <${MAIL_USER}>`,
      to: 'contact@paviontechnologies.com', // ✅ Yahan mail aayega
      replyTo: email,
      subject: `New message from ${name} - ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h2>New message from Pavion Technologies website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent from', email);
    return res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('❌ Mail error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
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
    const mailOptions = {
      from: `"Pavion Careers" <${MAIL_USER}>`,
      to: 'contact@paviontechnologies.com', // ✅ Yahan application aayegi
      replyTo: email,
      subject: `New Job Application from ${fullName}`,
      text: `
New Job Application Received

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Location: ${location}
LinkedIn: ${linkedinUrl || 'Not provided'}

Cover Letter / Why Join Us:
${coverLetter}
      `,
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
      attachments: req.file ? [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        }
      ] : [],
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Career application email sent from', email);
    return res.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('❌ Career mail error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Contact server running on http://localhost:${PORT}`);
});