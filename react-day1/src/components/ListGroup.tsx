interface Props {
  items:string[];
  heading:string;
}

function ListGroup({items,heading}:Props) {
  return (
    <>
      <h1>{heading}</h1>
      <hr/>
      <ul className="list-group">
        {items.map((item) => (
          <>
            <li key={item}>{item}</li>
            <hr/>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
 