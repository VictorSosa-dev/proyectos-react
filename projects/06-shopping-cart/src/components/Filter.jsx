export function Filter() {
  return (
    <div>
      <form>
        <input type="range" />
        <select>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="tablets">Tablets</option>
        </select>
      </form>
    </div>
  )
}
