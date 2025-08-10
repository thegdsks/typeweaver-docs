import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Temporarily disable middleware redirects to fix proxy issues
  // Only redirect root path, not docs paths that are being proxied
  const host = request.headers.get('host');
  const pathname = request.nextUrl.pathname;
  
  // Only redirect root path for direct access to docs subdomain
  if (host?.includes('docs.typeweaver.com') && pathname === '/') {
    return NextResponse.redirect('https://typeweaver.com/docs', 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};