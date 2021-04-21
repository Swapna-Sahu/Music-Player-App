import Image from 'next/image'
const Media = () => {
    return (
        <>
            <div className="col-sm-1 text-center ">
                <Image src="/Assets/Icon/Facebook.png" width={20} height={20} alt="facebook"></Image>
            </div>
            <div className="col-sm-1 text-center ">
                <Image src="/Assets/Icon/Instagram.png" width={20} height={20} alt="instagram"></Image>
            </div>
            <div className="col-sm-1 text-center ">
                <Image src="/Assets/Icon/Twitter.png" width={20} height={20} alt="twitter"></Image>
            </div> 
        </>
     );
}
 
export default Media;