export default function handler(req, res) {
  res
    .status(200)
    .json([
      `20% off Entire Purchase Promo code: offT80`,
      `50% - 80% off on Vegetables`,
      `Off 10%! Shop Vegetables`,
      `Off 50%! Shop Now`,
      `Off 10%! Shop Vegetables`,
    ]);
}
