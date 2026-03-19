"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "onError"> & {
  className?: string;
};

export function OptionalImage({ className, alt = "", ...props }: Props) {
  const [hidden, setHidden] = React.useState(false);

  if (hidden) return null;

  return (
    <Image
      alt={alt}
      {...props}
      className={cn(className)}
      onError={() => setHidden(true)}
    />
  );
}
