import { Control } from "../models/Admin.js";
import bcrypt from "bcrypt"



const createControl = async (req, res) => {
    try {
      const control = new Control(req.body);
      await control.save();
      res.status(201).json(control);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const getControl = async (req, res) => {
    try {
      const control = await Control.find();
      res.json(control);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getControlById = async (req, res) => {
    try {
      const control = await Control.findById(req.params.id);
      if (!control) throw new Error('control not found');
      res.json(control);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  const updateControl = async (req, res) => {
    try {
      const control = await Control.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!control) throw new Error('control not found');
      res.json(control);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  const deleteControl = async (req, res) => {
    try {
      const control = await Control.findByIdAndDelete(req.params.id);
      if (!control) throw new Error('control not found');
      res.json({ message: 'control deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  export{ createControl,
    getControl,
    getControlById,
    updateControl,
    deleteControl,}