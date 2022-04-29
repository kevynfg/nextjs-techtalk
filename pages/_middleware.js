export function middleware(req, res, next){
    console.log('raiz', req.nextUrl)
    next
}