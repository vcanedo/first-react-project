import Item from './Item'

const List = () => {
  return (
    <>

      <h1>My List</h1>

      <ul>
        <Item brand="Ford" year_launch={1964}/>
        <Item brand="Ferrari" year_launch={1985}/>
        <Item brand="Fiat" />
        <Item brand="Chevrolet" year_launch={1970}/>
        <Item brand="Volkswagen" year_launch={1950}/>
      </ul>

    </>
  )
}

export default List
