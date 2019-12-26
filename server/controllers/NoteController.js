import express from "express";

import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //
      .delete("/:id", this.delete)
      .post("", this.createNote);
  }

  async createNote(req, res, next) {
    try {
      let data = await noteService.createNote(req.body);
      return res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = noteService.deleteNote(req.params.id);
      return res.send("deleted");
    } catch (error) {}
  }
}
