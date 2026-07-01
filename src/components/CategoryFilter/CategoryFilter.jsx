

function CategoryFilter({setCategory}){
    return(
        <div className="d-flex gap-3 mb-3">
            <button className="btn btn-primary" onClick={()=>setCategory("Tous")}>Tous</button>
            <button className="btn border" onClick={()=>setCategory("Électronique")}>Électronique</button>
            <button className="btn border" onClick={()=>setCategory("Maison")}>Maison</button>
            <button className="btn border" onClick={()=>setCategory("Accessoires")}>Accessoires</button>

        </div>
    )
}
export default CategoryFilter;