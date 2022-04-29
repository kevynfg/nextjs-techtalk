export default function handle(req, res) {
    const {id} = req.query
    console.log('query', req.query)
    res.end(`Paths:${id.join(', ')}` )
}