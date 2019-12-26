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

    // {
    //   throw new ApiError("Bad Id");
    // }
    return data;
  }

  async createBug(data) {
    return await _repository.create(data);
  }

  async edit(id, edit) {
    console.log(edit);
    console.log("what", edit);
    if (edit.closed == false) {
      let data = await _repository.findOneAndUpdate({ _id: id }, edit, {
        new: true
      });
      // if (!data) {
      //   throw new ApiError("Bad Request");
      // }
      return data;
    }
  }

  //come back to this one//
}

const bugService = new BugService();
export default bugService;
