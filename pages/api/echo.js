export default function echo(req,res){
  res.statusCode =200
  res.setHeader('Content-Type','application/json')
  res.end(JSON.stringify({
    messege: req.query.message ?? "Base message"
  }))
}
