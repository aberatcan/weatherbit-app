import React, { FC } from "react";
import { WeatherResult } from "../types";
import { API_KEY } from "../consts";
import "./SearchBar.css";

type SearchBarProps = {
  setData: Function;
  setLoading: Function;
  searchValue: string;
  setSearchValue: Function;
};

const apiBase = " https://api.weatherbit.io/v2.0/forecast/daily";

export const SearchBar: FC<SearchBarProps> = ({
  setData,
  setLoading,
  searchValue,
  setSearchValue,
}) => {
  const handleSearch = () => {
    setLoading(true);
    fetch(`${apiBase}?city=${searchValue}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result as WeatherResult);
        setLoading(false);
      });
  };

  return (
    <div className={"input-wrapper"}>
      <input
        type="text"
        placeholder={"Type.."}
        value={searchValue}
        onChange={(e) => {
          setData(undefined)
          setSearchValue(e.target.value)}}
      />
      <button
        onClick={handleSearch}
        disabled={searchValue.length === 0}
        className="iconButton"
      >
        <img src="search.svg" alt="search" width={"30px"} />
      </button>
    </div>
  );
};
