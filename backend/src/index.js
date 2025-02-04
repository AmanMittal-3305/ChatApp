import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {app, server} from './lib/socket.js';

dotenv.config();


const PORT = process.env.PORT || 5001;

// Middleware
app.use(cookieParser());
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);
app.use(express.json({ limit: '10mb' })); // Increase JSON payload limit
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Increase URL-encoded data limit

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Start Server & Connect DB
server.listen(PORT, async () => {
    console.log(`Server is running on Port: ${PORT}`);
    await connectDB();
});
