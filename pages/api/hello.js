// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const date = new Date().toISOString();
  const {method} = req;
  switch (method) {
    case 'GET':
      console.log('entrei no get')
      break;
    default:
      break;
  }
  res.setHeader('Cache-Control', 's-maxage=5', 'stale-while-revalidate')
  res.status(200).json({ name: 'John Doe', date })
}
