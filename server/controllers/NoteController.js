import express from "express";

import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //

      .get("/:id", this.getById)
      .post("", this.createNote);
    // .put("/:id", this.editBug)
    // .delete("/:id", this.delete);
  }

  async getById(req, res, next) {
    try {
      let data = await noteService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createNote(req, res, next) {
    try {
      let data = await noteService.createNote(req.body);
    } catch (error) {
      next(error);
    }
  }
}
