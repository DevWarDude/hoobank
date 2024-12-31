import { useEffect, useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowMenu(false);
    });
  }, []);

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      // inline: "nearest",
    });
  }
  return (
    <div className="px-8 sm:px-12 sm:py-6 lg:py-0 lg:px-0">
      <div className="hidden lg:flex justify-between lg:px-24  text-zinc-100 items-center">
        <svg
          className="w-[140px]"
          viewBox="0 0 266 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.487 29.2599V57.9067H101.725V45.4498H89.4707V57.9067H83.7494V29.2599H89.4707V40.8647H101.725V29.2599H107.487ZM123.063 35.1434C125.255 35.1434 127.216 35.6033 128.947 36.523C130.705 37.4428 132.085 38.7818 133.086 40.5401C134.087 42.2713 134.587 44.3137 134.587 46.6671C134.587 49.0205 134.087 51.0629 133.086 52.7941C132.085 54.5254 130.705 55.8644 128.947 56.8112C127.216 57.7309 125.255 58.1908 123.063 58.1908C120.872 58.1908 118.898 57.7309 117.139 56.8112C115.408 55.8644 114.042 54.5254 113.041 52.7941C112.04 51.0629 111.54 49.0205 111.54 46.6671C111.54 44.3137 112.04 42.2713 113.041 40.5401C114.042 38.7818 115.408 37.4428 117.139 36.523C118.898 35.6033 120.872 35.1434 123.063 35.1434ZM123.063 40.0938C121.467 40.0938 120.115 40.6618 119.006 41.798C117.897 42.907 117.342 44.5301 117.342 46.6671C117.342 48.8041 117.897 50.4407 119.006 51.5768C120.115 52.6859 121.467 53.2405 123.063 53.2405C124.659 53.2405 126.012 52.6859 127.121 51.5768C128.23 50.4407 128.785 48.8041 128.785 46.6671C128.785 44.5301 128.23 42.907 127.121 41.798C126.012 40.6618 124.659 40.0938 123.063 40.0938ZM149.018 35.1434C151.209 35.1434 153.17 35.6033 154.901 36.523C156.66 37.4428 158.039 38.7818 159.04 40.5401C160.041 42.2713 160.542 44.3137 160.542 46.6671C160.542 49.0205 160.041 51.0629 159.04 52.7941C158.039 54.5254 156.66 55.8644 154.901 56.8112C153.17 57.7309 151.209 58.1908 149.018 58.1908C146.827 58.1908 144.852 57.7309 143.094 56.8112C141.363 55.8644 139.996 54.5254 138.996 52.7941C137.995 51.0629 137.494 49.0205 137.494 46.6671C137.494 44.3137 137.995 42.2713 138.996 40.5401C139.996 38.7818 141.363 37.4428 143.094 36.523C144.852 35.6033 146.827 35.1434 149.018 35.1434ZM149.018 40.0938C147.422 40.0938 146.069 40.6618 144.96 41.798C143.851 42.907 143.297 44.5301 143.297 46.6671C143.297 48.8041 143.851 50.4407 144.96 51.5768C146.069 52.6859 147.422 53.2405 149.018 53.2405C150.614 53.2405 151.966 52.6859 153.076 51.5768C154.185 50.4407 154.739 48.8041 154.739 46.6671C154.739 44.5301 154.185 42.907 153.076 41.798C151.966 40.6618 150.614 40.0938 149.018 40.0938Z"
            fill="white"
          />
          <path
            d="M180.572 43.137C182.303 43.4886 183.683 44.3137 184.711 45.6121C185.766 46.8835 186.293 48.3848 186.293 50.1161C186.293 52.5236 185.482 54.4307 183.859 55.8373C182.263 57.2169 179.936 57.9067 176.88 57.9067H164.585V29.2599H176.636C179.531 29.2599 181.749 29.8956 183.291 31.167C184.86 32.4384 185.644 34.2237 185.644 36.523C185.644 38.3084 185.171 39.7691 184.224 40.9053C183.304 42.0414 182.087 42.7853 180.572 43.137ZM170.306 41.2705H175.459C176.893 41.2705 177.975 40.9594 178.706 40.3372C179.463 39.688 179.842 38.7683 179.842 37.578C179.842 36.3878 179.476 35.4681 178.746 34.8188C178.016 34.1696 176.893 33.845 175.378 33.845H170.306V41.2705ZM175.743 53.2405C177.258 53.2405 178.421 52.9159 179.233 52.2666C180.045 51.5904 180.45 50.6165 180.45 49.3451C180.45 48.0738 180.031 47.0999 179.192 46.4237C178.381 45.7203 177.218 45.3687 175.703 45.3687H170.306V53.2405H175.743ZM199.107 35.1434C201 35.1434 202.623 35.5898 203.976 36.4825C205.329 37.3751 206.289 38.5789 206.857 40.0938V35.4275H212.538V57.9067H206.857V53.1999C206.289 54.7147 205.329 55.932 203.976 56.8518C202.623 57.7444 201 58.1908 199.107 58.1908C197.213 58.1908 195.509 57.7309 193.994 56.8112C192.479 55.8915 191.289 54.566 190.423 52.8347C189.585 51.0764 189.166 49.0205 189.166 46.6671C189.166 44.3137 189.585 42.2713 190.423 40.5401C191.289 38.7818 192.479 37.4428 193.994 36.523C195.509 35.6033 197.213 35.1434 199.107 35.1434ZM200.892 40.1343C199.107 40.1343 197.673 40.7159 196.591 41.8791C195.509 43.0423 194.968 44.6383 194.968 46.6671C194.968 48.6959 195.509 50.2919 196.591 51.4551C197.673 52.5912 199.107 53.1593 200.892 53.1593C202.623 53.1593 204.044 52.5777 205.153 51.4145C206.289 50.2243 206.857 48.6418 206.857 46.6671C206.857 44.6653 206.289 43.0829 205.153 41.9197C204.044 40.7294 202.623 40.1343 200.892 40.1343ZM231.113 35.1029C233.709 35.1029 235.779 35.955 237.321 37.6592C238.863 39.3634 239.634 41.7574 239.634 44.8412V57.9067H233.953V45.4904C233.953 43.705 233.493 42.3254 232.573 41.3516C231.654 40.3507 230.396 39.8503 228.8 39.8503C227.177 39.8503 225.878 40.3778 224.904 41.4328C223.931 42.4878 223.444 44.0026 223.444 45.9773V57.9067H217.722V35.4275H223.444V39.9314C224.039 38.4166 225.013 37.2399 226.365 36.4013C227.745 35.5357 229.327 35.1029 231.113 35.1029ZM257.814 57.9067L250.389 48.0873V57.9067H244.668V27.8803H250.389V44.76L257.774 35.4275H264.55L255.096 46.6265L264.793 57.9067H257.814Z"
            fill="#5CE1E6"
          />
          <path
            d="M36.0678 0C28.9343 -8.50666e-08 21.9609 2.11534 16.0296 6.07852C10.0983 10.0417 5.47539 15.6747 2.7455 22.2652C0.0156126 28.8558 -0.698651 36.1078 0.693031 43.1043C2.08471 50.1007 5.51984 56.5274 10.564 61.5716C15.6082 66.6157 22.0348 70.0509 29.0313 71.4426C36.0278 72.8342 43.2798 72.12 49.8703 69.3901C56.4609 66.6602 62.0939 62.0373 66.0571 56.106C70.0202 50.1747 72.1356 43.2013 72.1356 36.0678L54.1017 36.0678C54.1017 39.6346 53.044 43.1212 51.0624 46.0869C49.0808 49.0526 46.2643 51.364 42.9691 52.7289C39.6738 54.0939 36.0478 54.451 32.5496 53.7552C29.0513 53.0593 25.838 51.3418 23.3159 48.8197C20.7938 46.2976 19.0763 43.0843 18.3804 39.586C17.6846 36.0878 18.0417 32.4618 19.4066 29.1665C20.7716 25.8713 23.083 23.0547 26.0487 21.0732C29.0144 19.0916 32.501 18.0339 36.0678 18.0339L36.0678 0Z"
            fill="white"
          />
          <path
            d="M36.0678 0C31.3313 -5.64821e-08 26.6412 0.932921 22.2652 2.7455C17.8893 4.55807 13.9132 7.21481 10.564 10.564C7.21481 13.9132 4.55807 17.8893 2.7455 22.2653C0.93292 26.6412 -7.1519e-07 31.3313 0 36.0678L18.0339 36.0678C18.0339 33.6996 18.5004 31.3545 19.4066 29.1665C20.3129 26.9785 21.6413 24.9905 23.3159 23.3159C24.9905 21.6413 26.9785 20.3129 29.1665 19.4066C31.3545 18.5004 33.6995 18.0339 36.0678 18.0339L36.0678 0Z"
            fill="#5CE1E6"
          />
          <circle cx="36.0678" cy="36.0678" r="11.2712" fill="#5CE1E6" />
          <path
            d="M47.339 36.0678C47.339 34.5877 47.0475 33.122 46.481 31.7545C45.9146 30.387 45.0844 29.1445 44.0377 28.0979C42.9911 27.0513 41.7486 26.221 40.3811 25.6546C39.0136 25.0882 37.548 24.7966 36.0678 24.7966C34.5876 24.7966 33.122 25.0882 31.7545 25.6546C30.387 26.221 29.1445 27.0513 28.0979 28.0979C27.0512 29.1445 26.221 30.387 25.6546 31.7545C25.0882 33.122 24.7966 34.5877 24.7966 36.0678L36.0678 36.0678H47.339Z"
            fill="white"
          />
        </svg>
        <ul className="flex gap-12 opacity-70 text-xl">
          <li
            className="cursor-pointer tracking-wider menu-item"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer tracking-wider menu-item"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </li>
          <li
            className="cursor-pointer tracking-wider menu-item"
            onClick={() => scrollToSection("feature")}
          >
            Features
          </li>
          <li
            className="cursor-pointer tracking-wider menu-item"
            onClick={() => scrollToSection("solution")}
          >
            Solution
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex justify-between  text-zinc-100 items-center z-10 relative">
        <svg
          className="w-[105px] sm:w-[120px]"
          viewBox="0 0 266 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.487 29.2599V57.9067H101.725V45.4498H89.4707V57.9067H83.7494V29.2599H89.4707V40.8647H101.725V29.2599H107.487ZM123.063 35.1434C125.255 35.1434 127.216 35.6033 128.947 36.523C130.705 37.4428 132.085 38.7818 133.086 40.5401C134.087 42.2713 134.587 44.3137 134.587 46.6671C134.587 49.0205 134.087 51.0629 133.086 52.7941C132.085 54.5254 130.705 55.8644 128.947 56.8112C127.216 57.7309 125.255 58.1908 123.063 58.1908C120.872 58.1908 118.898 57.7309 117.139 56.8112C115.408 55.8644 114.042 54.5254 113.041 52.7941C112.04 51.0629 111.54 49.0205 111.54 46.6671C111.54 44.3137 112.04 42.2713 113.041 40.5401C114.042 38.7818 115.408 37.4428 117.139 36.523C118.898 35.6033 120.872 35.1434 123.063 35.1434ZM123.063 40.0938C121.467 40.0938 120.115 40.6618 119.006 41.798C117.897 42.907 117.342 44.5301 117.342 46.6671C117.342 48.8041 117.897 50.4407 119.006 51.5768C120.115 52.6859 121.467 53.2405 123.063 53.2405C124.659 53.2405 126.012 52.6859 127.121 51.5768C128.23 50.4407 128.785 48.8041 128.785 46.6671C128.785 44.5301 128.23 42.907 127.121 41.798C126.012 40.6618 124.659 40.0938 123.063 40.0938ZM149.018 35.1434C151.209 35.1434 153.17 35.6033 154.901 36.523C156.66 37.4428 158.039 38.7818 159.04 40.5401C160.041 42.2713 160.542 44.3137 160.542 46.6671C160.542 49.0205 160.041 51.0629 159.04 52.7941C158.039 54.5254 156.66 55.8644 154.901 56.8112C153.17 57.7309 151.209 58.1908 149.018 58.1908C146.827 58.1908 144.852 57.7309 143.094 56.8112C141.363 55.8644 139.996 54.5254 138.996 52.7941C137.995 51.0629 137.494 49.0205 137.494 46.6671C137.494 44.3137 137.995 42.2713 138.996 40.5401C139.996 38.7818 141.363 37.4428 143.094 36.523C144.852 35.6033 146.827 35.1434 149.018 35.1434ZM149.018 40.0938C147.422 40.0938 146.069 40.6618 144.96 41.798C143.851 42.907 143.297 44.5301 143.297 46.6671C143.297 48.8041 143.851 50.4407 144.96 51.5768C146.069 52.6859 147.422 53.2405 149.018 53.2405C150.614 53.2405 151.966 52.6859 153.076 51.5768C154.185 50.4407 154.739 48.8041 154.739 46.6671C154.739 44.5301 154.185 42.907 153.076 41.798C151.966 40.6618 150.614 40.0938 149.018 40.0938Z"
            fill="white"
          />
          <path
            d="M180.572 43.137C182.303 43.4886 183.683 44.3137 184.711 45.6121C185.766 46.8835 186.293 48.3848 186.293 50.1161C186.293 52.5236 185.482 54.4307 183.859 55.8373C182.263 57.2169 179.936 57.9067 176.88 57.9067H164.585V29.2599H176.636C179.531 29.2599 181.749 29.8956 183.291 31.167C184.86 32.4384 185.644 34.2237 185.644 36.523C185.644 38.3084 185.171 39.7691 184.224 40.9053C183.304 42.0414 182.087 42.7853 180.572 43.137ZM170.306 41.2705H175.459C176.893 41.2705 177.975 40.9594 178.706 40.3372C179.463 39.688 179.842 38.7683 179.842 37.578C179.842 36.3878 179.476 35.4681 178.746 34.8188C178.016 34.1696 176.893 33.845 175.378 33.845H170.306V41.2705ZM175.743 53.2405C177.258 53.2405 178.421 52.9159 179.233 52.2666C180.045 51.5904 180.45 50.6165 180.45 49.3451C180.45 48.0738 180.031 47.0999 179.192 46.4237C178.381 45.7203 177.218 45.3687 175.703 45.3687H170.306V53.2405H175.743ZM199.107 35.1434C201 35.1434 202.623 35.5898 203.976 36.4825C205.329 37.3751 206.289 38.5789 206.857 40.0938V35.4275H212.538V57.9067H206.857V53.1999C206.289 54.7147 205.329 55.932 203.976 56.8518C202.623 57.7444 201 58.1908 199.107 58.1908C197.213 58.1908 195.509 57.7309 193.994 56.8112C192.479 55.8915 191.289 54.566 190.423 52.8347C189.585 51.0764 189.166 49.0205 189.166 46.6671C189.166 44.3137 189.585 42.2713 190.423 40.5401C191.289 38.7818 192.479 37.4428 193.994 36.523C195.509 35.6033 197.213 35.1434 199.107 35.1434ZM200.892 40.1343C199.107 40.1343 197.673 40.7159 196.591 41.8791C195.509 43.0423 194.968 44.6383 194.968 46.6671C194.968 48.6959 195.509 50.2919 196.591 51.4551C197.673 52.5912 199.107 53.1593 200.892 53.1593C202.623 53.1593 204.044 52.5777 205.153 51.4145C206.289 50.2243 206.857 48.6418 206.857 46.6671C206.857 44.6653 206.289 43.0829 205.153 41.9197C204.044 40.7294 202.623 40.1343 200.892 40.1343ZM231.113 35.1029C233.709 35.1029 235.779 35.955 237.321 37.6592C238.863 39.3634 239.634 41.7574 239.634 44.8412V57.9067H233.953V45.4904C233.953 43.705 233.493 42.3254 232.573 41.3516C231.654 40.3507 230.396 39.8503 228.8 39.8503C227.177 39.8503 225.878 40.3778 224.904 41.4328C223.931 42.4878 223.444 44.0026 223.444 45.9773V57.9067H217.722V35.4275H223.444V39.9314C224.039 38.4166 225.013 37.2399 226.365 36.4013C227.745 35.5357 229.327 35.1029 231.113 35.1029ZM257.814 57.9067L250.389 48.0873V57.9067H244.668V27.8803H250.389V44.76L257.774 35.4275H264.55L255.096 46.6265L264.793 57.9067H257.814Z"
            fill="#5CE1E6"
          />
          <path
            d="M36.0678 0C28.9343 -8.50666e-08 21.9609 2.11534 16.0296 6.07852C10.0983 10.0417 5.47539 15.6747 2.7455 22.2652C0.0156126 28.8558 -0.698651 36.1078 0.693031 43.1043C2.08471 50.1007 5.51984 56.5274 10.564 61.5716C15.6082 66.6157 22.0348 70.0509 29.0313 71.4426C36.0278 72.8342 43.2798 72.12 49.8703 69.3901C56.4609 66.6602 62.0939 62.0373 66.0571 56.106C70.0202 50.1747 72.1356 43.2013 72.1356 36.0678L54.1017 36.0678C54.1017 39.6346 53.044 43.1212 51.0624 46.0869C49.0808 49.0526 46.2643 51.364 42.9691 52.7289C39.6738 54.0939 36.0478 54.451 32.5496 53.7552C29.0513 53.0593 25.838 51.3418 23.3159 48.8197C20.7938 46.2976 19.0763 43.0843 18.3804 39.586C17.6846 36.0878 18.0417 32.4618 19.4066 29.1665C20.7716 25.8713 23.083 23.0547 26.0487 21.0732C29.0144 19.0916 32.501 18.0339 36.0678 18.0339L36.0678 0Z"
            fill="white"
          />
          <path
            d="M36.0678 0C31.3313 -5.64821e-08 26.6412 0.932921 22.2652 2.7455C17.8893 4.55807 13.9132 7.21481 10.564 10.564C7.21481 13.9132 4.55807 17.8893 2.7455 22.2653C0.93292 26.6412 -7.1519e-07 31.3313 0 36.0678L18.0339 36.0678C18.0339 33.6996 18.5004 31.3545 19.4066 29.1665C20.3129 26.9785 21.6413 24.9905 23.3159 23.3159C24.9905 21.6413 26.9785 20.3129 29.1665 19.4066C31.3545 18.5004 33.6995 18.0339 36.0678 18.0339L36.0678 0Z"
            fill="#5CE1E6"
          />
          <circle cx="36.0678" cy="36.0678" r="11.2712" fill="#5CE1E6" />
          <path
            d="M47.339 36.0678C47.339 34.5877 47.0475 33.122 46.481 31.7545C45.9146 30.387 45.0844 29.1445 44.0377 28.0979C42.9911 27.0513 41.7486 26.221 40.3811 25.6546C39.0136 25.0882 37.548 24.7966 36.0678 24.7966C34.5876 24.7966 33.122 25.0882 31.7545 25.6546C30.387 26.221 29.1445 27.0513 28.0979 28.0979C27.0512 29.1445 26.221 30.387 25.6546 31.7545C25.0882 33.122 24.7966 34.5877 24.7966 36.0678L36.0678 36.0678H47.339Z"
            fill="white"
          />
        </svg>
        <div
          className={`z-40 hamburger ${showMenu && "open"}`}
          onClick={() => setShowMenu((is) => !is)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
      </div>

      <div
        className={`flex transition-all  duration-300 py-8 flex-col z-0 absolute right-7 items-center mt-6 w-[140px] bg rounded-2xl shadow-xl  lg:hidden
        ${!showMenu && "trans"} ${showMenu && "z-[90]"}`}
      >
        <ul className={`flex flex-col text-neutral-300 gap-4 items-start `}>
          <li
            className={`${showMenu && "mobile-menu"} cursor-pointer`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className={`${showMenu && "mobile-menu"} cursor-pointer`}
            onClick={() => scrollToSection("about")}
          >
            About Us
          </li>
          <li
            className={`${showMenu && "mobile-menu"} cursor-pointer`}
            onClick={() => scrollToSection("feature")}
          >
            Features
          </li>
          <li
            className={`${showMenu && "mobile-menu"} cursor-pointer`}
            onClick={() => scrollToSection("solution")}
          >
            Solution
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
