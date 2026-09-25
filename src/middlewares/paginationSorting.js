import incorrectRequest from "./modelErrors/incorrectRequest.js";

async function paginationSorting(req, res, next) {
  try {
    let { limitNumber = 5, pagNumber = 1, sort = "_id:1"} = req.query;
    let [field, ord] = sort.split(":");
        
    limitNumber = Number(limitNumber);
    pagNumber = Number(pagNumber);
    ord = Number(ord);

    const result = req.result;
        
    if (limitNumber > 0 && pagNumber > 0){
      const paginationResults = await result.find()
        .find()
        .sort({[field]: ord})
        .skip((pagNumber - 1) * limitNumber)
        .limit(limitNumber)
        .exec();
        
      res.status(200).json(paginationResults);
    } else {
      next( new incorrectRequest("Os parâmetros limitNumber e pagNumber devem ser números inteiros maiores que zero"));
    }
  } catch (error) {
    next(error);
  }
}

export default paginationSorting;