// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from './sharks-data.json';

export default function helloAPI(req, res) {
if(req.method === 'GET'){

let SortData = Sharks.sort((a, b) => a.edition - b.edition);
 

  res.status(200).json(SortData)

}




else{
  res.status(401).json('Only "GET" request are allowed')
}



}










// for single id




// [singleShark].js

// import Sharks from './sharks-data.json';
// export default function helloAPI(req, res) {
//   let {singleShark} = req.query;
//   let shark = Sharks.find((shark) => shark.id === parseInt(singleShark));

// if(req.method === 'GET'){
//   res.status(200).json(shark)


// }


// else{
//   res.status(401).json('Only "GET" request are allowed')
// }


// }
