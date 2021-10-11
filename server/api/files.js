import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "files.getFile": async (fileId) => {
    const backendAdapter = createBackendAdapter();
    backendAdapter.filesAdapter.getFileById(fileId);
  }
});
