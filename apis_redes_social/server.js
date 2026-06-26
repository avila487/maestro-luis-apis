const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname));

// Ruta que consume el flujo de datos (Stream) desde Bluesky
app.get('/api/bluesky', async (req, res) => {
    try {
        const actor = 'realmadridfc1.bsky.social';
        const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${actor}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la API de Bluesky. Status: ${response.status}`);
        }
        
        const data = await response.json();
        let posts = [];

        if (data.feed && data.feed.length > 0) {
            // Tomamos los últimos 5 para el flujo continuo
            const itemsToProcess = data.feed.slice(0, 5); 
            posts = itemsToProcess.map(item => ({
                text: item.post.record.text,
                date: item.post.record.createdAt
            }));
        }

        if (posts.length === 0) {
            posts = [{ text: "No se encontraron publicaciones recientes.", date: new Date().toISOString() }];
        }

        res.json({ items: posts });

    } catch (error) {
        console.error("Error en Backend:", error.message);
        res.status(500).json({ error: 'Error al procesar el stream de Bluesky' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`API de Streaming corriendo en http://localhost:${PORT}`);
});
