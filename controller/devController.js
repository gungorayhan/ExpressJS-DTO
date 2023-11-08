class DevController{
    createDev(req,res){
        console.log(JSON.stringify(req.body,null,2))

        res.json(req.body)
    }
}

module.exports = new DevController();