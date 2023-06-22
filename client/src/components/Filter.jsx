import { useEffect, useState } from "react"
import Slider from 'react-slider'

const MIN_PRICE = 10
const MAX_PRICE = 300 

const Filter = ({setFilter}) => {

  const [priceRange, setPriceRange] = useState([10, 300])

  useEffect(() => {
    setFilter(filter => ({...filter, starting_price: priceRange[0], ending_price:priceRange[1]}))
  }, [priceRange])

  return (
    <div className='px-4 py-2 w-full border rounded-lg flex items-center font-semibold'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-2 w-[550px]'>
          <p className='text-[13px] flex py-1 border rounded-lg'><span className='py-2 px-4 border-r'>Starting&nbsp;price:&nbsp;{priceRange[0]}</span> <span className='py-2 px-4'>Ending&nbsp;price:&nbsp;{priceRange[1]}</span></p>
          <Slider
            className={"slider"}
            onChange={setPriceRange}
            value={priceRange}
            min={MIN_PRICE}
            max={MAX_PRICE}
          />
        </div>
        <div className="flex gap-2 text-[13px]">
          <select onChange={(e) => setFilter(filter => ({...filter, category:e.target.value}))} className='w-fit' name="category" required>
              <option value="All"> Category: All </option>
              <option value="Fiction"> Fiction </option>
              <option value="Fantasy"> Fantasy </option>
              <option value="Romance"> Romance </option>
              <option value="Thriller"> Thriller </option>
              <option value="Horror"> Horror </option>
              <option value="Comics"> Comics </option>
            </select>
            <select onChange={(e) => setFilter(filter => ({...filter, seller:e.target.value}))} className='w-fit' name="seller" required>
              <option value="All">  Saller: All </option>
              <option value="Barnes & Noble"> Barnes & Noble </option>
              <option value="Indigo Books & Music"> Indigo Books & Music </option>
              <option value="Books-A-Million"> Books-A-Million </option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default Filter