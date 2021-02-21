import './Column.css';

function Column({v1, v2, v3, v4, v5, v6, num}) {
  return (
    <div className={"column-container " + num}>
    <div className="r1 center">
        <div className={v6 === "Y" ? "yellow item" : v6 === "R" ? "red item" : "white item"}></div>
    </div>
    <div className="r2 center">
        <div className={v5 === "Y" ? "yellow item" : v5 === "R" ? "red item" : "white item"}></div>
    </div>
    <div className="r3 center">
        <div className={v4 === "Y" ? "yellow item" : v4 === "R" ? "red item" : "white item"}></div>
    </div>
    <div className="r4 center">
        <div className={v3 === "Y" ? "yellow item" : v3 === "R" ? "red item" : "white item"}></div>
    </div>
    <div className="r5 center">
        <div className={v2 === "Y" ? "yellow item" : v2 === "R" ? "red item" : "white item"}></div>
    </div>
    <div className="r6 center">
        <div className={v1 === "Y" ? "yellow item" : v1 === "R" ? "red item" : "white item"}></div>
    </div>
    </div>
  );
}

export default Column;
