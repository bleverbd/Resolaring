import React from "react";
import cross_icon from "../assets/cross_icon.svg";

const Cross = ({ src, onRemove }) => {
  return (
    <div className="outline-1 outline-[#071431] w-[20px] h-[20px] rounded-full cursor-pointer">
      <button onClick={onRemove}>
        <img className="p-1" src={cross_icon} />
      </button>
    </div>
  );
};

export default Cross;






// // import React from 'react'
// // import cross_icon from "../assets/cross_icon.svg"

// // const Cross = ({src}) => {

// //     const handleData = (src) => {  
// //         removeItemStorge(src);
          

// //      }
  
    
// //      const removeItemStorge = (src) => {
// //         const items = JSON.parse(localStorage.getItem("cart"));
// //         const updatedItems = items.filter(item => item.src !== src);
// //         localStorage.setItem("cart", JSON.stringify(updatedItems));
// //       };
// //   return (
// //     <div>
// //         <div className="outline-1 outline-[#071431] w-[20px] h-[20px] rounded-full cursor-pointer">
// //           <button onClick ={() => handleData(src)}  className="cursor-pointer" > <img className="p-1" src={cross_icon}/> </button>
// //            </div>
      
// //     </div>
// //   )
// // }

// // export default Cross

// import React from 'react';
// import cross_icon from "../assets/cross_icon.svg";

// const Cross = ({ src, onRemove }) => {
//   const handleClick = () => {
//     if (onRemove) onRemove(src);
//   };

//   return (
//     <div className="outline-1 outline-[#071431] w-[20px] h-[20px] rounded-full cursor-pointer">
//       <button onClick={handleClick} className="cursor-pointer">
//         <img className="p-1" src={cross_icon} />
//       </button>
//     </div>
//   );
// };

// export default Cross;
