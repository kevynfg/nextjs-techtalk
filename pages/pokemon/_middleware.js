export function middleware(req, res, next){
    console.log('pokemon middleware', req.page)

    return new Response({
        ip: req.ip,
        geo: req.geo
    })
}