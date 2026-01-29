import { useNavbar } from "../../../context/NavbarContext"
import './WhitelistDrawer.css'


const WhiteListDrawer = () => {
    const { wishList, setWishList, isWishListOpen, setIsWishListOpen, updateQuantity } = useNavbar()


    const removeToWishList = (itemId) => {
        const newWishList = wishList.filter(item => item.id !== itemId)
        setWishList(newWishList)  
    }

    const addToCart = (item) => {
        updateQuantity(item, 1)

        removeToWishList(item.id)
    }

    return (
        <div className={`main-contaienr-wish-list ${isWishListOpen ? 'active': ''}`}>
            <div className="container-header-card-white-list">
                <h2>Wish List</h2>
                <button className="button-cart" onClick={() => setIsWishListOpen(!isWishListOpen)}>
                    <img src="/xmark-solid-full.svg" width={20} alt="" />
                </button>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <div className="contianer-wish-list">
                {wishList?.map(item => (
                    <div key={item.id} className="contianer-product-wish-list">
                        <img className="image-item" src={item.images[0]} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                            <div className="container-button-wish">
                                <button className="button-wish-list"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to cart
                                </button>
                                <button className="button-wish-list"
                                    onClick={() => removeToWishList(item.id)}
                                >
                                    Remove to wish list
                                </button>
                            </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhiteListDrawer