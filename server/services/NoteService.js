import mongoose from "mongoose";
import Note from "../models/Note.js";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getById(id) {
    let data = await _repository.findById(id);

    return data;
  }

  async createNote(data) {
    return await _repository.create(data);
  }

  //from bugs

  async getNoteByBug(id) {
    return await _repository.find({ _id: id });
  }
}

const noteService = new NoteService();
export default noteService;
