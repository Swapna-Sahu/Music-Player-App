import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Question = () => {
    const datas = [
        {
            id: 1,
            description: "Does Moodagent offer a free trial?"
        },
        {
            id: 2,
            description: "How is Moodaagent different from other music streaming services"
        },
        {
            id: 3,
            description: "How do i create a playlist"
        },
        {
            id: 4,
            description: "Can I download a playlist on Moodagent?"
        },{
            id: 5,
            description: "Does Moodagent have ads?"
        },
        {
            id: 6,
            description: "Does Moodagent offer a free trial?"
        }
    ]
    return (
    <>
        {
            datas.map(data => (
                <div className="row " key={data.id}>
                <p className="col-1 p-3 text-end"><span className="text-warning">Q</span></p>
                <div className="col">
                      <p className={styles.steps}>{data.description}</p>
                </div>
                <div className="col-4 p-3 text-end"> 
                  <Image src="/Assets/Icon/Arrow/Down.png" width={10} height={15} alt="Arrow down"></Image>
                </div>
              </div>
        ))}
        </>
     );
}
 
export default Question;