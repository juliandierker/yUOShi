import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "files.getFile": (fileId) => {
    const backendAdapter = createBackendAdapter();
    return backendAdapter.filesAdapter.getFileById(fileId);
  }
});
