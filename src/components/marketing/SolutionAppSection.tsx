"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

import { Button } from "@/components/ui/button";

type DownloadBanner =
  | { type: "qr"; androidUrl: string; iosUrl: string }
  | { type: "cta"; href: string; label: string };

export function SolutionAppSection({
  heading,
  paragraphs,
  heroImage,
  heroAlt,
  phoneImage,
  phoneAlt,
  phoneWidth,
  phoneHeight,
  banner,
}: {
  heading: string;
  paragraphs: React.ReactNode[];
  heroImage: StaticImageData;
  heroAlt: string;
  phoneImage: StaticImageData;
  phoneAlt: string;
  phoneWidth: number;
  phoneHeight: number;
  banner: DownloadBanner;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[150px] w-full sm:h-[220px] md:h-[320px] lg:h-[420px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="px-5 pb-10 pt-2 sm:px-8 md:px-10 lg:px-16">
        <div className="grid gap-2 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <h2 className="font-serif text-xl font-bold text-primary sm:text-2xl md:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-primary/90 sm:mt-4 sm:text-sm md:mt-5 md:text-base">
              {paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-end lg:order-2 lg:col-span-5 lg:justify-center">
            <Image
              src={phoneImage}
              alt={phoneAlt}
              width={phoneWidth}
              height={phoneHeight}
              className="-mt-[100px] w-[145px] object-contain drop-shadow-2xl sm:-mt-[160px] sm:w-[210px] md:-mt-[210px] md:w-[270px] lg:-mt-[270px] lg:w-[340px]"
            />
          </div>
        </div>
      </div>

      <div className="relative h-[160px] sm:h-[190px] md:h-[230px] lg:h-[260px]">
        <div className="absolute inset-0 bg-[#a7ec33]" />
        <div
          className="absolute inset-0 bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 86%)" }}
        />

        {banner.type === "qr" ? (
          <div className="relative z-10 flex h-full flex-col items-start justify-center gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-16">
            <h3 className="font-serif text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Download App
            </h3>
            <div className="flex gap-4 sm:gap-6">
              <div className="text-center">
                <div className="rounded-lg bg-white p-1.5 sm:p-2">
                  <QRCode value={banner.androidUrl} size={64} className="h-auto w-[64px] sm:w-[80px] md:w-[96px]" />
                </div>
                <p className="mt-2 text-[10px] font-bold text-white sm:text-xs md:text-sm">
                  Android Version
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-lg bg-white p-1.5 sm:p-2">
                  <QRCode value={banner.iosUrl} size={64} className="h-auto w-[64px] sm:w-[80px] md:w-[96px]" />
                </div>
                <p className="mt-2 text-[10px] font-bold text-white sm:text-xs md:text-sm">
                  iOS Version
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex h-full flex-col items-start justify-center gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-16">
            <h3 className="font-serif text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Coming soon
            </h3>
            <Button asChild className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-primary hover:bg-white/90 sm:h-12 sm:px-8">
              <Link href={banner.href}>{banner.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
