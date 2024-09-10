import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/Card/Card";

import Paginaton from "../../components/Pagination/Paginaton";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import { medium, mobile, tablet } from "../../utils/responsive";

import {
  fetchAllBrandsAsync,
  fetchAllCategoriesAsync,
  fetchAllProductsAsync,
  fetchProductsByFilterAsync,
  selectAllBrands,
  selectAllCategories,
  selectAllProducts,
  selectProductListStatus,
  selectTotalItems,
} from "./productSlice";
import Loader from "../Loader/Loader";

const sortBy = [
  { name: "Top Ratings", sort: "rating", order: "desc", current: false },
  { name: "Price: High to Low", sort: "price", order: "desc", current: false },
  { name: "Price: Low to High", sort: "price", order: "asc", current: false },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 3;
`;
const FilterContainers = styled.div`
  padding: 1rem;
  align-items: center;
  ${mobile({
    textAlign: "center",
  })}
`;

const FilterInputParent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${medium({
    gap: "5px",
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${mobile({
    gap: "5px",
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #572064;
`;

const SubHeading = styled.h3`
  background-color: #fae6fa;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 3px;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 150px;
  padding-bottom: 1rem;

  ${mobile({
    display: "none",
  })}
`;

const ProductBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  border-radius: 7px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-family: inherit;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  margin: auto;

  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${medium({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  const totalItems = useSelector(selectTotalItems);
  const brands = useSelector(selectAllBrands);
  const categories = useSelector(selectAllCategories);
  const status = useSelector(selectProductListStatus);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);

  const filters = [
    {
      id: "category",
      name: "category",
      options: categories,
    },
    {
      id: "brand",
      name: "brand",
      options: brands,
    },
  ];

  // HANDLE FILTER FUNCTION
  const handleFilter = (e, ele, item) => {
    const newFilter = { ...filter };

    if (e.target.checked) {
      if (newFilter[ele.id]) {
        newFilter[ele.id].push(item.value);
      } else {
        newFilter[ele.id] = [item.value];
      }
    } else {
      const index = newFilter[ele.id].findIndex((el) => el === item.value);
      newFilter[ele.id].splice(index, 1);
    }

    setFilter(newFilter);
  };

  // HANDLE SORT FUNCTION
  const handleSort = (e, sortBy) => {
    const sort = { _sort: sortBy.sort, _order: sortBy.order };
    setSort(sort);
  };

  // HANDLE PAGE FUNCTION
  const handlePagination = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const paginationObj = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchProductsByFilterAsync({ filter, sort, paginationObj }));
  }, [dispatch, filter, sort, page]);

  useEffect(() => {
    setPage(1);
  }, [totalItems, sort]);

  useEffect(() => {
    dispatch(fetchAllBrandsAsync());
    dispatch(fetchAllCategoriesAsync());
  }, []);

  return (
    <Container>
      {/* LEFT SECTION */}
      <Left>
        {/* SORTING */}
        <FilterContainers>
          <SubHeading>Sort by</SubHeading>
          {sortBy.map((sortBy, i) => (
            <FilterInputParent key={sortBy.name} className="input_parent">
              <input
                type="radio"
                name="sort"
                id={sortBy.name}
                value={sortBy.sort}
                onClick={(e) => handleSort(e, sortBy)}
              />
              <label htmlFor={sortBy.name}>{sortBy.name}</label>
            </FilterInputParent>
          ))}
        </FilterContainers>
        {/* SORTING END */}

        {/* FILTERING */}
        {filters.map((ele) => (
          <FilterContainers key={ele.id}>
            <SubHeading>{ele.name}</SubHeading>

            {ele.options.map((item, i) => (
              <FilterInputParent className="input_parent" key={i}>
                <input
                  type="checkbox"
                  value={item.value}
                  id={`${ele.id}-${item.value}`}
                  onChange={(e) => handleFilter(e, ele, item)}
                />
                <label htmlFor={`${ele.id}-${item.value}`}>{item.label}</label>
              </FilterInputParent>
            ))}
          </FilterContainers>
        ))}
        {/* FILTERING END */}
      </Left>
      {/* LEFT SECTION END */}

      {/* RIGHT SECTION */}
      <Right>
        {/* PRODUCTS BANNER */}
        <BannerContainer>
          <ProductBanner
            src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category banner"
          />
          <Info>
            <Title>Products</Title>
          </Info>
        </BannerContainer>
        {/* PRODUCTS BANNER END */}

        {/* PRODUCTS GRID */}
        {status === "loading" ? (
          <Loader />
        ) : (
          <GridContainer>
            {products.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </GridContainer>
        )}
        {/* PRODUCTS GRID END */}

        {/* PAGINATION */}
        <Paginaton
          page={page}
          setPage={setPage}
          handlePagination={handlePagination}
          totalItems={totalItems}
        />
        {/* PAGINATION END */}
      </Right>
      {/* RIGHT SECTION END */}
    </Container>
  );
};

export default ProductList;
