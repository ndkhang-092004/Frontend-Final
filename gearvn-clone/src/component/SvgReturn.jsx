export default function svgReturn({ name }) {
  switch (name) {
    case "cpu":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#6d6e72"
            d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
          />
        </svg>
      );
    case "vga":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-gpu-card"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" />
          <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5" />
        </svg>
      );
    case "mainboard":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-motherboard"
          viewBox="0 0 16 16"
        >
          <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
          <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
        </svg>
      );
    case "ram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-memory"
          viewBox="0 0 16 16"
        >
          <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z" />
        </svg>
      );
    case "ssd":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-hdd"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
          <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198zM3.655 4.26 1.592 8.043Q1.79 8 2 8h12q.21 0 .408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
        </svg>
      );
    case "hdd":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-hdd"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
          <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198zM3.655 4.26 1.592 8.043Q1.79 8 2 8h12q.21 0 .408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
        </svg>
      );
    case "rating":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      );
    case "monitor":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.5H3.875C3.98333 3.5 4.073 3.4645 4.144 3.3935C4.21467 3.32283 4.25 3.23333 4.25 3.125C4.25 3.01667 4.21467 2.92717 4.144 2.8565C4.073 2.7855 3.98333 2.75 3.875 2.75H2.75C2.60833 2.75 2.4895 2.79783 2.3935 2.8935C2.29783 2.9895 2.25 3.10833 2.25 3.25V4.375C2.25 4.48333 2.2855 4.57283 2.3565 4.6435C2.42717 4.7145 2.51667 4.75 2.625 4.75C2.73333 4.75 2.82283 4.7145 2.8935 4.6435C2.9645 4.57283 3 4.48333 3 4.375V3.5ZM6.75 5.25H5.875C5.76667 5.25 5.67717 5.28533 5.6065 5.356C5.5355 5.427 5.5 5.51667 5.5 5.625C5.5 5.73333 5.5355 5.82283 5.6065 5.8935C5.67717 5.9645 5.76667 6 5.875 6H7C7.14167 6 7.26033 5.952 7.356 5.856C7.452 5.76033 7.5 5.64167 7.5 5.5V4.375C7.5 4.26667 7.46467 4.177 7.394 4.106C7.323 4.03533 7.23333 4 7.125 4C7.01667 4 6.927 4.03533 6.856 4.106C6.78533 4.177 6.75 4.26667 6.75 4.375V5.25ZM3.5 9.5C3.35833 9.5 3.23967 9.452 3.144 9.356C3.048 9.26033 3 9.14167 3 9V8.5H1C0.725 8.5 0.489667 8.40217 0.294 8.2065C0.098 8.0105 0 7.775 0 7.5V1.5C0 1.225 0.098 0.9895 0.294 0.7935C0.489667 0.597833 0.725 0.5 1 0.5H9C9.275 0.5 9.5105 0.597833 9.7065 0.7935C9.90217 0.9895 10 1.225 10 1.5V7.5C10 7.775 9.90217 8.0105 9.7065 8.2065C9.5105 8.40217 9.275 8.5 9 8.5H7V9C7 9.14167 6.95217 9.26033 6.8565 9.356C6.7605 9.452 6.64167 9.5 6.5 9.5H3.5ZM1.5 7H8.5V2H1.5V7Z"
            fill="#6D6E72"
          ></path>
        </svg>
      );
    case "battery":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <g width="10" height="10" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 2.49984C2.49993 2.2896 2.57934 2.0871 2.72229 1.93294C2.86524 1.77878 3.06118 1.68436 3.27083 1.66859L3.33333 1.6665L3.75 1.6665C3.74993 1.45626 3.82934 1.25377 3.97229 1.09961C4.11524 0.94545 4.31118 0.851022 4.52083 0.835254L4.58333 0.833171L5.41667 0.833171C5.62691 0.833104 5.8294 0.912507 5.98356 1.05546C6.13772 1.19842 6.23215 1.39436 6.24792 1.604L6.25 1.6665L6.66667 1.6665C6.87691 1.66644 7.0794 1.74584 7.23356 1.88879C7.38772 2.03175 7.48215 2.22769 7.49792 2.43734L7.5 2.49984L7.5 8.33317C7.50007 8.54341 7.42066 8.74591 7.27771 8.90007C7.13476 9.05422 6.93881 9.14865 6.72917 9.16442L6.66667 9.1665L3.33333 9.1665C3.12309 9.16657 2.9206 9.08717 2.76644 8.94421C2.61228 8.80126 2.51785 8.60532 2.50208 8.39567L2.5 8.33317L2.5 2.49984ZM3.75 7.49984C3.75001 7.60189 3.78748 7.70039 3.8553 7.77666C3.92311 7.85292 4.01656 7.90165 4.11792 7.91359L4.16667 7.9165L5.83333 7.9165C5.93953 7.91639 6.04168 7.87572 6.1189 7.80282C6.19613 7.72991 6.2426 7.63027 6.24882 7.52426C6.25505 7.41824 6.22055 7.31385 6.15239 7.23241C6.08423 7.15097 5.98754 7.09863 5.88208 7.08609L5.83333 7.08317L4.16667 7.08317C4.05616 7.08317 3.95018 7.12707 3.87204 7.20521C3.7939 7.28335 3.75 7.38933 3.75 7.49984ZM3.75 6.24984C3.75 6.36034 3.7939 6.46632 3.87204 6.54447C3.95018 6.62261 4.05616 6.6665 4.16667 6.6665L5.83333 6.6665C5.94384 6.6665 6.04982 6.6226 6.12796 6.54446C6.2061 6.46632 6.25 6.36034 6.25 6.24984C6.25 6.13933 6.2061 6.03335 6.12796 5.95521C6.04982 5.87707 5.94384 5.83317 5.83333 5.83317L4.16667 5.83317C4.05616 5.83317 3.95018 5.87707 3.87204 5.95521C3.7939 6.03335 3.75 6.13933 3.75 6.24984Z"
              fill="#6D6E72"
            ></path>
          </g>
        </svg>
      );
    case "connect":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.74416 1.07739C2.90044 0.92111 3.1124 0.833313 3.33341 0.833313H6.66675C6.88776 0.833313 7.09972 0.92111 7.256 1.07739C7.41228 1.23367 7.50008 1.44563 7.50008 1.66665V4.16665C7.7211 4.16665 7.93306 4.25444 8.08934 4.41072C8.24562 4.567 8.33341 4.77897 8.33341 4.99998V6.24998C8.33341 6.80251 8.11392 7.33242 7.72322 7.72312C7.33252 8.11382 6.80262 8.33331 6.25008 8.33331V8.74998C6.25008 8.9801 6.06353 9.16665 5.83341 9.16665C5.6033 9.16665 5.41675 8.9801 5.41675 8.74998V8.33331H4.58341V8.74998C4.58341 8.9801 4.39687 9.16665 4.16675 9.16665C3.93663 9.16665 3.75008 8.9801 3.75008 8.74998V8.33331C3.19755 8.33331 2.66764 8.11382 2.27694 7.72312C1.88624 7.33242 1.66675 6.80251 1.66675 6.24998V4.99998C1.66675 4.77897 1.75455 4.567 1.91083 4.41072C2.06711 4.25444 2.27907 4.16665 2.50008 4.16665V1.66665C2.50008 1.44563 2.58788 1.23367 2.74416 1.07739ZM2.50008 4.99998L2.50008 6.24998C2.50008 6.5815 2.63178 6.89944 2.8662 7.13386C3.10062 7.36828 3.41856 7.49998 3.75008 7.49998H6.25008C6.5816 7.49998 6.89954 7.36828 7.13396 7.13386C7.36839 6.89944 7.50008 6.5815 7.50008 6.24998V4.99998H2.50008ZM6.66675 4.16665V1.66665H3.33341V4.16665H6.66675ZM4.16675 2.08331C4.39687 2.08331 4.58341 2.26986 4.58341 2.49998V2.91665C4.58341 3.14676 4.39687 3.33331 4.16675 3.33331C3.93663 3.33331 3.75008 3.14676 3.75008 2.91665V2.49998C3.75008 2.26986 3.93663 2.08331 4.16675 2.08331ZM5.83341 2.08331C6.06353 2.08331 6.25008 2.26986 6.25008 2.49998V2.91665C6.25008 3.14676 6.06353 3.33331 5.83341 3.33331C5.6033 3.33331 5.41675 3.14676 5.41675 2.91665V2.49998C5.41675 2.26986 5.6033 2.08331 5.83341 2.08331Z"
            fill="#6D6E72"
          ></path>
          <path
            d="M2.0835 4.99998C2.0835 4.88947 2.12739 4.78349 2.20554 4.70535C2.28368 4.62721 2.38966 4.58331 2.50016 4.58331H7.50016C7.61067 4.58331 7.71665 4.62721 7.79479 4.70535C7.87293 4.78349 7.91683 4.88947 7.91683 4.99998V6.24998C7.91683 6.69201 7.74123 7.11593 7.42867 7.42849C7.11611 7.74105 6.69219 7.91665 6.25016 7.91665H3.75016C3.30814 7.91665 2.88421 7.74105 2.57165 7.42849C2.25909 7.11593 2.0835 6.69201 2.0835 6.24998V4.99998Z"
            fill="#6D6E72"
          ></path>
        </svg>
      );
    case "led":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9087_14570)">
            <path
              d="M1.66661 4.58331C1.77281 4.58343 1.87496 4.6241 1.95218 4.697C2.02941 4.7699 2.07588 4.86954 2.0821 4.97556C2.08832 5.08158 2.05383 5.18597 1.98567 5.26741C1.91751 5.34885 1.82082 5.40119 1.71536 5.41373L1.66661 5.41665H1.24995C1.14375 5.41653 1.0416 5.37586 0.964375 5.30296C0.887152 5.23006 0.840681 5.13042 0.834457 5.0244C0.828233 4.91838 0.862726 4.81399 0.930889 4.73255C0.999052 4.65111 1.09574 4.59877 1.2012 4.58623L1.24995 4.58331H1.66661ZM4.99995 0.833313C5.102 0.833326 5.2005 0.870795 5.27677 0.938611C5.35303 1.00643 5.40175 1.09987 5.41369 1.20123L5.41661 1.24998V1.66665C5.41649 1.77285 5.37583 1.87499 5.30293 1.95222C5.23002 2.02944 5.13038 2.07591 5.02436 2.08213C4.91835 2.08836 4.81395 2.05387 4.73251 1.9857C4.65108 1.91754 4.59874 1.82085 4.58619 1.7154L4.58328 1.66665V1.24998C4.58328 1.13947 4.62718 1.03349 4.70532 0.955352C4.78346 0.877212 4.88944 0.833313 4.99995 0.833313ZM8.74995 4.58331C8.85614 4.58343 8.95829 4.6241 9.03551 4.697C9.11274 4.7699 9.15921 4.86954 9.16543 4.97556C9.17166 5.08158 9.13716 5.18597 9.069 5.26741C9.00084 5.34885 8.90415 5.40119 8.7987 5.41373L8.74995 5.41665H8.33328C8.22708 5.41653 8.12493 5.37586 8.04771 5.30296C7.97049 5.23006 7.92401 5.13042 7.91779 5.0244C7.91157 4.91838 7.94606 4.81399 8.01422 4.73255C8.08238 4.65111 8.17907 4.59877 8.28453 4.58623L8.33328 4.58331H8.74995ZM2.0387 2.03873C2.11044 1.96699 2.2059 1.92389 2.30716 1.91753C2.40842 1.91116 2.50853 1.94196 2.5887 2.00415L2.62786 2.03873L2.91953 2.3304C2.99426 2.40538 3.03764 2.50599 3.04087 2.61181C3.0441 2.71762 3.00694 2.82069 2.93692 2.9001C2.86691 2.9795 2.7693 3.02927 2.66391 3.03931C2.55853 3.04935 2.45327 3.0189 2.36953 2.95415L2.33036 2.91956L2.0387 2.6279C1.96058 2.54976 1.9167 2.4438 1.9167 2.33331C1.9167 2.22283 1.96058 2.11687 2.0387 2.03873ZM7.37203 2.03873C7.44701 1.964 7.54763 1.92062 7.65344 1.91738C7.75925 1.91415 7.86233 1.95132 7.94173 2.02133C8.02113 2.09135 8.07091 2.18896 8.08095 2.29434C8.09098 2.39973 8.06053 2.50498 7.99578 2.58873L7.96119 2.6279L7.66953 2.91956C7.59455 2.99429 7.49393 3.03768 7.38812 3.04091C7.28231 3.04414 7.17923 3.00697 7.09983 2.93696C7.02043 2.86695 6.97065 2.76933 6.96061 2.66395C6.95057 2.55856 6.98102 2.45331 7.04578 2.36956L7.08036 2.3304L7.37203 2.03873ZM5.83328 7.49998C5.94379 7.49998 6.04977 7.54388 6.12791 7.62202C6.20605 7.70016 6.24995 7.80614 6.24995 7.91665C6.24995 8.24817 6.11825 8.56611 5.88383 8.80053C5.64941 9.03495 5.33147 9.16665 4.99995 9.16665C4.66842 9.16665 4.35048 9.03495 4.11606 8.80053C3.88164 8.56611 3.74995 8.24817 3.74995 7.91665C3.74996 7.81459 3.78743 7.71609 3.85524 7.63982C3.92306 7.56356 4.01651 7.51484 4.11786 7.5029L4.16661 7.49998H5.83328ZM4.99995 2.49998C5.52465 2.49998 6.03606 2.66507 6.46172 2.97187C6.88738 3.27868 7.20573 3.71163 7.37165 4.20941C7.53758 4.70719 7.54268 5.24456 7.38623 5.7454C7.22978 6.24624 6.91971 6.68516 6.49995 6.99998C6.44252 7.04311 6.37491 7.07067 6.30369 7.07998L6.24995 7.08331H3.74995C3.65979 7.08331 3.57207 7.05407 3.49995 6.99998C3.08018 6.68516 2.77011 6.24624 2.61366 5.7454C2.45721 5.24456 2.46231 4.70719 2.62824 4.20941C2.79416 3.71163 3.11251 3.27868 3.53817 2.97187C3.96383 2.66507 4.47524 2.49998 4.99995 2.49998Z"
              fill="#6D6E72"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_9087_14570">
              <rect width="10" height="10" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      );
    case "refreshRate":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8337_18915)">
            <path
              d="M5 0.833313V4.37498"
              stroke="#6D6E72"
              strokeWidth="0.833333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.99992 0.833313C2.69867 0.833313 0.833252 2.69873 0.833252 4.99998C0.833252 7.30123 2.69867 9.16665 4.99992 9.16665C7.30117 9.16665 9.16659 7.30123 9.16659 4.99998C9.16659 4.03623 8.8395 3.14894 8.29013 2.4431"
              stroke="#6D6E72"
              strokeWidth="0.833333"
              strokeLinecap="round"
            ></path>
            <path
              d="M4.99992 2.70831C3.73429 2.70831 2.70825 3.73435 2.70825 4.99998C2.70825 6.2656 3.73429 7.29165 4.99992 7.29165C6.26554 7.29165 7.29159 6.2656 7.29159 4.99998C7.29159 4.46998 7.11159 3.98185 6.8095 3.59373"
              stroke="#6D6E72"
              strokeWidth="0.833333"
              strokeLinecap="round"
            ></path>
            <path
              d="M5 5.625C5.34518 5.625 5.625 5.34518 5.625 5C5.625 4.65482 5.34518 4.375 5 4.375C4.65482 4.375 4.375 4.65482 4.375 5C4.375 5.34518 4.65482 5.625 5 5.625Z"
              stroke="#6D6E72"
              strokeWidth="0.833333"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_8337_18915">
              <rect width="10" height="10" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      );
    case "layout":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.375C1 3.01033 1.14487 2.66059 1.40273 2.40273C1.66059 2.14487 2.01033 2 2.375 2H7.625C7.98967 2 8.33941 2.14487 8.59727 2.40273C8.85513 2.66059 9 3.01033 9 3.375V6.625C9 6.98967 8.85513 7.33941 8.59727 7.59727C8.33941 7.85513 7.98967 8 7.625 8H2.375C2.01033 8 1.66059 7.85513 1.40273 7.59727C1.14487 7.33941 1 6.98967 1 6.625V3.375ZM5.5 3.25C5.5 3.3163 5.52634 3.37989 5.57322 3.42678C5.62011 3.47366 5.6837 3.5 5.75 3.5H6.1465L5.323 4.323C5.29976 4.34624 5.28132 4.37384 5.26874 4.40421C5.25616 4.43458 5.24968 4.46713 5.24968 4.5C5.24968 4.53287 5.25616 4.56542 5.26874 4.59579C5.28132 4.62616 5.29976 4.65376 5.323 4.677C5.34624 4.70024 5.37384 4.71868 5.40421 4.73126C5.43458 4.74384 5.46713 4.75032 5.5 4.75032C5.53287 4.75032 5.56542 4.74384 5.59579 4.73126C5.62616 4.71868 5.65376 4.70024 5.677 4.677L6.5 3.8535V4.25C6.5 4.3163 6.52634 4.37989 6.57322 4.42678C6.62011 4.47366 6.6837 4.5 6.75 4.5C6.8163 4.5 6.87989 4.47366 6.92678 4.42678C6.97366 4.37989 7 4.3163 7 4.25V3.25C7 3.1837 6.97366 3.12011 6.92678 3.07322C6.87989 3.02634 6.8163 3 6.75 3H5.75C5.6837 3 5.62011 3.02634 5.57322 3.07322C5.52634 3.12011 5.5 3.1837 5.5 3.25ZM4.677 5.323C4.65378 5.29972 4.62619 5.28125 4.59582 5.26864C4.56544 5.25604 4.53288 5.24955 4.5 5.24955C4.46712 5.24955 4.43456 5.25604 4.40418 5.26864C4.37381 5.28125 4.34622 5.29972 4.323 5.323L3.5 6.1465V5.75C3.5 5.6837 3.47366 5.62011 3.42678 5.57322C3.37989 5.52634 3.3163 5.5 3.25 5.5C3.1837 5.5 3.12011 5.52634 3.07322 5.57322C3.02634 5.62011 3 5.6837 3 5.75V6.75C3 6.8163 3.02634 6.87989 3.07322 6.92678C3.12011 6.97366 3.1837 7 3.25 7H4.25C4.3163 7 4.37989 6.97366 4.42678 6.92678C4.47366 6.87989 4.5 6.8163 4.5 6.75C4.5 6.6837 4.47366 6.62011 4.42678 6.57322C4.37989 6.52634 4.3163 6.5 4.25 6.5H3.8535L4.677 5.677C4.70028 5.65378 4.71875 5.62619 4.73136 5.59582C4.74396 5.56544 4.75045 5.53288 4.75045 5.5C4.75045 5.46712 4.74396 5.43456 4.73136 5.40418C4.71875 5.37381 4.70028 5.34622 4.677 5.323Z"
            fill="#6D6E72"
          ></path>
        </svg>
      );
    case "keycap":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99993 1.22222C4.11103 1.22222 2.77769 1 2.77769 1L2.33324 5.00003M4.99993 1.22222C5.88882 1.22222 7.22217 1 7.22217 1M4.99993 1.22222C4.11103 1.22222 2.76791 1 2.76791 1L1.73679 2.3689C1.53548 2.6359 1.41421 2.95437 1.38612 3.28757L1.00301 7.86272C0.989674 8.02539 1.02079 8.1885 1.09412 8.33383L1.18168 8.5085C1.25616 8.65641 1.37029 8.78071 1.51132 8.86751C1.65236 8.95432 1.81474 9.00021 1.98035 9.00006H8.01951C8.18511 9.00021 8.3475 8.95432 8.48853 8.86751C8.62957 8.78071 8.7437 8.65641 8.81818 8.5085L8.90573 8.33428C8.97907 8.1885 9.01062 8.02539 8.99685 7.86316L8.61373 3.28757C8.58573 2.95422 8.46401 2.63558 8.26262 2.36845L7.22217 1M7.22217 1L7.66661 5.00003M7.66661 5.00003C7.66661 5.00003 6.33327 5.44448 4.99993 5.44448C3.66658 5.44448 2.33324 5.00003 2.33324 5.00003M7.66661 5.00003L8.77773 8.55561M2.33324 5.00003L1.22212 8.55561"
            stroke="#6D6E72"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    default:
      return "";
  }
}
