import { connectToDatabase } from "@/helpers/server_helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'


export const POST = async (req: Request) => { // http://localhost:3000/api/add_link
    try {
        const { url, shortUrl, email} = await req.json();
        if(!url || !email || !shortUrl) return NextResponse.json({ error: 'Error no urls' }, { status: 422 });
        await connectToDatabase();
        const newUrl = await prisma.shortUrl.create({data: { url, shortUrl, email}});
        return NextResponse.json(newUrl, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const GET = async (req: NextRequest) => { // http://localhost:3000/api/add_link?query=123456
    try {
        await connectToDatabase();
        const  searchParams  = req.nextUrl.searchParams;
        const email = searchParams.get('query')
        
        if (!email) {
            return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
        }
        
        const urls = await prisma.shortUrl.findMany({
            where: {
                email
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

// export const GET = async (req: Request) => { // all
//     try {
//         await connectToDatabase();
//         const urls = await prisma.shortUrl.findMany();
//         return NextResponse.json(urls, { status: 200 });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ error: 'Server Error' }, { status: 500 });
//     } finally {
//         await prisma.$disconnect();
//     }
// };