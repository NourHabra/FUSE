const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { handleError, matchPassword, notEmpty } = require('./errorController');
const secretKey = process.env.JWT_SECRET;
const maxAge = 60 * 60 * 1000;

async function register(req, res) {
    try {
        const { name, email, password, rPassword, role } = req.body;
        await notEmpty(name, email, password, rPassword);
        await matchPassword(password, rPassword);

        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                password
            },
        });

        const token = jwt.sign({ userId: newUser.id, role: role || "User" }, secretKey, { expiresIn: '1h' });
        res.cookie("jwt", token,  { httpOnly: true, maxAge: maxAge });
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        await handleError(error, res);
    }
}


async function login(req, res) {
    try {
        const { id, password } = req.body;
        await notEmpty(id, password);

        const user = await prisma.users.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }else if(user.password === password){
            const token = jwt.sign({ userId: user.id, role: "user" }, secretKey, { expiresIn: '1h' });
            res.cookie("jwt", token,  { httpOnly: true, maxAge: maxAge});
            return res.json("success");
        }else{
            return res.status(409).json({ message: 'wronge password' });
        }

    } catch (error) {
        await handleError(error, res);
    }
}

async function logout(req, res) {
    res.cookie('jwt', '', { maxAge: 1 });
    res.json({logout : "True"});
}

module.exports = { register, login, logout };
