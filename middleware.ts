import { NextRequest, NextResponse } from "next/server";

export default function middleware(req:NextRequest){
    const JWTSECRET = process.env.JWT_SECRET
    console.log(JWTSECRET)
    const token = req.cookies.get("token")?.value
    let url = req.url

    if(!token && url.includes('/movies')){
        return NextResponse.redirect("http://localhost:3000/")
    }

    if(token && url === "http://localhost:3000/"){
        return NextResponse.redirect("http://localhost:3000/movies")
    }
}