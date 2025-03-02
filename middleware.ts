// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value; // Simulate auth with a cookie

  if (request.nextUrl.pathname.startsWith("/protected") && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"], // Only run on /protected and subpaths
};