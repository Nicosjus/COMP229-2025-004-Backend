// GenericController.js
const mongoose = require('mongoose');
const Authentication = require('../models/Authentication');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const bcrypt = require('bcryptjs');


module.exports = function makeController(Model, options = {}) {
  return {
    // Get all documents
    async getAll(req, res, next) {
      try {
        const list = await Model.find().lean();
        const transformedList = list.map(({ _id, ...rest }) => ({
          id: _id,
          ...rest,
        }));
        res.json(transformedList);
      } catch (error) {
        console.error(`Error in getAll for ${Model.modelName}:`, error);
        next(error);
      }
    },

    // Get one by ID
    async getOne(req, res, next) {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) {
          return res.status(404).json({ success: false, message: 'Not found' });
        }
        res.json(item);
      } catch (error) {
        console.error(`Error in getOne for ${Model.modelName}:`, error);
        next(error);
      }
    },

    // Create new
    async create(req, res, next) {
      try {
        if(options.isAuth){
          if(!req.body.password){
            return res.status(400).json({ success: false, message: 'Password is required' });
          }
          const auth = new Authentication({
            password: req.body.password
          });
          await auth.save();
          req.body.authentication = auth._id;
          delete req.body.password;
        }
        const created = await Model.create(req.body);
        res.status(201).json({ success: true, message: 'Created successfully', data: created });
      } catch (error) {
        console.error(`Error in create for ${Model.modelName}:`, error);
        next(error);
      }
    },
    // Update existing
    async update(req, res, next) {
      try {
        if(options.isAuth){
          if(req.body.password){
            // If a password is provided, update the associated authentication document
            const user = await Model.findById(req.params.id);
            if (user && user.authentication) {
              const authDoc = await Authentication.findById(user.authentication);
              if (authDoc) {
                authDoc.password = req.body.password;
                await authDoc.save();
              }
            }
            delete req.body.password; // Remove password from body to prevent saving it to the user model
          }
        }
        //remove id from body if exists
        if (req.body.id) {
          delete req.body.id;
        }
        const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoc) {
          return res.status(404).json({ success: false, message: 'No record found to update' });
        }
        res.json({ success: true, message: 'Updated successfully', data: updatedDoc });
      } catch (error) {
        console.error(`Error in update for ${Model.modelName}:`, error);
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
        console.error(`Error in remove for ${Model.modelName}:`, error);
        next(error);
      }
    },
    //delete all
    async removeAll(req, res, next) {
      try {
        const result = await Model.deleteMany({});
        res.json({ success: true, message: `Deleted ${result.deletedCount} records successfully` });
      } catch (error) {
        console.error(`Error in removeAll for ${Model.modelName}:`, error);
        next(error);
      }
    },
     
  };
};
