import { connectToDatabase } from "@/helpers/server_helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'


export const GET = async (req: NextRequest) => { // http://localhost:3000/api/redirect?query=123456
    try {
        await connectToDatabase();
        const  searchParams  = req.nextUrl.searchParams;
        const shortUrl = searchParams.get('query')
        
        if (!shortUrl) {
            return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
        }
        
        const urls = await prisma.shortUrl.findUnique({
            where: {
                shortUrl
            }
        });

        return NextResponse.json(urls, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

