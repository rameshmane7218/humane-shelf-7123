const storyIcon = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      // fillRule
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Stories"
    >
      <title>Stories</title>
      {fill ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v18.5c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V2.75zM7 8.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 7c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM7 12c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12z"
          fill="currentColor"
        ></path>
      ) : (
        <>
          <path
            d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
            stroke="currentColor"
          ></path>
          <path
            d="M8 8.5h8M8 15.5h5M8 12h8"
            stroke="currentColor"
            strokeLinecap="round"
          ></path>
        </>
      )}
    </svg>
  );
};

export default storyIcon;

// const story = (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-label="Stories"
//   >
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 2.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v18.5c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V2.75zM7 8.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 7c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM7 12c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12z"
//       fill="currentColor"
//     ></path>
//   </svg>
// );
