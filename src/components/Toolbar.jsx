import React from "react";
import '../styles/Toolbar.css'
export default function Toolbar(props) {
   return (
      <div className="toolbar">
         <ul className="toolbar__filters-list">
            {props.filters.map((filter, index) => (
               <li className="toolbar__filters-item" key={index}>
                  <button
                     className={`toolbar__filter-btn ${filter === props.selected ? " toolbar__filter-btn--active" : ""}`}
                     onClick={(e) =>{
                        e.preventDefault();
                        props.onSelectFilter(filter);
                        e.target.blur();
                     } }
                  > {filter}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}