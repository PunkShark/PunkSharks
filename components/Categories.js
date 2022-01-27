import React from 'react'
import {useEffect, useState} from "react";
import CategoriesData from '../pages/api/categories/categories.json'


const Categories = () => {

    const [getdata, setgetdata] = useState([]);



  const fetchData =  () => {
           setgetdata(CategoriesData);

  }


          useEffect(() => {
            fetchData();

            }, []);
            
    return (
        <>

		<div className="topCategoryGrid grid w-full border-b pb-7  border-gray-300">
         <div className="font-bold opacity-70 text-xl ">Type</div>
         <div className="font-bold opacity-70 text-xl ">#</div>
         <div className="font-bold opacity-70 text-xl ">More Examples</div>
		</div>



		<div className="mainContCategory w-full">
			{
				getdata.slice(0, 7).map((currElement) =>{
					return(
						<div className="border-b  border-gray-300" key={currElement.id}>
							<div className="grid mainCategoryGrid">
             <div className="font-bold py-2 flex items-center text-orange-400 categoryName">{currElement.category}</div>
             <div className="font-bold opacity-70  text-base py-2 flex items-center">{currElement.numbers}</div>
             <div className="flex items-center flex-wrap imagesContCategoriess py-1">{ currElement.image.map((getImage) =>{
		return(
		  <a href={getImage.openseaLink} key={getImage.openseaLink} target="_blank" className="sharkCategoryImage relative block"><img src={getImage.imageLink} alt="Shark Image" /></a>
		)
	})
 }
 </div>


</div>
						</div>
					)
				})
			}
		</div>





    <div className="topCategoryGrid grid w-full border-b pt-5 pb-3 mt-5  border-gray-300">
    <div className="font-bold opacity-70 text-xl">Accessories</div>
    </div>

    <div className="topCategoryGrid grid w-full border-b py-5  border-gray-300">
         <div className="font-bold opacity-70 text-xl ">Attributes</div>
         <div className="font-bold opacity-70 text-xl ">#</div>
         <div className="font-bold opacity-70 text-xl ">More Examples</div>
		</div>

    <div className="mainContCategory w-full">
			{
				getdata.slice(7, 35).map((currElement) =>{
					return(
						<div className="border-b  border-gray-300" key={currElement.id}>
							<div className="grid mainCategoryGrid">
             <div className="font-bold py-2 flex items-center text-orange-400 categoryName">{currElement.category}</div>
             <div className="font-bold opacity-70  text-base py-2 flex items-center">{currElement.numbers}</div>
             <div className="flex items-center imagesContCategoriess flex-wrap py-1">{ currElement.image.map((getImage) =>{
		return(
		  <a href={getImage.openseaLink} key={getImage.openseaLink} target="_blank" className="sharkCategoryImage relative block"><img src={getImage.imageLink} alt="Shark Image" /></a>
		)
	})
 }
 </div>


</div>
						</div>
					)
				})
			}
		</div>







		<div className="topCategoryGrid grid w-full border-b py-5  pt-7 border-gray-300">
         <div className="font-bold opacity-70 text-xl ">Rarity Count</div>
         <div className="font-bold opacity-70 text-xl ">#</div>
         <div className="font-bold opacity-70 text-xl ">More Examples</div>
		</div>

    <div className="mainContCategory w-full">
			{
				getdata.slice(35, 37).map((currElement) =>{
					return(
						<div className="border-b  border-gray-300" key={currElement.id}>
							<div className="grid mainCategoryGrid">
             <div className="font-bold py-2 flex items-center text-orange-400 categoryName">{currElement.category}</div>
             <div className="font-bold opacity-70  text-base py-2 flex items-center">{currElement.numbers}</div>
             <div className="flex items-center imagesContCategoriess py-1 flex-wrap">
			  { currElement.image.map((getImage) =>{
		return(
		<a href={getImage.openseaLink} key={getImage.openseaLink} target="_blank" className="sharkCategoryImage relative block"><img src={getImage.imageLink} alt="Shark Image" /></a>
		)
	})
 }
 

</div>
</div>
						</div>
					)
				})
			}
		</div>













		<div className="topCategoryGrid grid w-full border-b py-5  pt-7 border-gray-300">
         <div className="font-bold opacity-70 text-xl ">Rare</div>
         <div className="font-bold opacity-70 text-xl ">#</div>
         <div className="font-bold opacity-70 text-xl ">More Examples</div>
		</div>

    <div className="mainContCategory w-full">
			{
				getdata.slice(37, 100).map((currElement) =>{
					return(
						<div className="border-b  border-gray-300" key={currElement.id}>
							<div className="grid mainCategoryGrid">
             <div className="font-bold py-2 flex items-center text-orange-400 categoryName">{currElement.category}</div>
             <div className="font-bold opacity-70  text-base py-2 flex items-center">{currElement.numbers}</div>
             <div className="flex items-center imagesContCategoriess flex-wrap  py-1">{ currElement.image.map((getImage) =>{
		return(
		  <a href={getImage.openseaLink} key={getImage.openseaLink} target="_blank" className="sharkCategoryImage relative block"><img src={getImage.imageLink} alt="Shark Image" /></a>
		)
	})
 }
 </div>


</div>
						</div>
					)
				})
			}
		</div>




        </>
    )
}

export default Categories
