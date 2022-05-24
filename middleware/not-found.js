const notFoundMiddleware = (req, res) => 
    res.status(404).send('la ruta que has escrit no existeix')

export default notFoundMiddleware