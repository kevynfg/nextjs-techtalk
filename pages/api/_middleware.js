import {NextResponse} from 'next/server'

export function middleware(req, res, next){
    console.log('API Middleware', req.page)
    const {nextUrl: url} = req
    url.searchParams.set('date', '2022-04-29')
    return NextResponse.rewrite(url)
}