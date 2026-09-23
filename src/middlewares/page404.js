import NotFound from "./modelErrors/notFound.js";

function page404 (req, res, next) {
  const erro404 = new NotFound();
  next(erro404);
}

export default page404;