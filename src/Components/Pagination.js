export default function Pagination({length,pageSize,onPageChange,currentPage}) {
  const pagesCount = Math.ceil(length / pageSize);
  console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className="pagination">
     <ul>
       {pages.map((page,index) => (
         <li
           key={index}
           className="num">
           <a  onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
  );
}