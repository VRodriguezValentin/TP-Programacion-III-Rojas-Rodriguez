//npx puppeteer browsers install chrome
const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

router.post('/api/generar-ticket-pdf', async (req, res) => {
    const { html } = req.body;
    if (!html) {
        return res.status(400).send('No se pudo obtener el HTML del PDF');
    }
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A5', printBackground: true, pageRanges: '1'});
        await browser.close();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="ticket_pocketstore.pdf"',
        });
        res.send(pdfBuffer);
    } catch (err) {
        console.error('Error al generar el PDF:', err);
        res.status(500).send('Error al generar el PDF');
    }
});

module.exports = router;