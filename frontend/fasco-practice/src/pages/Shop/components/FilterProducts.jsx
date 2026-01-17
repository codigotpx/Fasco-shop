import './FilterProducts.css';
import { useState } from 'react';

const FilterProducts = ({isOnfilter, isOffFilter}) => {

    const [ openSection, setOpenSection ] = useState({
        brands: true, 
        collections: true,
    })

    const [ selectFilter, setSelectFilter ] = useState({
        size: [],
        color: [],
        price: null,
        brands: [],
        collections: [],
        tags: [],
    })


    const toggleSection = (section) => {
        setOpenSection(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    const handleFilterChange = (category, value) => {
        setSelectFilter(prev => {
            if (category === 'price') {
                return { ...prev, price: prev.price === value ? null : value }
            }

            const currentValues = prev[category]
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value]

            return { ...prev, [category]: newValues }
        })
    }


    const sizes = ['S', 'M', 'L', 'XL']

    const colors = [
        '#FF6B6B', '#FF8C42', '#FFD93D', '#6BCF7F', '#4ECDC4',
        '#45B7D1', '#5DADE2', '#3498DB', '#5B7FDB', '#7B68EE',
        '#9B59B6', '#E056FD', '#FF6B9D'
    ]

    const prices = [
        '$0-$50',
        '$50-$100',
        '$100-$150',
        '$150-$200',
        '$300-$400'
    ];
    const brands = ['Minimog', 'Retrolie', 'Brook', 'Learts', 'Vagabond', 'Abby']

    const collections = ['All products', 'Best sellers', 'New arrivals', 'Accessories']

    const tags = [
        'Fashion', 'Hats', 'Sandal', 'Belt', 'Bags',
        'Sneaker', 'Denim', 'Minimog', 'Vagabond',
        'Sunglasses', 'Beachwear'
    ]


    return (
        <section className={`container-filter-products ${isOnfilter ? 'active' : ''}`}>
            <div className='icon-close-filter'
            onClick={isOffFilter}>
                <span></span>
                <span></span>
            </div>
            <h3>Filter</h3>
            
            { /* Size Section */ }
            <div className='container-section-filters'>
                <h3 className='title-filter'>Size</h3>
                <div>
                    {sizes.map(size => (
                        <button 
                            key={size}
                            onClick={() => {handleFilterChange('size', size)}}
                            className='button-size-filter'
                            >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className='container-section-filters'>
                <h3 className='title-filter'>Colors</h3>
                <div className='contianer-color-filter'>
                    {colors.map((color, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleFilterChange('color', color)}
                            className='button-color-filter'
                            style={{ backgroundColor: color }}
                            />
                    ))}
                </div>
            </div>
            

            { /* Prices Section */ }
            <div className='container-section-filters'>
                <h3 className='title-filter'>Prices</h3>
                <div className='container-price-filter'>
                    {prices.map(price => (
                        <label key={price} className='label-filter'>
                            <input
                                type='radio'
                                name={'price'}
                                value={price}
                                checked={selectFilter.price == price }
                                onChange={() => {handleFilterChange('price', price)}}
                                className='label-radio-filter'
                            />
                            {price}
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Brands Section */}
            <div className='container-section-filters'>
                <div onClick={() => {toggleSection('brands')}}
                    className='container-open-close-filters'>
                    <h3 className='title-filter'>Brands</h3>
                    <span className='spam-filter-open-close'>{openSection.brands ? '▲' : '▼'}</span>
                </div>
                {openSection.brands && (
                    <div>
                        {brands.map(brand => (
                            <button
                                key={brand}
                                onClick={() => handleFilterChange('brands', brand)}
                                className='button-brand-filter'>
                                {brand}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Collections Section */}
            
            <div className='container-section-filters'>
                <div onClick={() => { toggleSection('collections')}}
                    className='container-open-close-filters'>
                    <h3 className='title-filter'>Collections</h3>
                    <span className='spam-filter-open-close'>{openSection.collections ? '▲' : '▼'}</span>
                </div>
                {openSection.collections && (
                    <div className='container-collection-filter'>
                        {collections.map(collection => (
                            <label key={collection} className='label-collection-filter'>
                                <input 
                                type="checkbox" 
                                value={collection}
                                checked={selectFilter.collections.includes(collection)}
                                onChange={() => {handleFilterChange('collections', collection)}}
                                className='label-radio-filter'/>
                                {collection}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Tags Section */}    
            <div className='container-section-filters'>
                <h3 className='title-filter'>Tags</h3>
                <div>
                    {tags.map(tag => (
                        <button 
                            key={tag}
                            onClick={() => handleFilterChange('tags', tag)}
                            className='button-tags-filter'
                            >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            
        </section>
    )
}

export default FilterProducts;