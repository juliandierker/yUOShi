import { Meteor } from "meteor/meteor"
import createBackendAdapter from "./backendAdapter";

Meteor.methods({
    "users.auth": async function(email, password) {
        const backendAdapter = createBackendAdapter()

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
})
