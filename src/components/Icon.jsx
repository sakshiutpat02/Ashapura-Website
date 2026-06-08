const paths = {
  phone: "M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .3 2 .5 3.1.5.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C9.8 22 2 14.2 2 4.3 2 3.5 2.5 3 3.2 3h3.5c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.5 3.1.1.4 0 .8-.3 1.2l-2.1 2.3Z",
  clock: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm1-10.4V6h-2v6.4l5 3 1-1.7-4-2.1Z",
  chat: "M4 4h16v12H8.6L4 20.5V4Zm4 5v2h8V9H8Zm0 4v2h6v-2H8Z",
  share: "M18 16.1c-.8 0-1.5.3-2 .9L8.9 13c.1-.3.1-.6.1-.9s0-.6-.1-.9L16 7c.6.5 1.3.8 2 .8a3 3 0 1 0-3-3c0 .3 0 .6.1.9L8 9.8A3 3 0 1 0 8 14.2l7.1 4.2c-.1.2-.1.5-.1.8a3 3 0 1 0 3-3.1Z",
  leaf: "M20.5 3.5C13 3.7 6.2 7 4.2 13c-1 3 .5 5.5 2.9 6.7 4-5.6 8.5-8.7 12-10-3.3 2.5-6 5.6-8.1 9.5 4 .3 7.4-1.8 8.8-5.8 1.1-3.2.8-6.1.7-9.9Z",
  basket: "M7 9h10l-1 10H8L7 9Zm2.5-4h5L17 9h-2.3l-1.4-2h-3.6L8.3 9H6l3.5-4Z",
  money: "M3 6h18v12H3V6Zm3 3a3 3 0 0 1-3 3v3a3 3 0 0 1 3 3h12a3 3 0 0 1 3-3v-3a3 3 0 0 1-3-3H6Zm6 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
  smile: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20ZM8 9v2h2V9H8Zm6 0v2h2V9h-2Zm-6 5c1 2 2.8 3 4 3s3-1 4-3H8Z",
  check: "M10 16.6 5.7 12.3 7.1 11l2.9 2.9L17.7 6l1.4 1.4-9.1 9.2Z",
  grid: "M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z",
  speed: "M12 4a10 10 0 0 1 10 10c0 2.3-.8 4.4-2.1 6H4.1A10 10 0 0 1 12 4Zm1 10.4 4.2-4.2-1.4-1.4-4.7 4.7A2 2 0 1 0 13 14.4Z",
  map: "M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z",
  parking: "M6 3h8a5 5 0 0 1 0 10H9v8H6V3Zm3 3v4h5a2 2 0 0 0 0-4H9Z",
  mail: "M3 5h18v14H3V5Zm9 8 8-5.4V7L12 12 4 7v.6L12 13Z",
  card: "M3 6h18v12H3V6Zm2 3v2h16V9H5Zm0 5v2h6v-2H5Z"
};

export default function Icon({ name, className = "h-5 w-5", title }) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      role={title ? "img" : undefined}
    >
      <path d={paths[name]} />
    </svg>
  );
}
