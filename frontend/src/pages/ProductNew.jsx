import React, { useState, useEffect } from "react";
import { Box, Grid, Flex, Text, Button } from "@chakra-ui/react";
import alldata from "../assets/newData.json";
import Allproduct from "../components/Products/Allproduct";
import { v4 as uuidv4 } from "uuid";
import prodstyles from "./products.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchdata,
  sortproducts,
  fetchfilterbrand,
  fetchfilterdiscount,
} from "../store/products/products.actions";
import {
  getAllProductsAPI,
  getFilteredProductsAPI,
} from "../store/newProduct/products.actions";

let array = new Array(16).fill(0);
const ProductNew = () => {
  let dispatch = useDispatch();

  // const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageno, setPageno] = useState([]);
  const [page, setpage] = useState(1);
  const [filterQuery, setFilterQuery] = useState({
    brand: "",
    discount: "",
    sort: "",
  });
  const {
    data: backendData,
    allProducts,
    filteredData: data,
    filteredProducts,
  } = useSelector((store) => store.products);

  const [brandFilter, setBrandFilter] = useState({
    brands: [],
    numbrands: [],
    selectedBrands: [],
  });
  const [discountFilter, setDiscountFilter] = useState({
    discounts: [],
    numdiscounts: [],
    selectedDiscounts: [],
  });
  // console.log("backendData", backendData);
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getAllProductsAPI());
    dispatch(getFilteredProductsAPI("_page=1"));
  }, []);
  useEffect(() => {
    setAllData(backendData);
  }, [backendData]);
  useEffect(() => {
    if (allData && allData.length) {
      let obj1 = {};
      allData.map((el) => {
        if (obj1[el.brand] === undefined) {
          obj1[el.brand] = 1;
        } else {
          obj1[el.brand] += 1;
        }
      });
      let brand = Object.keys(obj1);
      let numbrand = Object.values(obj1);
      let filterB = new Array(brand.length).fill(false);
      setBrandFilter({
        ...brandFilter,
        brands: [...brand],
        numbrands: [...numbrand],
        selectedBrands: [...filterB],
      });
    }
  }, [allData]);
  useEffect(() => {
    if (data && data.length) {
      //filter by discount
      var obj2 = {};
      data.map((el) => {
        let num = parseInt(el.discount);
        if (num >= 10) {
          if (obj2["10% and above"] === undefined) {
            obj2["10% and above"] = 1;
          } else {
            obj2["10% and above"] += 1;
          }
        }
        if (num >= 20) {
          if (obj2["20% and above"] === undefined) {
            obj2["20% and above"] = 1;
          } else {
            obj2["20% and above"] += 1;
          }
        }
        if (num >= 30) {
          if (obj2["30% and above"] === undefined) {
            obj2["30% and above"] = 1;
          } else {
            obj2["30% and above"] += 1;
          }
        }
      });
      let discount = Object.keys(obj2);
      let numdiscount = Object.values(obj2);
      let filterD = new Array(discount.length).fill(false);
      setDiscountFilter({
        ...discountFilter,
        discounts: [...discount],
        numdiscounts: [...numdiscount],
        selectedDiscounts: [...filterD],
      });
    }
  }, [data]);

  useEffect(() => {
    if (data && data.length) {
      let last = Math.ceil(data.length / 12);
      let pagenoArr = [];
      for (let i = 1; i <= last; i++) {
        pagenoArr.push(i);
      }
      setPageno([...pagenoArr]);
    }
  }, [data]);

  const filterbybrand = (e) => {
    const { value, checked } = e.target;
    // console.log(value, checked);
    // console.log(discountFilter);
    // console.log(brandFilter);

    let temp = new Array(brandFilter.brands.length).fill("");
    for (let i = 0; i < brandFilter.brands.length; i++) {
      if (brandFilter.brands[i] == value && checked) {
        temp[i] = value;
        brandFilter.selectedBrands[i] = true;
      }
      if (brandFilter.brands[i] == value && !checked) {
        temp[i] = "";
        brandFilter.selectedBrands[i] = false;
      }
      if (brandFilter.selectedBrands[i] == true) {
        temp[i] = brandFilter.brands[i];
      }
    }
    temp = temp.filter((el) => {
      if (el.length > 0) {
        return el;
      }
    });
    // console.log(temp.join("&2C").trim());
    setFilterQuery({
      ...filterQuery,
      ["brand"]: `${temp.join(",").trim()}`,
    });
    let finalQuery = "";
    if (temp.join(",").trim() == "") {
      if (
        filterQuery.discount.trim().length == 0 &&
        filterQuery.sort.trim().length == 0
      ) {
        finalQuery = ``;
      } else if (filterQuery.discount.trim().length == 0) {
        finalQuery = `sort=${filterQuery.sort}`;
      } else if (filterQuery.sort.trim().length == 0) {
        finalQuery = `discount=${filterQuery.discount}`;
      } else {
        finalQuery = `sort=${filterQuery.sort}&discount=${filterQuery.discount}`;
      }
    } else {
      if (
        filterQuery.discount.trim().length == 0 &&
        filterQuery.sort.trim().length == 0
      ) {
        finalQuery = `brand=${temp.join(",").trim()}`;
      } else if (filterQuery.discount.trim().length == 0) {
        finalQuery = `brand=${temp.join(",").trim()}&sort=${filterQuery.sort}`;
      } else if (filterQuery.sort.trim().length == 0) {
        finalQuery = `brand=${temp.join(",").trim()}&discount=${
          filterQuery.discount
        }`;
      } else {
        finalQuery = `brand=${temp.join(",").trim()}&sort=${
          filterQuery.sort
        }&discount=${filterQuery.discount}`;
      }
    }
    // console.log(finalQuery);
    dispatch(getFilteredProductsAPI(finalQuery + "&_page=1"));
  };

  const filterbydiscount = (e) => {
    const { value, checked } = e.target;
    // console.log(value, checked);
    // console.log(brandFilter, discountFilter);
    let finalQuery = "";
    if (value.trim().length == 0) {
      setFilterQuery({
        ...filterQuery,
        ["discount"]: "",
      });
      if (
        filterQuery.brand.trim().length == 0 &&
        filterQuery.sort.trim().length == 0
      ) {
        finalQuery = ``;
      } else if (filterQuery.brand.trim().length == 0) {
        finalQuery = `sort=${filterQuery.sort}`;
      } else if (filterQuery.sort.trim().length == 0) {
        finalQuery = `brand=${filterQuery.brand}`;
      } else {
        finalQuery = `brand=${filterQuery.brand}&sort=${filterQuery.sort}`;
      }
    } else {
      setFilterQuery({
        ...filterQuery,
        ["discount"]: `${value}`,
      });

      if (
        filterQuery.brand.trim().length == 0 &&
        filterQuery.sort.trim().length == 0
      ) {
        finalQuery = `discount=${value}`;
      } else if (filterQuery.brand.trim().length == 0) {
        finalQuery = `discount=${value}&sort=${filterQuery.sort}`;
      } else if (filterQuery.sort.trim().length == 0) {
        finalQuery = `discount=${value}&brand=${filterQuery.brand}`;
      } else {
        finalQuery = `discount=${value}&brand=${filterQuery.brand}&sort=${filterQuery.sort}`;
      }
    }
    // console.log(finalQuery);
    dispatch(getFilteredProductsAPI(finalQuery + "&_page=1"));
  };

  //pagination

  const decrpage = (value) => {
    setpage((value) => value - 1);
    // let prodarr = allData.slice((value - 1) * 12, 12 * (value - 1) + 12);
    // setData([...prodarr]);
  };

  const incrpage = (value) => {
    setpage((value) => value + 1);
    // let prodarr = allData.slice(value * 12, 12 * value + 12);
    // setData([...prodarr]);
    // console.log(prodarr);
  };
  const handleSort = (e) => {
    const { value } = e.target;
    console.log("soted by", value);

    setFilterQuery({
      ...filterQuery,
      ["sort"]: `${value}`,
    });
    let finalQuery = "";

    if (
      filterQuery.brand.trim().length == 0 &&
      filterQuery.discount.trim().length == 0
    ) {
      finalQuery = `sort=${value}`;
    } else if (filterQuery.brand.trim().length == 0) {
      finalQuery = `discount=${filterQuery.discount}&sort=${value}`;
    } else if (filterQuery.discount.trim().length == 0) {
      finalQuery = `brand=${filterQuery.brand}&sort=${value}`;
    } else {
      finalQuery = `discount=${filterQuery.discount}&brand=${filterQuery.brand}&sort=${value}`;
    }
    // console.log(finalQuery);
    dispatch(getFilteredProductsAPI(finalQuery + "&_page=1"));
  };

  if (allProducts.loading)
    return (
      <Flex gap={10}>
        <Box w={"250px"} display={{ base: "none", md: "block" }}>
          <Skeleton height="40px" />
          <SkeletonText mt="4" noOfLines={9} spacing="4" />
          <Skeleton height="40px" mt={"50px"} />
          <SkeletonText mt="4" noOfLines={8} spacing="4" />
        </Box>
        <Box flex={1}>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
          >
            {array.map((el, i) => (
              <Skeleton key={uuidv4()} height="280px" />
            ))}
          </Grid>
        </Box>
      </Flex>
    );

  return (
    <div>
      <Flex gap={"20px"}>
        <Box w={"220px"} display={{ base: "none", md: "block" }}>
          <div className={prodstyles.prodpagediv}>
            <div className={prodstyles.filterdiv}>
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid silver",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                FILTER
              </div>

              <div
                style={{ padding: "15px", borderBottom: "1px solid silver" }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  BRANDS
                </div>
                {brandFilter.brands.length &&
                  brandFilter.brands.map((el, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <input
                            type="checkbox"
                            value={el}
                            // checked={brandFilter.selectedBrands[i]}
                            onChange={filterbybrand}
                            style={{ width: "15px", height: "15px" }}
                          />
                          <p style={{ paddingLeft: "10px" }}>{el}</p>
                        </div>
                        <p>{brandFilter.numbrands[i]}</p>
                      </div>
                    );
                  })}
              </div>

              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  DISCOUNTS
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    paddingTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      defaultChecked={true}
                      type="radio"
                      name="discount"
                      value={""}
                      onChange={filterbydiscount}
                      style={{ width: "15px", height: "15px" }}
                    />
                    <p style={{ paddingLeft: "10px" }}>{"Reset Filter"}</p>
                  </div>
                </div>
                {discountFilter.discounts.length &&
                  discountFilter.discounts.map((el, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <input
                            type="radio"
                            name="discount"
                            value={parseInt(el)}
                            onChange={filterbydiscount}
                            style={{ width: "15px", height: "15px" }}
                          />
                          <p style={{ paddingLeft: "10px" }}>{el}</p>
                        </div>
                        <p>{discountFilter.numdiscounts[i]}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Box>
        <Box flex={"1"}>
          <Flex justifyContent={"space-between"} mb="20px">
            <Text fontWeight={600}>All Products</Text>
            <div className={prodstyles.prodsortdiv}>
              <p>Sort By &nbsp;</p>
              <div>
                <select onChange={handleSort} className={prodstyles.sortselect}>
                  <option value="rel">Relevance</option>
                  <option value="plth">Price: Low to High</option>
                  <option value="phtl">Price: High to Low</option>
                  <option value="rlth">Rating: Low to High</option>
                  <option value="rhtl">Rating: High to Low</option>
                </select>
              </div>
            </div>
          </Flex>

          <Grid
            mb={"20px"}
            width={"100%"}
            // border={"1px solid orange"}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
          >
            {data &&
              data.length &&
              data.map((el) => <Allproduct product={el} key={el._id} />)}
          </Grid>
          <Box>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 7px 0px",
              }}
            >
              <div className={prodstyles.pagination}>
                <div className={prodstyles.othernum}>
                  <Button
                    disabled={page == 1}
                    onClick={() => decrpage(page)}
                    variant="link"
                    _hover={{
                      color: "#FF6F61",
                    }}
                    _active={{
                      color: "#FF6F61",
                    }}
                  >
                    Previous
                  </Button>
                </div>
                {pageno.length &&
                  pageno.map((el) => {
                    return (
                      <div key={uuidv4()}>
                        {el == page ? (
                          <div className={prodstyles.numcolor}>{el}</div>
                        ) : (
                          <div
                            onClick={() => setpage(el)}
                            className={prodstyles.othernum}
                          >
                            {el}
                          </div>
                        )}
                      </div>
                    );
                  })}
                <div className={prodstyles.othernum}>
                  <Button
                    disabled={page == pageno.length}
                    onClick={() => incrpage(page)}
                    variant="link"
                    _hover={{
                      color: "#FF6F61",
                    }}
                    _active={{
                      color: "#FF6F61",
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default ProductNew;
