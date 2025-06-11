// backend/routes/ticket.js
const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

router.post('/api/generar-ticket-pdf', async (req, res) => {
    const { html } = req.body;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
        await browser.close();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="ticket_pocketstore.pdf"',
        });
        res.send(pdfBuffer);
    } catch (err) {
        res.status(500).send('Error al generar el PDF');
    }
});

module.exports = router;