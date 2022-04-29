export function middleware(req, res, next){
    console.log('pokemon middleware', req.page)
    const geo = {
        ip: req.ip,
        geo: req.geo
    }
    return new Response(JSON.stringify(geo))
}