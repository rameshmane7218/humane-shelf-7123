const listIcon = ({fill}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Lists"
    >
      <title>Lists</title>
      <path
        d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
        stroke="currentColor"
        strokeLinecap="round"
        fill={fill ? fill : "none"}
      ></path>
      <path
        d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
        stroke="currentColor"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default listIcon;
// const list = (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-label="Lists"
//   >
//     <path
//       d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
//       fill="currentColor"
//       stroke="currentColor"
//       strokeLinecap="round"
//     ></path>
//     <path
//       d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
//       stroke="currentColor"
//       strokeLinecap="round"
//     ></path>
//   </svg>
// );
