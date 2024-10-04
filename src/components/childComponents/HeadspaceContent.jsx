import FeaturedCard from './FeaturedCard'
import AdvertiseCard from './AdvatiseCard'
import "./HeadspaceContent.css"

const HeadspaceContent = () => {
  return (
   <>
    <div className="total-option-cont">
      <div className="headspace-option-cont">
        <div className="headspace-option ">Recent</div>
        <div className="headspace-option option-active">Featured</div>
      </div>
      <FeaturedCard />
      <AdvertiseCard />
    </div>
   </>
  )
}

export default HeadspaceContent