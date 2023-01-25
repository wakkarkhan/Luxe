import React, { useEffect, useContext, useState } from 'react'
import UserContext from '../../context'
import { useNavigate } from "react-router-dom";
import "./style.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const [firstPrevious, setFirstPrevious] = useState('none')
    const [previousPage, setPreviousPage] = useState('none')
    const [lastNext, setLastNext] = useState('block')
    const [lastPage, setLastPage] = useState('none')

    //handle pageNumber Click
    const handlePage = (pgNumber) => {
        setCurrentPage(pgNumber)
        if (pgNumber === 1) {
            setFirstPrevious('block');
            setPreviousPage('none');
        }
        else {
            setPreviousPage('block');
            setFirstPrevious('none');
        }

        if (pgNumber === nPages) {
            setLastNext('block');
            setLastPage('none');
        }
        else {
            setLastNext('none');
            setLastPage('block');
        }
    }
    //handle nextPage button
    const nextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(++currentPage);
            if (currentPage === 1) {
                setFirstPrevious('block');
                setPreviousPage('none');
            }
            else {
                setPreviousPage('block');
                setFirstPrevious('none');
            }

            if (currentPage === nPages) {
                setLastNext('block');
                setLastPage('none');
            }
        }
    }
    // handle prev page
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            if (currentPage === 2) {
                setFirstPrevious('block');
                setPreviousPage('none');
            }
            else {
                setPreviousPage('block');
                setFirstPrevious('none');
            }

            if (currentPage === nPages + 1) {
                setLastNext('block');
                setLastPage('none');
            }
            else {
                setLastNext('none');
                setLastPage('block');
            }
        }
    }

    const getInitials = () => {
        if (!user) {
            navigate('/login')
        }
        else {
            setFirstPrevious('block');
            setPreviousPage('none');

            if (nPages === 1) {
                setLastNext('block');
                setLastPage('none');
            }
            else {
                setLastNext('none');
                setLastPage('block');
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getInitials();
    }, []);


    return (
        <div className='pagination-box-row'>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link"
                        onClick={prevPage}
                        style={{ width: 'auto', height: 'auto', display: previousPage }}
                    >
                        Prev
                    </a>
                    <a className="page-link disabled-link"
                        style={{ width: 'auto', height: 'auto', display: firstPrevious }}
                    >
                        Prev
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >
                        <a onClick={() => {
                            handlePage(pgNumber)
                        }}
                            className='page-link'
                        >
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link disabled-link"
                        style={{ width: 'auto', height: 'auto', display: lastNext }}
                    >

                        Next
                    </a>
                    <a className="page-link"
                        onClick={nextPage}
                        style={{ width: 'auto', height: 'auto', display: lastPage }}
                    >

                        Next
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination