import React from "react";

import Link from "next/link";

const Button = ({ text, url, className }: { text: string, url: string, className: string }) => {
  return (
    <Link href={url}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default Button;
