import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request){
    try{
        const result = await sql`SELECT * FROM produto`;//substituir pelo comando que desejar, pode criar campos, tabelas, consultas...
        
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json( { error }, { status: 200 });
    }
}