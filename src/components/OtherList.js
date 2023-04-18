const OtherList = ({ items }) => {
  return (
    <>

      <h3>Good Stuff list:</h3>
      {items.length > 0 ? (
        items.map((item, index) => (
          <p key={index}>{item}</p>
        ))) : (
        <p>No items on list 😕</p>
        )
      }

    </>
  );
};

export default OtherList;
