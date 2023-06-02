export function Filters () {
    return (
        <section classname = 'filters'> 
        <div>
            <label htmlFor="price">Price</label>
            <input 
            type='range' 
            id='price'
            min='0'
            max='1000'
            />        
        </div>
        <div>
            <label htmlFor="category"> Category</label>
            <select id='category'>
                <option value='all'>Todas</option>
                <option value='laptops'>Laptops</option>
                <option value='smartphones'>Celulares</option>

            </select>
        </div>
        </section>
    )
}