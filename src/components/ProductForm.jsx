import { useState } from "react";
import Input from "./Input";

function ProductForm() {
  const [formProperty, setFormProperty] = useState([]);
  const [productsData, setProductsData] = useState({});

  // get userID from local Storage
  const userID = localStorage.getItem("userID");

  //onChange Handler
  function onChangeHandler(e) {
    const newData = { ...productsData };
    newData[e.target.name] = e.target.value;
    setProductsData(newData);
    console.log(newData);
  }

  //onSubmit Handler
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://cdn.shopify.com/s/files/1/1859/5505/products/peacelily1.jpg?v=1634883411"
              className="w-1/2"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              {/* <!-- Name input --> */}
              <Input
                type="text"
                name="name"
                value={productsData.name}
                required="true"
                handleChange={onChangeHandler}
              />
              {/* <!-- Price input --> */}
              <Input
                type="number"
                name="price"
                value={productsData.price}
                required="true"
                handleChange={onChangeHandler}
              />
              {/* <!-- Category input --> */}
              <Input
                type="text"
                name="category"
                value={productsData.category}
                required="true"
                handleChange={onChangeHandler}
              />

              {/* <!-- CreatedBy input --> */}
              <Input
                type="text"
                name="createBy"
                value={(productsData.createdBy = userID)}
                required="true"
                handleChange={onChangeHandler}
              />

              {/* <!-- Image input --> */}
              <Input
                type="file"
                name="image"
                value=""
                required="true"
                handleChange=""
              />

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductForm;
