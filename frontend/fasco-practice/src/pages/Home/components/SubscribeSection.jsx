import './SubscribeSection.css'
import imageSub1 from '../../../assets/image-sub.png'
import imageSub2 from '../../../assets/image-sub-2.png'
import Button from '../../../components/Buttons/Button.jsx'


const SubscribeSection = () => {
    return (
        <section className='sub-container'>
            <img className='image-sub' src={imageSub1} alt="" />
            <div className='contianer-sub-content'>
                <div className='description-container'>
                    <h4 className='title-sub'>Subscribe To Our Newsletter</h4>
                    <p className='description-sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi distinctio? Ad tenetur rem rerum voluptate placeat excepturi perferendis quo</p>
                    <p className='user-sub'>usuario@ymail.com</p>
                </div>
                <Button className='btn-sub'>Subscibre Now</Button>
            </div>            
            <img className='image-sub'  src={imageSub2} alt="" />
        </section>
    )
}

export default SubscribeSection