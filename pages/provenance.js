import React from 'react'
import Head from 'next/head'
import ProvenenceRecord from '../components/ProvenenceRecord';
import HeaderProvenance from '../components/HeaderProvenance'
import Link from 'next/link'
import ConcatinatedHashString from '../components/ConcatinatedHashString'


const provenance = () => {
    return (
     <>
        <Head>
       <title>Provenance Record</title>
       <link rel="shortcut icon" href="/images/small-shark2.png" />
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
     </Head>

     <HeaderProvenance/>










<div id="details" className="widthMax mx-auto text-center px-7 mt-32 mb-32 scroll-mt-32">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Contract Details</div>
<div className="flex items-center contractFlex justify-center mx-auto w-full">
<div className="contractWord text-xl opacity-80">Verified Smart Contract</div>
<a className="w-fit border-b-2 border-blue-500 text-blue-600 transition hover:border-yellow-500 hover:text-yellow-500 contractLink" href="https://polygonscan.com/token/0xB536eFc10864408A2F491D1A6dFb0e76567C6659" style={{wordBreak: "normal"}}>0xB536eFc10864408A2F491D1A6dFb0e76567C6659</a>
</div>


<div className="flex items-center contractFlex justify-center mx-auto w-full mt-7">
<div className="contractWord text-xl opacity-80">Final Proof Hash</div>
<a className="w-fit border-b-2 border-blue-500 text-blue-600 transition hover:border-yellow-500 hover:text-yellow-500 contractLink" href="https://gateway.pinata.cloud/ipfs/QmWBDfXDr7YCw37fkHLTZg8zZmTCnvR2oCQdZk9aEDrVRh/_metadata.json" style={{wordBreak: "normal"}}>QmWBDfXDr7YCw37fkHLTZg8zZmTCnvR2oCQdZk9aEDrVRh</a>
</div>


<p className="text-center mt-10 specs mx-auto">The PunkSharks are 32 bit pixel art NFT images and generated algorithmically. These are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. Check Provenance Record below </p>
</div>




<div className=" widthMax mx-auto px-7 mb-10">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">CONCATENATED HASH STRING</div>


<ConcatinatedHashString/>

</div>






<div className="widthMax overflow-hidden mx-auto px-7 mt-32 mb-10">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Provenence Record</div>
<p className="specs mx-auto text-center mb-14"> 
Each PunkShark artwork contains a unique DNA hash stored on the blockchain and its ownership can be verified. All metadata is permanently stored on the IPFS. A combined hash string is obtained by concatenating DNA hash of each Punkshark image in the specific order listed below. 
</p>
<ProvenenceRecord/>


</div>

</>

    )
}

export default provenance





