require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');

const PORT = process.env.PORT || 5001;
const app = express();

// Настройка CORS
const allowedOrigins = ['https://www.kia-bishkek.kg/'];
app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Маршруты
app.use('/lidapi', router);

// Запуск сервера
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        });
    } catch (e) {
        console.error('Error starting server:', e);
    }
};

start();
