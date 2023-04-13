import PropTypes from 'prop-types'

const Item = ({ brand, year_launch }) => {
  return (
    <>
      <li>{brand} - {year_launch}</li>
    </>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  year_launch: PropTypes.number
}

Item.defaultProps = {
  brand: 'No brand',
  year_launch: 0
}


export default Item
