import './NewArrivalsSection.css'
import Products from '../../Products/Products'


const NewArrivalsSection = () => {
    return (
        <section className="New-arrivals-container">
            <h2 className='texte-new-arrivals'>New Arrivals</h2>
            <p className='p-new-arrivals'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolorum ipsa, 
                quibusdam at dolor officiis sint animi porro illo laboriosam adipisci, a totam architecto expedita 
                ratione ea aspernatur. Reiciendis, optio.
            </p>
            <div className='cards-container'>
                <Products/>
            </div>
       </section>
    )
}

export default NewArrivalsSection