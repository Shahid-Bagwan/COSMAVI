import nanoplasty from "../assets/nanoplasty.png";
const product_introduction = () => {
  
  return (
    <>
      <div>
        <div className="w-full text-center">
          <h1 className="h1 text-3xl">Introducing NanoPlasty</h1>
          <p>World's best Product</p>
        </div>
        <div className="d-flex flex justify-center pt-16">
          <div>
            <img
              src={nanoplasty}
              alt=""
              className="h-96 w-28  "
            />
          </div>
          <div className="text-left ml-12">
            <div className="pt-7 pb-3 ml-3">
              <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
              <p>World's best Product</p>
            </div>
            <div className="sm:pt-7 pt-3 pb-3 ml-3">
              <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
              <p>World's best Product</p>
            </div>
            <div className="sm:pt-7 pt-3 pb-3 ml-3">
              <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
              <p>World's best Product</p>
            </div>
            <div className="sm:pt-7 pt-3 pb-3 ml-3">
              <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
              <p>World's best Product</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default product_introduction;
