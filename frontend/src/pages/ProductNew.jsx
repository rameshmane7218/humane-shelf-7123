import React, { useState, useEffect } from "react";
import { Box, Grid, Flex, Text, Button } from "@chakra-ui/react";
import alldata from "../assets/newData.json";
import Allproduct from "../components/Products/Allproduct";
import { v4 as uuidv4 } from "uuid";
import prodstyles from "./products.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchdata,
  sortproducts,
  fetchfilterbrand,
  fetchfilterdiscount,
} from "../store/products/products.actions";
import { getAllProductsAPI } from "../store/newProduct/products.actions";
import Footer from "../components/Footer";
const ProductNew = () => {
  let dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageno, setPageno] = useState([]);
  const [page, setpage] = React.useState(1);
  const { data: backendData } = useSelector((store) => store.products);

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
  }, []);
  useEffect(() => {
    setAllData(backendData);
    setData(backendData);
  }, [backendData]);
  useEffect(() => {
    if (allData.length) {
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
      let filter = new Array(brand.length).fill(false);
      setBrandFilter({
        ...brandFilter,
        brands: [...brand],
        numbrands: [...numbrand],
        selectedBrands: [...filter],
      });
    }
  }, [allData]);
  useEffect(() => {
    if (allData.length) {
      //filter by discount
      var obj2 = {};
      allData.map((el) => {
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
      let filter = new Array(discount.length).fill(false);
      setDiscountFilter({
        ...brandFilter,
        discounts: [...discount],
        numdiscounts: [...numdiscount],
        selectedDiscounts: [...filter],
      });
    }
  }, [allData]);

  useEffect(() => {
    if (data.length) {
      let last = Math.ceil(data.length / 12);
      let pagenoArr = [];
      for (let i = 1; i <= last; i++) {
        pagenoArr.push(i);
      }
      setPageno([...pagenoArr]);
    }
  }, [data]);
  /*
 

 



  const filterbydiscount = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      dispatch(fetchfilterdiscount(e.target.value));
    } else {
      dispatch(fetchdata());
    }
  };


  
*/
  const filterbybrand = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);

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
    // console.log(temp.join("&").trim());
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
    if (value == "rel") {
      if (allData.length) {
        setData([...allData]);
      }
    } else if (value == "plth") {
      let temp = data.sort((a, b) => Number(a.price) - Number(b.price));
      setData([...temp]);
    } else if (value == "phtl") {
      let temp = data.sort((a, b) => Number(b.price) - Number(a.price));
      setData([...temp]);
    } else if (value == "rlth") {
      let temp = data.sort((a, b) => Number(a.ratings) - Number(b.ratings));
      setData([...temp]);
    } else if (value == "rhtl") {
      let temp = data.sort((a, b) => Number(b.ratings) - Number(a.ratings));
      setData([...temp]);
    }
  };
  return (
    <div>
      <Flex gap={"20px"}>
        <Box w={"220px"}>
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
                            type="checkbox"
                            value={parseInt(el)}
                            // onChange={filterbydiscount}
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
          <Text>All Products</Text>
          <Flex justifyContent={"flex-end"} mb="20px">
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
            {data.length &&
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
