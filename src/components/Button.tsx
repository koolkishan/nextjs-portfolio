import Link from "next/link";
import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link className="btn" href={link}>
      {text}
    </Link>
  );
}

export default Button;
