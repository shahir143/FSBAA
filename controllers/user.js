const user =require('../models/user')
exports.saveData=async (req, res, next) => {
    try {
        const data = await user.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });
        res.status(201).json(data); 
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Error saving data to the database' });
    }
};
exports.deleteData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await user.destroy({ where: { id: id } })
        res.status(201).json({ message: 'Deleted data from database' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getData=async (req,res,next)=>{
    try{
        const dbData = await user.findAll()
        const data = dbData.map(data => data.dataValues);
        res.status(201).json(data);
    }catch(err){
        console.error('Error saving data:', err);
        res.status(500).json({ error: 'Error getting data to the database' });
    } 
}