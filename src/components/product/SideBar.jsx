import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { deleteProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  console.log(setSearch);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default SideBar;
