import React from 'react'
import './styles/pagination.css'

const Pagination = ({productsPerPage, currentPage, setCurrentPage, totalProducts}) => {

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage) ; i++){
    pageNumbers.push(i)
  }
  const onPreviusPage = () => {
    if(currentPage - 1 >= 1)
    setCurrentPage(currentPage - 1)
  }
  const onNextPage = () => {
    if(currentPage + 1 <= Math.ceil(totalProducts/productsPerPage))
    setCurrentPage(currentPage + 1)
  }
  const onSpecifiPage = (n) => {
    setCurrentPage(n)
  }
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button className={`pagination__button ${currentPage === 1 ? 'is-disabled':''}`} onClick={onPreviusPage}>Previous</button>
      <ul className="pagination-list">
        { pageNumbers.map(noPage => (
          <li className={`pagination__item ${noPage === currentPage ?'is-current' : ''}`} key={noPage}>
            <a 
            onClick={() => onSpecifiPage(noPage)}>{noPage}</a>
          </li>
        ))}
      </ul>
      <button className={`pagination__button ${currentPage >= pageNumbers.length ? 'is-disabled':''}`} onClick={onNextPage}>Next page</button>
  </nav>
  )
}

export default Pagination