# rulex-ui-pubic-portal

Initial project setup.
# Rule-X — Public Landing Page

A fully static, zero-dependency public marketing site for the Rule-X rule engine platform.  
Inspired by the [Harness.io](https://harness.io) design language: dark navy, blue/cyan gradients, modern typography.

## Stack

- Pure HTML5 + CSS3 + vanilla JS  
- No build tools, no npm, no framework  
- Google Fonts (Inter) via CDN  
- 3 files: `index.html`, `styles.css`, `script.js`

## Local Preview

Just open `index.html` in any browser. No server needed.

```bash
# Or serve locally:
npx serve .
# or
python -m http.server 8080
```

## Sections

| Section | Description |
|---|---|
| Hero | Bold headline, stats, CTAs |
| Logo Strip | Industry verticals |
| Features | 9 feature cards |
| Block Types | All 13 rule block types with highlight pills |
| How It Works | 4-step process |
| Deployments | Pipeline visual mockup |
| Use Cases | 6 industry cards |
| Testimonials | 3 social proof quotes |
| Contact | Static form (Resend-ready) |
| Footer | Links, social, legal |

## Adding Resend Email Integration

When you have your Resend API key, open `script.js` and replace the comment block in `handleSubmit()` with:

```js
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_RESEND_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: 'Rule-X Contact <noreply@rule-x.io>',
    to: ['your@email.com'],
    subject: `New enquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  })
});
```

> Note: Calling Resend directly from a static page exposes your API key publicly.  
> For production, use a serverless function (Vercel Edge, Cloudflare Worker, etc.) as a proxy.

## Deployment

Works on any static host:
- **Vercel**: `vercel deploy`
- **Netlify**: drag-and-drop the folder
- **GitHub Pages**: push to `gh-pages` branch
- **Cloudflare Pages**: connect repo, no build command needed
