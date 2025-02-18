"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function CustomImage({ src, alt, width = 600, height = 400, caption }: CustomImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Clickable Image with Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </DialogTrigger>
        <DialogContent className="flex justify-center">
          <Image src={src} alt={alt} width={width * 1.5} height={height * 1.5} className="rounded-lg" />
        </DialogContent>
      </Dialog>

      {/* Optional Caption */}
      {caption && <p className="text-sm text-gray-500">{caption}</p>}
    </div>
  );
}
