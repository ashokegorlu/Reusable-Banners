import './index.css'

const BannerDetails = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  const boxContainer = `box ${className}`
  return (
    <li className={boxContainer}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button" className="showMore">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerDetails
