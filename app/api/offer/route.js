import { offer } from "./offer";

export async function GET(request) {
  return new Response(JSON.stringify(offer));
}
// export async function HEAD(request) {
//   return new Response(JSON.stringify(offer));
// }
// export async function POST(request) {
//   return new Response(JSON.stringify(offer));
// }
// export async function PUT(request) {
//   return new Response(JSON.stringify(offer));
// }
// export async function DELETE(request) {
//   return new Response(JSON.stringify(offer));
// }
export async function PATCH(request) {
  return new Response(JSON.stringify(offer));
}
