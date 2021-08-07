import "./Cats.scss";
import { useCallback, useEffect, useMemo, useState } from "react";

import { catApiUrl, catHeaders } from "../utils/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useFetch } from "../hooks/useFetch";
import HeaderButtonGroup from "./HeaderButtonGroup";
import LoadingIndicator from "./LoadingIndicator";
import { useArrSort, useArrSortToTop } from "../hooks/useArrSortToTop";
import { useFindTargets } from "../hooks/useFindTargets";

function Cats() {
  const [time, setTime] = useState(0);
  const [nowY, setNowY] = useState(0);

  const [storedBreeds, storeBreeds] = useLocalStorage("breeds", []);
  const [storedPages, storePages] = useLocalStorage("fetchedPages", []);
  const [currentPage, setCurrentPage] = useState(storedPages.length !== 0 ? storedPages[storedPages.length - 1] : 1);


  
  //   console.log("arrs start");
  //   console.log("arrs: ", arrs);
  //   console.log("arrs after");
  //   setArrs();
  //   console.log("arrs: ", arrs);

  const params = useMemo(
    () => ({
      page: currentPage,
      limit: 10,
    }),
    [currentPage]
  );
  const initialScrollY = 0;
  //   console.log(window.scrollY);
  const { data: breeds, isLoading, hasError, error } = useFetch(`${catApiUrl}/breeds`, params, catHeaders, storedBreeds);
  //   console.log(hasError);
  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) {
      return;
    }

    setCurrentPage((prevPage) => prevPage - 1);
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setTime(prevTime => prevTime 1)
  //     },1000)

  //     return () => {
  //         clearInterval(intervalId)
  //     }
  // },[])

  return (
    <div className="Cats">
      {!hasError ? (
        <>
          {/* <p>타이머: {time}</p> */}
          <p>현재 페이지: {currentPage}</p>
          <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
          <LoadingIndicator isLoading={isLoading} />
          <ul>
            {breeds.map((breed, index) => (
              <li className="Cat" key={`${breed.id}-${index}`}>
                <span>Name: {breed.name}</span>
                <span>Origin: {breed.origin}</span>
                <span>Description: {breed.description}</span>
                <span>
                  Wiki:{" "}
                  <a href={breed.wikipedia_url} target="_blank">
                    {breed.wikipedia_url}
                  </a>
                </span>
                <img className="Image" src={breed.image ? breed.image.url : null} />
              </li>
            ))}
          </ul>
          <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
          <LoadingIndicator isLoading={isLoading} />
        </>
      ) : (
        <p>
          데이터를 불러오는 중 에러가 발생했습니다.
          <br />
          {JSON.stringify(error, null, 2)}
        </p>
      )}
    </div>
  );
}

export default Cats;
