import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const token = req?.cookies?.get('__ca_otw') || '';
  const path = req.nextUrl.pathname;
  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/profile/:path*';
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', req.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
};
export const config = {
  matcher: ['/profile/:path*', '/confirm-order', '/login', '/signup'],
};
