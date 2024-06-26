import { analytics } from '@/app/utils/analytics'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      await analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return NextResponse.next()
}

export const matcher = {
  matcher: ['/'],
}