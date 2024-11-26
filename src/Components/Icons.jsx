/* eslint-disable react/prop-types */
export default function Icons({ children, fill, width }) {
  return (
    <svg
      width={width ?? "25px"}
      height="25px"
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="//www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
