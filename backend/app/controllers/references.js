let ReferencesModel = require('../models/references');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newReference = ReferencesModel(req.body);

        let result = await ReferencesModel.create(newReference);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Reference added successfully.",
                data: result
            }
        );

    } catch (error) {
        next(error);
    }
};

module.exports.referencesList = async function (req, res, next) {

    try {
        let list = await ReferencesModel.find({});

        res.json({
            success: true,
            message: "References list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.processEdit = async function (req, res, next) {

    try {
        let referenceId = req.params.id;
        let updatedReference = ReferencesModel(req.body);
        updatedReference._id = referenceId;

        let result = await ReferencesModel.updateOne({ _id: referenceId }, updatedReference);
        console.log(result);

        res.json({
            success: true,
            message: "Reference updated successfully.",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.getByID = async function (req, res, next) {

    try {
        let referenceId = req.params.id;
        let reference = await ReferencesModel.findOne({ _id: referenceId });

        res.json({
            success: true,
            message: "Reference retrieved successfully.",
            data: reference
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.processDelete = async function (req, res, next) {

    try {
        let referenceId = req.params.id;
        let result = await ReferencesModel.deleteOne({ _id: referenceId });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Reference deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Reference not deleted. Are you sure it exists?')
        }

    } catch (error) {
        console.log(error);
        next(error);
    }

}