import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //
      .get("/:id/notes", this.getNotesByBug)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.createBug)
      .put("/:id", this.editBug)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createBug(req, res, next) {
    try {
      let data = await bugService.createBug(req.body);

      return res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }

  async editBug(req, res, next) {
    try {
      let edit = await bugService.edit(req.params.id, req.body);
      return res.send(edit);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await bugService.delete(req.params.id);
      return res.send("bug closed");
    } catch (error) {}
  }

  //notes stuff

  async getNotesByBug(req, res, next) {
    try {
      let data = await noteService.getNoteByBug(req.params.id);
      return res.send(data);
    } catch (error) {}
  }
}
