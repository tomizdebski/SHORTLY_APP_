import { connectToDatabase } from "@/helpers/server_helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json();
        if(!name || !email || !password) return NextResponse.json({ error: 'Please fill all fields' }, { status: 422 });
        const hashedPassword = await  bcrypt.hash(password, 10);
        await connectToDatabase();
        const user = await prisma.user.create({data: { name, email}});
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};