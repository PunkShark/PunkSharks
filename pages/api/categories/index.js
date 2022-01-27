// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Categories from './categories.json';
export default function helloAPI(req, res) {
if(req.method === 'GET'){
  res.status(200).json(Categories)

}


else{
  res.status(401).json('Only "GET" request are allowed')
}


}
