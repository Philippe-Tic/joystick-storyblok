import DynamicComponent from "./DynamicComponent";

const Grid = ({ blok }) => {
  return (
    <div>
      {blok.columns.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
