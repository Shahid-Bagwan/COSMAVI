import logo from "../assets/Cosmavi-logo.png";
const footer = () => {
  return (
    <>
      <section>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-left bg-black ">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img src={logo} alt="" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  Cosmavi
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-100">
                  Crafting Beauty Through Innovation Since Day One. Our passion
                  is to redefine beauty and provide exceptional solutions for
                  all hair types.
                </p>
                <p className="mt-4 text-sm text-gray-100">
                  Join us on this journey towards healthier, more radiant hair.
                  Together, we empower you to embrace your unique beauty.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-100">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-100">Phone:</p>
                <a
                  href="tel:7276780411"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-gray-100 hover:text-gray-300"
                >
                  (+91)7276780411
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-100">Email:</p>
                <a
                  href="mailto:Cosmaviindia@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-gray-100 hover:text-gray-300"
                >
                  Cosmaviindia@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-100">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-gray-100 hover:text-gray-300"
                >
                  119, 1, 2, Bhondvewasti, Pune City, Chinchwadgaon, Mulshi Pune
                  - 411033
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-100">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://youtu.be/W1425stwpJc?si=zEBmY8qZSHOeQOiU"
                  className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400" target="_blank"
                >
                <i className="fa-brands fa-youtube fa-lg"></i>
                </a>
                
              </div>
              <p className="mt-4 text-sm text-gray-100">
                Connect with Us: Follow for Beauty and Innovation Updates.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2023 Lorem Inc. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default footer;
