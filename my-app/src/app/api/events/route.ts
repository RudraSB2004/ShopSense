import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Incoming Event:", body);

  const response = {
    state: "Browser",
    confidence: 25,
    recommendation: "Show Trending Products",
  };

  switch (body.type) {
    case "view_product":
      response.state = "Browser";
      response.confidence = 30;
      response.recommendation = "Recommend Similar Products";
      break;

    case "compare_product":
      response.state = "Comparer";
      response.confidence = 92;
      response.recommendation = "Show Comparison Table";
      break;

    case "wishlist":
      response.state = "Interested";
      response.confidence = 85;
      response.recommendation = "Offer Wishlist Discount";
      break;

    case "add_to_cart":
      response.state = "High Intent";
      response.confidence = 96;
      response.recommendation = "Offer Free Shipping";
      break;

    case "checkout":
      response.state = "Buyer";
      response.confidence = 100;
      response.recommendation = "Recommend Accessories";
      break;
  }

  return NextResponse.json(response);
}