import React from 'react'

const LargestSales = () => {

    let Sharks = [
        {
            id: 1,
            image: "https://lh3.googleusercontent.com/jal27w6wu2ogcLuO4gz_WUeMZUibY9yzgyzsDkJja7-vfDc1yArdnvJZeruBQN-F9mxtYHtPJ7y_F9DKmPnNBAnxR871x9YlU5Uw-A=w600",
            index: "#45",
            price: "0.006 ETH = ($19.28)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/45"

        },

        {
            id: 2,
            image: "https://lh3.googleusercontent.com/ytcKfMRJUJdSK1dVTa_gqAcS5_0n4sjlKdt_j-KhkdSVTJTJXaSKJcN0df86LQYmGEtcKrYTQycq3HJTr6mGAKRxJgoQJVu9MiOUAeE=w600",
            index: "#92",
            price: "0.006 ETH = ($19.28)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/97"

        },

        {
            id: 3,
            image: "https://lh3.googleusercontent.com/w5NNZS5Q5w4inNaAGAePBt_S28TIco5ftzRIO2lxAKC3bkdL6XzE69krbkhDjrfyjRRA8F22_iKOQ8z3ydnZ9zhTUlzln7XVWa8rLw=w600",
            index: "#7",
            price: "0.005 ETH = ($15.96)",
            date: "2 months ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/7"
        },

        {
            id: 4,
            image: "https://lh3.googleusercontent.com/1UU8BLK37AkD7x3wpjzfMVzxviUW8hyRb1x-LlIL4IUanigMWfAOC-ByihGvsN8Uz12mpPIbcrcxZha7nWqGWSzRnlGYUFe6jYdaGQ=w600",
            index: "#8",
            price: "0.003 ETH = ($11.30)",
            date: "2 months ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8"
        },

        {
            id: 5,
            image: "https://lh3.googleusercontent.com/G3P_Vu14YdP_RX386x0A0fa1rl3vDUX1FNwD7ND7M5hac6C1_qUfqiRllVE4ot7kQwUvjbrzb6mYghd0y-oVuCa9FdqMAo3odBYb_g=w600",
            index: "#8418",
            price: "0.001 ETH = ($3.32)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8418"
        },

        {
            id: 6,
            image: "https://lh3.googleusercontent.com/zD0Xz3enFrfoA_jN2GwhdfqyqkKsDS-Td5WWlAjPLOnSNGU3tHrT3vgPRuFiX8arkBm0RRun9Dk-9PMfgxBpwPGGCSN91Lu8RIlo=w600",
            index: "#8417",
            price: "0.001 ETH = ($3.32)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8417"
        },

        {
            id: 7,
            image: "https://lh3.googleusercontent.com/yPMtbRMBjI_4a2BXHwdDXezFiNewdAzB__sLC9Iar4Tq55dG64YzKgAQoridpqHVmwJHN1CrbSbVruwXZk9GFtl_akPmaWf0K5L2Og=w600",
            index: "#7243",
            price: "0.001 ETH = ($3.32)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/7243"
        },


        {
            id: 8,
            image: "https://lh3.googleusercontent.com/_vgstNRkUWHpqY-IndxBN1wnVFHcaUt9jEsBkymKc-4n2k3XjZio1S-FMomtV1WwwlWTRgfeJD3UjvG6Ao8PLdRyZj9iTaMvazhh=w600",
            index: "#8942",
            price: "< 0.001 ETH = ($2.99)",
            date: "6 days ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8942"
        },



        {
            id: 9,
            image: "https://lh3.googleusercontent.com/XRko002ajAptxqg9uNEhxaKRAQdtvBK7ouaBz1HwmWNDcl4UNedy18fg201qsCCSa5T8wYDJu-VGU9NiwlFa71EnY46by3TlK1QE0Q=w600",
            index: "#8415",
            price: "< 0.001 ETH = ($1.66)",
            date: "6 days ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8415"
        },



        {
            id: 10,
            image: "https://lh3.googleusercontent.com/4VQyuY0iVZkfqcswU3Y8lsyu25TPs6PNCMUFGUZ4WpgUXEGvOyYoIl_aqLal6oInWK_G_bU3j8p7u05LL51LvNNrWdDltd1upVu70g=w600",
            index: "#9875",
            price: "< 0.001 ETH = ($1.66)",
            date: "6 days ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/9875"
        }



        

    ]
    return (
        <>
        <div className="grid largestSalesGrid grid-cols-5 gap-10">
{
    Sharks.map((currentShark) =>{
        return(
            <a href={currentShark.url} className="bg-white card transition rounded-md">
             <img src={currentShark.image} alt="shark image" className="rounded-md rounded-b-none" />
             <div className="border-gray-400 border  border-t-0 rounded-md rounded-t-none px-3 pt-4 pb-4">
             <div className="font-bold">{currentShark.index}</div>
             <div>{currentShark.price}</div>
             <div>{currentShark.date}</div>

             </div>

            </a>
        )
    })
}
        </div>           
        </>
    )
}

export default LargestSales
