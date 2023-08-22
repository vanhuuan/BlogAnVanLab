import Image from "next/image";

import Vi from "../../public/img/vi-flag-32x48.png";
import En from "../../public/img/en-flag-32x48.png";

export function VietNameIcon() {
  return (
    <Image
      className="rounded-full"
      src={Vi}
      width={24}
      height={24}
      alt={"VI"}
    />
  );
}

export function English() {
  return (
    <Image
      className="rounded-full"
      src={En}
      width={24}
      height={24}
      alt={"EN"}
    />
  );
}
