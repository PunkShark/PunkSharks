import React, {useState, useEffect} from 'react'
import Sharks from '../pages/api/sharks/sharks-data.json'

const ProvenenceRecord = () => {


  
  const [getdata, setgetdata] = useState([]);



  const fetchData =  () => {
let SortData = Sharks.sort((a, b) => a.edition - b.edition);

           setgetdata(SortData);

  }


          useEffect(() => {
            fetchData();

            }, []);


            


    return (
        <div className="provenenceRecord">
         <div className="provenceGrid provenceGrid-1 pb-2">
         <div className="sharkID font-bold provenenceRTitles text-base opacity-80">PUNKSHARK ID</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">DNA HASH</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">Opensea</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">IPFS HASH</div>
         </div>






{
  getdata.map((currElement) =>{
    return(
<div className="provenceGrid provenceGrid-2 py-2">
         <div className="sharkID font-normal text-base opacity-80">{currElement.edition}</div>
          <div className="font-normal text-base opacity-80">{currElement.dna}</div>
          <a href={`https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/${currElement.edition}`} target="_blank" className="font-normal text-blue-700 hover:text-yellow-500  text-base opacity-80">View on Opensea</a>
          <a href={`https://gateway.pinata.cloud/ipfs/Qme4gVeMjq7QBHTikE3bUYHYb3gBCuzgdTyXsARCiTCx69/${currElement.edition}.png`} target="_blank" className="font-normal text-blue-700 hover:text-yellow-500  text-base opacity-80">View image</a>
         </div>


    )
  })
}
        

         </div>
        
            
    )
}

export default ProvenenceRecord
