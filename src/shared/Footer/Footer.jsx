import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div>
          <div>
            <svg
              className="h-8 md:h-14"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#0D9488"
                d="M26.029 58.156c-1.683 0-3.047 1.334-3.047 2.979 0 1.646 1.364 2.979 3.047 2.979s3.047-1.333 3.047-2.979c0-1.645-1.364-2.979-3.047-2.979zm17.795 0c-1.682 0-3.046 1.334-3.046 2.979 0 1.646 1.364 2.979 3.046 2.979 1.683 0 3.047-1.333 3.047-2.979 0-1.645-1.364-2.979-3.047-2.979zM22.515 26.997l5.416 14.5h21.793l6.189-14.5H22.515z"
              />
              <path
                fill="#233251"
                d="m58.753 13-9.67 28.181H23.85l-6.527-17.968h29.111v-2.27H14.036l7.722 21.258-6.281 10.643h35.794v-2.271H19.494l4.207-7.125h27.051l9.67-28.18H71V13H58.753zm-33.4 41.861c-3.134.002-5.674 2.484-5.676 5.548.002 3.065 2.542 5.548 5.676 5.549 3.133-.002 5.672-2.485 5.672-5.549 0-3.064-2.539-5.546-5.672-5.548zm0 8.827c-1.853-.003-3.35-1.468-3.353-3.279.003-1.81 1.5-3.274 3.353-3.277 1.849.003 3.349 1.467 3.352 3.277-.003 1.812-1.503 3.276-3.352 3.279zm17.794-8.827c-3.134.002-5.673 2.484-5.674 5.548.001 3.065 2.54 5.548 5.674 5.549 3.134-.002 5.672-2.485 5.674-5.549-.002-3.064-2.54-5.546-5.674-5.548zm0 8.827c-1.851-.003-3.349-1.468-3.352-3.279.003-1.81 1.501-3.274 3.352-3.277 1.851.003 3.35 1.467 3.353 3.277-.003 1.812-1.502 3.276-3.353 3.279z"
              />
            </svg>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">EasyBuy</h2>

                <p className="mt-4 text-gray-500">
                  Discover a world of convenience and unbeatable deals on the
                  latest products.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-teal-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-700 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4">
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4">
            <h4 className="text-lg font-semibold mb-3">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Specials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4">
            <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4">
            <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-teal-500 dark:border-teal-600 hover:text-teal-500 dark:hover:text-teal-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 dark:border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} EasyBuy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
