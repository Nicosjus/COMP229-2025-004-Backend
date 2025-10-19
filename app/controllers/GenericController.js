// GenericController.js
module.exports = function makeController(Model) {
  return {
    // Get all documents
    async getAll(req, res, next) {
      try {
        const list = await Model.find();
        res.json(list);
      } catch (error) {
        console.error(error);
        next(error);
      }
    },

    // Get one by ID
    async getOne(req, res, next) {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ success: false, message: 'Not found' });
        res.json(item);
      } catch (error) {
        console.error(error);
        next(error);
      }
    },

    // Create new
    async create(req, res, next) {
      try {
        const created = await Model.create(req.body);
        res.status(201).json({ success: true, message: 'Created successfully', data: created });
      } catch (error) {
        console.error(error);
        next(error);
      }
    },

    // Update existing
    async update(req, res, next) {
      try {
        const result = await Model.updateOne({ _id: req.params.id }, req.body);
        if (result.modifiedCount > 0) {
          res.json({ success: true, message: 'Updated successfully' });
        } else {
          res.status(404).json({ success: false, message: 'No record updated' });
        }
      } catch (error) {
        console.error(error);
        next(error);
      }
    },

    // Delete
    async remove(req, res, next) {
      try {
        const result = await Model.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
          res.json({ success: true, message: 'Deleted successfully' });
        } else {
          res.status(404).json({ success: false, message: 'No record deleted' });
        }
      } catch (error) {
        console.error(error);
        next(error);
      }
    }
  };
};
