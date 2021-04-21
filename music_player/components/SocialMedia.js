import Image from 'next/image'
const Media = () => {
    return (
        <>
            <div className="col-sm-1">
                <Image src="/Assets/Icon/Facebook.png" width={30} height={30}></Image>
            </div>
            <div className="col-sm-1">
                <Image src="/Assets/Icon/Instagram.png" width={30} height={30}></Image>
            </div>
            <div className="col-sm-1">
                <Image src="/Assets/Icon/Twitter.png" width={30} height={30}></Image>
            </div> 
        </>
     );
}
 
export default Media;