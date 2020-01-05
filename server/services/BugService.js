import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  //
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);

    return data;
  }

  async createBug(data) {
    return await _repository.create(data);
  }

  async edit(id, edit) {
    //remeber to uncomment this line
    if (edit.closed == false) {
      let data = await _repository.findOneAndUpdate({ _id: id }, edit, {
        new: true
      });

      return data;
    }
  }
  async delete(id) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: true }
    );
  }
  //come back to this one//
}

const bugService = new BugService();
export default bugService;
