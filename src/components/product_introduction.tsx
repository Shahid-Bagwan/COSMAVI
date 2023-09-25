import nanoplasty from "../assets/nanoplasty.jpg";

const product_introduction = () => {

  return (
    <>
      <section className="w-full">
        <div id="nanoplasty" className="container  mx-0 md:px-6 pb-8">
          <section  className=" text-left w-full">
            <h2 className="mb-12 text-center text-3xl font-bold pt-12">
              INTRODUCING NANOPLASTY BY COSMAVI.
            </h2>

            <div className="flex flex-wrap items-center ">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12  ">
                <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20 "
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src={nanoplasty} className="w-full" />
                  <a href="#!">

                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <div
                        className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <i className="fa-solid fa-wand-magic-sparkles text-4xl"></i>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">Heals,Repair & Restore</p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      Nanoplastia is an innovative hair treatment that can help to heal, repair, and restore damaged hair. It is a formaldehyde-free treatment that uses a combination of keratin and other nutrients to strengthen the hair shaft and improve hair health.
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <i className="fa-solid fa-hand-holding-heart text-4xl"></i>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">Advanced Generation Treatment</p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      Nanoplastia is an innovative hair treatment that can help to heal, repair, and restore damaged hair. It is a formaldehyde-free treatment that uses a combination of keratin and other nutrients to strengthen the hair shaft and improve hair health.
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <i className="fa-solid fa-users text-4xl"></i>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">Trusted by Clients and Stylists</p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      Nanoplastia is a trusted hair treatment that is used by salons and stylists all over the world. It is a safe and effective treatment that can be used on all hair types, including damaged, frizzy, and curly hair.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="shrink-0">
                    <i className="fa-solid fa-vial-circle-check text-4xl"></i>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">Clinically Tested</p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      Nanoplastia has been clinically tested and proven to be safe and effective. It is a formaldehyde-free treatment that does not damage the hair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

    </>
  );
};

export default product_introduction;
