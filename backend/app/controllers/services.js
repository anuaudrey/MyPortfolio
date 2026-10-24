let ServicesModel = require('../models/services');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newService = ServicesModel(req.body);

        let result = await ServicesModel.create(newService);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Service added successfully.",
                data: result
            }
        );

    } catch (error) {
        next(error);
    }
};
module.exports.getByID = async function (req, res, next) {

    try {
        let serviceId = req.params.id;
        let service = await ServicesModel.findOne({ _id: serviceId });

        res.json({
            success: true,
            message: "Service retrieved successfully.",
            data: service
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.servicesList = async function (req, res, next) {

    try {
        let list = await ServicesModel.find({});

        res.json({
            success: true,
            message: "Services list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.processEdit = async function (req, res, next) {

    try {
        let serviceId = req.params.id;
        let updatedService = ServicesModel(req.body);
        updatedService._id = serviceId;

        let result = await ServicesModel.updateOne({ _id: serviceId }, updatedService);
        console.log(result);

        res.json({
            success: true,
            message: "Service updated successfully.",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.processDelete = async function (req, res, next) {

    try {
        let serviceId = req.params.id;
        let result = await ServicesModel.deleteOne({ _id: serviceId });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Service deleted successfully."
            });
        }
        else {

            throw new Error('Service not deleted. Are you sure it exists?')
        }

    } catch (error) {
        console.log(error);
        next(error);
    }

}