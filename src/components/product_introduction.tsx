import nanoplasty from "../assets/nanoplasty.png";
const product_introduction = () => {

  return (
    <>
      {/* first section */}
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
          <div className="text-left ml-12 sm:flex sm:flex-col">
            <div className="sm:flex sm:mb-16">
              <div className="pt-7 pb-3 ml-3 sm:mr-8 border-b-2 border-gray-200 ">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
              <div className="sm:pt-7 pt-3 pb-3 ml-3 border-b-2 border-gray-200">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
            </div>

            <div className="sm:flex">
              <div className="sm:pt-7 pt-3 pb-3 ml-3 sm:mr-8 border-b-2 border-gray-200">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
              <div className="sm:pt-7 pt-3 pb-3 ml-3 border-b-2 border-gray-200">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* second section */}
      <div className="flex flex-col  w-full">
        <div className="">
          <h1>
            for professional saloons <br />
            and women
          </h1>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row ">
          <div className="sm:w-2/4 w-full text-left">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quaerat dolore corporis adipisci, nobis soluta natus? Aspernatur vitae et ab, laborum, facere velit minus, accusamus ipsa exercitationem a ipsam magnam.</p>
            <div className="flex flex-col ">
              <div className="sm:pt-7 w-4/6 pt-3 pb-3   border-b-2 border-gray-200">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
              <div className="sm:pt-7 w-4/6 pt-3 pb-3  border-b-2 border-gray-200">
                <h1 className="h1 text-xl">Introducing NanoPlasty</h1>
                <p>World's best Product</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://w0.peakpx.com/wallpaper/518/289/HD-wallpaper-shahrukh-khan-srk-smile-srk-smile-thumbnail.jpg" alt="" className="sm:ml-8 h-96 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default product_introduction;
