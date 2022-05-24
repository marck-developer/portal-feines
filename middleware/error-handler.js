const errorHandlerMiddleware = (error, req, res, next) => {
    console.log(error)
    res.status(500).json({msg:'alguna cosa no ha anat bé'})
}

export default errorHandlerMiddleware