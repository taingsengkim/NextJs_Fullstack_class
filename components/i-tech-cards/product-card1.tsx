import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "lucide-react";
import { Price, PriceValue } from "./price";
import { Khmer } from "next/font/google";
import { ProductResponse } from "@/lib/type/product-response";
import Image from "next/image";

export default function ProductCard({
  title = "Product Slug",
  price = 100,
  description = "Product Description",
  images = [
    "https://i.imgur.com/KeqG6r4.jpeg",
    "https://i.imgur.com/xGQOw3p.jpeg",
    "https://i.imgur.com/oO5OUjb.jpeg",
  ],
}: ProductResponse) {
  return (
    <Card className="h-full  overflow-hidden p-0">
      <CardHeader className="relative block p-0 ">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          {/* <img
            src={images[0]}
            alt={title}                               
            className="block size-full  object-cover object-center"
          /> */}
          <Image
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            className="block size-full  object-cover object-center"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 pb-6">
        <CardTitle className="text-xl font-semibold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-auto">
          <Price className="text-lg font-semibold">
            <PriceValue price={price} variant="sale" />
          </Price>
        </div>
      </CardContent>
    </Card>
  );
}
