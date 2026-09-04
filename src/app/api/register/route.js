import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();

    // --- FIELD LABELS FOR EMAIL ---
    const fieldLabels = {
      name: 'Name',
      email: 'Email Id',
      contactNumber: 'Contact Number',
      college: 'College / Institute',
      course: 'Course / Program',
      yearOfStudy: 'Year of Study',
      interests: 'Interests / Hobbies',
      whyJoin: 'Why do you want to join the Camp?',
      academicProfile: 'Academic and Co-curricular Profile',
      sports: 'Recent Book Read (if any)',
      musicDanceArt: 'Music / Dance / Art Interest',
      trekkingExperience: 'Sports / Trekking / Hiking Experience',
      fieldNgoExperience: 'Field / NGO Experience',
      previousCampExperience: 'Previous Camp Experience',
      medicalIssues: 'Medical Issues / Allergies',
      fellowshipProgram: 'Fellowship Program',
      fellowshipDetails: 'Fellowship Details',
      expectations: 'Expectations from Camp',
      skills: 'Skills / Strengths',
    };

    // --- BASIC SERVER-SIDE VALIDATION (only mandatory fields) ---
    const requiredFields = [
      'name', 'email', 'contactNumber', 'college', 'course', 'yearOfStudy', 'whyJoin',
      'medicalIssues', 'expectations',
    ];
    const missingFields = requiredFields.filter(
      (field) => !body[field] || !body[field].toString().trim()
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          fields: missingFields.map((f) => fieldLabels[f]),
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone format validation
    const cleanedPhone = body.contactNumber.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // --- BUILD EMAIL HTML ---
    const escapeHtml = (str) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br/>');

    const allFieldKeys = Object.keys(fieldLabels);
    const rows = allFieldKeys
      .map(
        (field) => `
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #1b4332; vertical-align: top; white-space: nowrap; width: 220px;">
          ${fieldLabels[field]}
        </td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb; color: #374151; vertical-align: top;">
          ${body[field]?.trim() ? escapeHtml(body[field]) : '<span style="color: #9ca3af;">N/A</span>'}
        </td>
      </tr>
    `
      )
      .join('');

    const emailHtml = `
      <div style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); padding: 32px 28px; border-radius: 16px 16px 0 0;">
          <h1 style="color: #d8f3dc; margin: 0 0 8px; font-size: 24px;">🌿 New Camp Registration</h1>
          <p style="color: #b7e4c7; margin: 0; font-size: 14px;">Sahyadri Rural Connect – Registration Form Submission</p>
        </div>
        <div style="background: #ffffff; padding: 0; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
          Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </p>
      </div>
    `;

    // --- CONFIGURE TRANSPORTER ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --- SEND EMAIL ---
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
      subject: `📋 New Registration: ${body.name} — Sahyadri Rural Connect`,
      html: emailHtml,
      replyTo: body.email,
    });

    // --- OPTIONAL: SEND TO GOOGLE SHEETS VIA APPS SCRIPT WEBHOOK ---
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      } catch (sheetError) {
        // Log but don't fail the registration if sheet sync fails
        console.error('Google Sheets sync failed:', sheetError);
      }
    }

    return NextResponse.json(
      { message: 'Registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}
