import { useState, useEffect} from "react"
import { getProducts } from "../../services/productsService.js"
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx"
import Button from '../../components/Buttons/Button.jsx'
import { useLocation } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import './Products.css'

const Products = () => {

    const Location = useLocation()
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState("")
    const [ visibleCount, setVisibleCount ] = useState(6)

    const [ actualPage, setActualPage ] = useState(1)
    const productsForPage = 9

    const finalIndex = actualPage * productsForPage
    const firstIndex = finalIndex - productsForPage
    const productsPaginated = products.slice(firstIndex, finalIndex)

    const productsPages = Math.ceil(products.length / productsForPage)

    const changePage = (pageNumber) => {
      setActualPage(pageNumber)
    }

    const lastPage = () => {
      if(actualPage > 1) {
        setActualPage(actualPage - 1)
      }
    }

    const nextPage = () => {
      if(actualPage < productsPages) {
        setActualPage(actualPage + 1)
      }
    }

    useEffect(() => {
      getProducts()
        .then(setProducts)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    const handleMore = () => {
      setVisibleCount(prev => prev + 6)
    }


    if (loading) return <p>Loading products...</p>
    if (error) return <p>{error}</p>

    return (
      <section className="container-product">

        {Location.pathname === "/" ? <ProductsGrid products={products.slice(0, visibleCount)}/> : 
        <ProductsGrid products={productsPaginated} />}

        

        {visibleCount < products.length && Location.pathname === "/" && (
            <div className="load-more-wrapper">
                <Button onClick={handleMore} variant="load-more">View New</Button>
            </div>
        )}

        {Location.pathname === "/shop" && (
            <div className="pagination-controls">
                { /* Pagination Controls */ }

                {/* Last Button */}
                <button onClick={lastPage} 
                variant="pagination"
                disabled={actualPage === 1}
                className="button-pagination-"
                >
                  <ChevronLeft size={16} />
                </button>

                <div>
                  {[...Array(productsPages)].map((_, index) => {
                    const pageNumber = index + 1
                    return (
                      <button
                      key={pageNumber}
                      onClick={() => {changePage(pageNumber)}}
                      className={`button-pagination-${actualPage === pageNumber ? 'active' : ''}`}
                      >{pageNumber}
                      </button>
                    )
                  })}
                </div>

                {/* Next Button */}
                <button
                onClick={nextPage}
                disabled={actualPage === productsPages}
                className="button-pagination-"
                >
                  <ChevronRight size={16}/>
                </button>
                
            </div>
        )}
      </section>
    )
}

export default Products