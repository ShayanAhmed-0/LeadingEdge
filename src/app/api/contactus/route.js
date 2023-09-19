import {NextRequest,NextResponse } from 'next/server'; 
import {db,contactus} from "../../../lib/drizzle"
// import {eq} from "drizzle-orm"

export const POST=async(request)=>{
    const req = await request.json()
    try {
        const res = await db.insert(contactus).values({
            name:req.name,
            email:req.email,
            phone:req.phone,
            message:req.message
        }).returning();
        return NextResponse.json({res})
    } catch (error) {
        return NextResponse.json({error})
    }
    }

  