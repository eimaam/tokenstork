const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">TokenStork</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Discover and track BCH tokens with ease. Real-time data and insights at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/tos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/tos#privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@panmoni.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  hello@panmoni.com
                </a>
              </li>
              <li>
                <a href="https://bitcoincashsite.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  BitcoinCashSite.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Keep your existing social icons but update their classes */}
              {/* Reddit */}
              <a
                href="https://www.reddit.com/r/BCHCashTokens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Reddit</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M8.83852 12.4444C8.72864 12.6089 8.66999 12.8022 8.66999 13C8.66999 13.1313 8.69586 13.2614 8.74611 13.3827C8.79637 13.504 8.87003 13.6142 8.96289 13.7071C9.05574 13.8 9.16598 13.8736 9.28731 13.9239C9.40864 13.9741 9.53867 14 9.66999 14C9.86777 14 10.0611 13.9414 10.2256 13.8315C10.39 13.7216 10.5182 13.5654 10.5939 13.3827C10.6696 13.2 10.6894 12.9989 10.6508 12.8049C10.6122 12.6109 10.517 12.4327 10.3771 12.2929C10.2372 12.153 10.0591 12.0578 9.86508 12.0192C9.6711 11.9806 9.47004 12.0004 9.28731 12.0761C9.10458 12.1518 8.9484 12.28 8.83852 12.4444Z"
                    ></path>{" "}
                    <path
                      fillRule="evenodd"
                      d="M12.01 16.52C12.8976 16.5568 13.7705 16.2847 14.48 15.75V15.79C14.5063 15.7644 14.5272 15.7339 14.5417 15.7002C14.5562 15.6664 14.5638 15.6302 14.5643 15.5935C14.5648 15.5569 14.558 15.5204 14.5444 15.4864C14.5308 15.4523 14.5106 15.4213 14.485 15.395C14.4594 15.3687 14.4289 15.3478 14.3951 15.3333C14.3614 15.3188 14.3252 15.3112 14.2885 15.3107C14.2145 15.3098 14.143 15.3383 14.09 15.39C13.4831 15.8254 12.7458 16.0406 12 16C11.2551 16.0333 10.5212 15.811 9.91999 15.37C9.86818 15.3275 9.8024 15.3057 9.73546 15.309C9.66851 15.3123 9.60518 15.3404 9.55778 15.3878C9.51039 15.4352 9.48231 15.4985 9.47903 15.5655C9.47574 15.6324 9.49747 15.6982 9.53999 15.75C10.2495 16.2847 11.1224 16.5568 12.01 16.52Z"
                    ></path>{" "}
                    <path d="M13.7444 13.8715C13.9089 13.9814 14.1022 14.04 14.3 14.04L14.29 14.08C14.4256 14.0815 14.5601 14.0553 14.6852 14.0032C14.8104 13.9511 14.9237 13.874 15.0182 13.7767C15.1126 13.6795 15.1863 13.564 15.2348 13.4373C15.2832 13.3107 15.3054 13.1755 15.3 13.04C15.3 12.8422 15.2413 12.6489 15.1315 12.4844C15.0216 12.32 14.8654 12.1918 14.6827 12.1161C14.4999 12.0404 14.2989 12.0206 14.1049 12.0592C13.9109 12.0978 13.7327 12.193 13.5929 12.3329C13.453 12.4727 13.3578 12.6509 13.3192 12.8449C13.2806 13.0389 13.3004 13.24 13.3761 13.4227C13.4518 13.6054 13.58 13.7616 13.7444 13.8715Z"></path>{" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM18.4065 11.2154C18.5682 11.446 18.6597 11.7185 18.67 12C18.6743 12.2755 18.6005 12.5467 18.4571 12.782C18.3138 13.0174 18.1068 13.2073 17.86 13.33C17.8713 13.4765 17.8713 13.6236 17.86 13.77C17.86 16.01 15.25 17.83 12.03 17.83C8.80999 17.83 6.19999 16.01 6.19999 13.77C6.18873 13.6236 6.18873 13.4765 6.19999 13.33C6.00765 13.2416 5.83683 13.1125 5.69935 12.9515C5.56188 12.7906 5.46105 12.6017 5.40384 12.3979C5.34664 12.1941 5.33443 11.9803 5.36807 11.7713C5.4017 11.5623 5.48038 11.3632 5.59864 11.1876C5.71689 11.0121 5.87191 10.8643 6.05294 10.7546C6.23397 10.645 6.43669 10.5759 6.64705 10.5524C6.8574 10.5288 7.07036 10.5513 7.27117 10.6182C7.47198 10.6852 7.65583 10.795 7.80999 10.94C8.96227 10.1585 10.3179 9.73099 11.71 9.71L12.45 6.24C12.4583 6.19983 12.4745 6.16171 12.4977 6.12784C12.5208 6.09398 12.5505 6.06505 12.5849 6.04272C12.6193 6.0204 12.6578 6.00513 12.6981 5.99779C12.7385 5.99046 12.7799 5.99121 12.82 6L15.27 6.49C15.3896 6.28444 15.5786 6.12825 15.8031 6.04948C16.0275 5.9707 16.2726 5.9745 16.4945 6.06019C16.7164 6.14587 16.9005 6.30784 17.0137 6.51701C17.1269 6.72617 17.1619 6.96885 17.1123 7.20147C17.0627 7.4341 16.9319 7.64143 16.7432 7.78627C16.5545 7.9311 16.3204 8.00394 16.0829 7.99172C15.8453 7.9795 15.6199 7.88301 15.4471 7.71958C15.2743 7.55615 15.1654 7.33648 15.14 7.1L13 6.65L12.35 9.77C13.7252 9.7995 15.0624 10.2267 16.2 11C16.4032 10.805 16.6585 10.6729 16.9351 10.6196C17.2117 10.5664 17.4978 10.5943 17.7589 10.7C18.0199 10.8057 18.2449 10.9847 18.4065 11.2154Z"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/bitcoincashsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 1200 1227"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Panmoni/tokenstork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/Panmoni/487"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Telegram</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>telegram</title>{" "}
                    <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0-0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>{" "}
                  </g>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RealBitcoinCashSite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ionicons-v5_logos</title>
                    <path d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"></path>
                  </g>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bitcoincashsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              A{" "}
              <a
                href="https://www.panmoni.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Panmoni
              </a>{" "}
              project | version 0.0.2 (beta)
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 max-w-2xl mx-auto">
              <strong className="font-medium">Disclaimer:</strong> Cryptocurrency investments carry inherent risks. 
              Please conduct thorough research and exercise caution in your investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
