import { Meteor } from "meteor/meteor";
import { RequestError } from "@xyng/yuoshi-backend-adapter";

import createBackendAdapter from "./backendAdapter";

Meteor.methods({
  "users.auth": async function(email, password) {
    const backendAdapter = createBackendAdapter();

    try {
      const result = await backendAdapter.userAdapter.getInfo();

      if (!result) {
        return false;
      }

      if (!Meteor.users.findOne({ username: email })) {
        Accounts.createUser({
          username: email,
          password: password
        });
      }

      return [result, result.remoteId];
    } catch (e) {
      console.log(e);
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  },
  "users.validate": async (user) => {
    const backendAdapter = createBackendAdapter(user);

    try {
      await backendAdapter.userAdapter.getInfo("me");
    } catch (e) {
      if (!(e instanceof RequestError)) {
        throw e;
      }

      return false;
    }

    return true;
  },
  "users.cachePackage": (packageId) => {
    if (!Meteor.isServer) return;
    Meteor.users.update(
      {
        _id: this.userId
      },
      { $set: { lastPackage: packageId } }
    );
  },
  "users.getStudipUrl": () => {
    if (!Meteor.isServer || !Meteor.userId()) return;
    return Meteor.settings.private.studip.url;
  }
});
