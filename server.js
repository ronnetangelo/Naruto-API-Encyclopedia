
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get(/^\/api\/(.*)$/, async (req, res) => {
    try {
        const upstreamPath = req.params[0];
        const qs = new URLSearchParams(req.query).toString();

        const target = `https://dattebayo-api.onrender.com/${upstreamPath}${qs ? '?' + qs : ''}`;

        console.log('📡 Proxy:', target);

        const response = await fetch(target);
        const contentType = response.headers.get('content-type') || '';

        if (contentType.includes('image/')) {
            res.setHeader('Content-Type', contentType);
            const buffer = Buffer.from(await response.arrayBuffer());
            return res.send(buffer);
        }

       
        const data = await response.json();
        return res.json(data);

    } catch (error) {
        console.error('❌ Proxy error:', error);
        return res.status(500).json({
            error: 'Proxy fetch failed',
            details: String(error)
        });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
