const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de motor de plantillas y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(useragent.express());

// Catálogo de 12 productos de servidor
const products = [
    { id: 1, name: "Intel Xeon Platinum 8380", cat: "cpu", price: 2800, specs: "40 Cores / 80 Threads", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" },
    { id: 2, name: "AMD EPYC 7763", cat: "cpu", price: 2900, specs: "64 Cores / 128 Threads", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086" },
    { id: 3, name: "RAM Kingston 64GB DDR4", cat: "ram", price: 350, specs: "3200MHz ECC Reg", img: "https://images.unsplash.com/photo-1562976540-1502c2145186" },
    { id: 4, name: "Samsung PM9A3 3.84TB", cat: "storage", price: 550, specs: "PCIe 4.0 NVMe U.2", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b" },
    { id: 5, name: "Intel Xeon Gold 6330", cat: "cpu", price: 1800, specs: "28 Cores / 56 Threads", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" },
    { id: 6, name: "AMD EPYC 7543", cat: "cpu", price: 2100, specs: "32 Cores / 64 Threads", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086" },
    { id: 7, name: "RAM Micron 128GB DDR5", cat: "ram", price: 850, specs: "4800MHz ECC Reg", img: "https://images.unsplash.com/photo-1562976540-1502c2145186" },
    { id: 8, name: "Micron 7450 PRO 7.68TB", cat: "storage", price: 950, specs: "PCIe 4.0 NVMe Enterprise", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b" },
    { id: 9, name: "Intel Xeon Silver 4314", cat: "cpu", price: 750, specs: "16 Cores / 32 Threads", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" },
    { id: 10, name: "RAM Corsair 32GB DDR4", cat: "ram", price: 220, specs: "2933MHz ECC Server", img: "https://images.unsplash.com/photo-1562976540-1502c2145186" },
    { id: 11, name: "Kioxia CD6-R 1.92TB", cat: "storage", price: 320, specs: "PCIe 4.0 NVMe U.3", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b" },
    { id: 12, name: "AMD EPYC 7313P", cat: "cpu", price: 1100, specs: "16 Cores / 32 Threads", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086" }
];

// FASE 2: Ruta RWD (Responsive)
app.get('/responsive', (req, res) => {
    res.render('responsive', { products });
});

// FASE 3: Ruta AWD (Adaptativo)
app.get('/adaptive', (req, res) => {
    if (req.useragent.isMobile) {
        res.render('mobile', { products });
    } else {
        res.render('desktop', { products });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
    console.log(`- Ruta RWD: http://localhost:${PORT}/responsive`);
    console.log(`- Ruta AWD: http://localhost:${PORT}/adaptive`);
});