import { NextResponse } from 'next/server';
 
export async function middleware() {
  const response = NextResponse.next();
 
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self' https: data:; img-src 'self' https: data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:;"
  );
 
  return response;
}
 
export const config = {
  matcher: '/:path*',
}