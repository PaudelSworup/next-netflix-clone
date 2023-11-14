import { NextRequest, NextResponse } from "next/server";

export default function middleware(req:NextRequest){
    const token = req.cookies.get("token")?.value
    let url = req.url

    if(!token && url.includes('/movies')){
        return NextResponse.redirect("https://next-netflix-clone-orpin.vercel.app/")
    }

    if(token && url === "https://next-netflix-clone-orpin.vercel.app/"){
        return NextResponse.redirect("https://next-netflix-clone-orpin.vercel.app/movies")
    }
}