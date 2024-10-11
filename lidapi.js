require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');

const PORT = process.env.PORT || 5001;
const app = express();

// Массив разрешенных доменов
const allowedOrigins = [
    'https://www.kia-bishkek.kg',
    'https://another-domain.com',
    'http://localhost:3000', // локальный домен для разработки
    // Добавьте другие домены по необходимости
];

// Настройка CORS
app.use(cors({
    origin: (origin, callback) => {
        // Если origin равен null (например, при запросах из Postman), разрешаем
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin); // Разрешаем
        } else {
            callback(new Error('Not allowed by CORS')); // Отказываем
        }
    },
    credentials: true, // Если нужны куки
}));

app.use(express.json());
app.use(cookieParser());
app.options('*', cors()); // Обработка preflight запросов
app.use('/lidapi', router);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
