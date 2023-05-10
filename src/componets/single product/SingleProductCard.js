import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import SingleProductFindInStore from "./SingleProductFindInStore";
import SizeChart from "./SizeChart";

const SingleProductCard = () => {
  const { id } = useParams({});
  const [singleProduct, setSingleProduct] = useState({});
  const [review, setReview] = useState("");
  const [prodCode, setProdCode] = useState("");
  const { addToBag, isSize, setIsSize, quantity, isQty, setIsQty } =
    useContext(AppContext);

  const size = [
    {
      size: "6",
      value: "6",
    },
    {
      size: "8",
      value: "8",
    },
    {
      size: "10",
      value: "10",
    },
    {
      size: "12",
      value: "12",
    },
    {
      size: "14",
      value: "14",
    },
    {
      size: "16",
      value: "16",
    },
    {
      size: "18",
      value: "18",
    },
    {
      size: "20",
      value: "20",
    },
    {
      size: "22",
      value: "22",
    },
    {
      size: "24",
      value: "24",
    },
  ];
  const getProduct = useCallback(() => {
    fetch(`http://159.65.21.42:9000/product/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setSingleProduct(data);
      });
	}, [id]);

  const setSize = (e) => {
    setIsSize(e.target.innerText);
  };

  const getReview = useCallback(() => {
    let num = Math.floor(Math.random() * 100);
    setReview(num);
  }, []);

  const getProductCode = useCallback(() => {
    let prodCode = Math.random() * 0.9;
    setProdCode(prodCode);
  },[]);

  useEffect(() => {
    getProduct();
    getReview();
    getProductCode();
  }, [getProduct,getProductCode, getReview]);

  return (
    <div>
      {singleProduct._id ? (
        <div className="grid--col--2">
          <div className="singleProductImgWrapper">
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>{" "}
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>{" "}
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>{" "}
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>{" "}
            <figure className="singleProductImg">
              <img
                src={`http://159.65.21.42:9000${singleProduct.image}`}
                alt="selected product"
              />
            </figure>
          </div>

          <div className="info">
            <div className="collection_section">
              <span className="new">New</span>{" "}
              <span className="new">Only online</span>
              <p className="collection">{singleProduct.name}</p>
              <p className="product_description">{singleProduct.description}</p>
              <p className="product_code">product code:TC{prodCode}PC</p>
            </div>
            <div className="review_price">
              <p className="review">
                <Link to="" className="link">
                  {review} Review
                </Link>
              </p>
              <p className="price">£{singleProduct.price.toFixed(2)}</p>
            </div>

            <div className="color-pick--container">
              <p>
                COLOUR <span className="color">Black</span>
              </p>
              <div className="color-pick"></div>
            </div>

            <div className="emerald_freeStandard">
              <form className="push_to_cart">
                <div className="size">
                  <label>SIZE</label>

                  <div className="size-btn--container">
                    {size.map((size) => (
                      <p
                        className="size-btn"
                        key={size.value}
                        onClick={setSize}
                      >
                        {size.size}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="qty--addBtn-container">
                  <div className="select_opt qty">
                    <select
                      value={isQty}
                      onChange={(e) => setIsQty(e.target.value)}
                    >
                      {quantity.map((qty) => (
                        <option key={qty.value} value={qty.value}>
                          {qty.qty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Link
                    // if size is true go to cart page else remain on current page
                    to={isSize ? "/cart" : ""}
                    type="button"
                    className="add_to_bag links"
                    onClick={() => addToBag(singleProduct)}
                  >
                    Add to bag
                  </Link>
                </div>
              </form>
            </div>

			<SingleProductFindInStore/>

			<SizeChart/>

          </div>
        </div>
      ) : (
        <div className="isLoading">🚀</div>
      )}
    </div>
  );
};

export default React.memo(SingleProductCard)
