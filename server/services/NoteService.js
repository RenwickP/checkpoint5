import mongoose from "mongoose";
import Note from "../models/Note.js";
import bugService from "./BugService.js";
import note from "../models/Note.js";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async createNote(data) {
    let news = await _repository.create(data);
    // console.log("from controller", news.id);
    return news;
  }

  async deleteNote(id) {
    let data = await _repository.findByIdAndRemove({ _id: id });
  }

  //from bugs

  async getNoteByBug(id) {
    let data = await _repository.find({ bug: id });
    return data;
  }
}

// async getNoteByBug() {
//   return await _repository.find({});
// }
// }
const noteService = new NoteService();
export default noteService;
