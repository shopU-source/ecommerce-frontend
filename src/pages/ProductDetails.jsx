import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../components/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ProductSlider from "../components/ProductSlider";
import ProductDetailsComponent from "../components/ProductDetailsComponent";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5 bg-[#e4f0d4]">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Medicine
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Product details of saree
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%] pr-10 pl-10">
            <ProductDetailsComponent />
          </div>
        </div>
        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Reviews (5)
            </span>
          </div>
          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 p-8 rounded-md">
              <p className="mb-3">
                Keitra focuses on curating outfits with materials that are not
                just rich-looking, but also provide the utmost comfort to the
                one who wears them. The much-awaited women&apos;s only brand,
                that has received numerous accolades from its valued customers
                to date. Established in Surat, this ready-to-wear brand has come
                to be synonymous with versatile yet powerful casual-wear for
                women. Known for the use of experimental textiles, vibrant
                prints, and detailed craftsmanship, Keitra has inspired various
                brands in India, while constantly evolving and expanding the
                product line and ruling the hearts of loyal customers.
              </p>
              <h4>Other details</h4>
              <p className="mb-3 mt-2">
                Keitra focuses on curating outfits with materials that are not
                just rich-looking, but also provide the utmost comfort to the
                one who wears them. The much-awaited women&apos;s only brand,
                that has received numerous accolades from its valued customers
                to date. Established in Surat, this ready-to-wear brand has come
                to be synonymous with versatile yet powerful casual-wear for
                women. Known for the use of experimental textiles, vibrant
                prints, and detailed craftsmanship, Keitra has inspired various
                brands in India, while constantly evolving and expanding the
                product line and ruling the hearts of loyal customers.
              </p>
              <h4>Free Shipping</h4>
              <p className="mb-3 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium dolorum nemo culpa aut deserunt eligendi
                consequuntur maxime sed id eius!
              </p>
              <h4>Free Shipping</h4>
              <p className="mb-3 mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, minus quo. Alias ab veniam autem aut, saepe vero
                velit eum facere illum doloribus nobis amet molestias ad iste
                voluptates! Ratione!
              </p>
              <h4>Free Shipping</h4>
              <p className="mb-3 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                vero deserunt perspiciatis. Minima, ipsam? Soluta placeat et
                quia quis optio magnam incidunt debitis eum. Dolore culpa
                aspernatur repellat nesciunt necessitatibus eligendi at nostrum
                illum. Distinctio voluptatem blanditiis in officia deleniti!
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 p-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Apple MacBook Pro 17&quot;
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 p-8 rounded-md">
              <div className="w-full productReviewContainer">
                <h2 className="text-[18px]">Customer question and answer</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjes9As0KBB_ufe_alnSpFsvwJLQFkrZws7g&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Ankit Kumar</h4>
                        <h5 className="text-[13px] mb-0">09-07-2024</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Error voluptatum et doloribus natus odit
                          sapiente maiores hic culpa animi blanditiis?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={0} readOnly />
                  </div>
                </div>
                <br />
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review"
                      multiline
                      className="w-full"
                      maxRows={5}
                    />
                    <div className="mt-5">
                      <Rating name="size-small" defaultValue={4} />
                    </div>
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container">
          <h3 className="text-[22px] font-[600] mt-10">Related Product</h3>
          <p className="text-[14px] font-[400]">
            Do not miss the current offers until the end of Season
          </p>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
