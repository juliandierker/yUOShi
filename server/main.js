import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";

/* Referenz auf Collection-Api, weil wir nicht direkt in Server schreiben dürfen */
import { Accounts } from "meteor/accounts-base";
import { resetDatabase } from "../imports/startup/server/databaseHandling";
import "./solutionHandling";

import "../imports/api/users";
import "../imports/api/teachers";
import "../imports/api/students";
import "../imports/api/courses";
import "../imports/api/tokens";

ServiceConfiguration.configurations.upsert(
    { service: 'studip' },
    {
        $set: {
            loginStyle: "popup",
            studipUrl: "http://localhost:8123",
            consumerKey: Meteor.settings.private.oAuth.studip.key,
            secret: Meteor.settings.private.oAuth.studip.secret,
        }
    }
);

Meteor.startup(() => {
    // code to run on server at startup
    // uncomment to clear database on every restart.
    // resetDatabase();

    Accounts.onCreateUser(function (options, user) {
        if (!user.services.studip) {
            return user;
        }

        user.username = user.services.studip.username;
        user.emails = user.services.studip.email;

        return user;
    });

    Accounts.onLogin(() => {
        const user = Meteor.user()

        if (Roles.getRolesForUser(Meteor.userId()).length > 0) {
            // roles already set!

            return
        }

        switch (user.services.studip.role) {
            case "student":
                const role = Roles.addUsersToRoles(user._id, "student");
                Meteor.call("students.insert", user._id, user.services.studip.id);

                break;
            case "teacher":
                Roles.addUsersToRoles(user._id, "teacher");
                Meteor.call("teachers.insert", user._id, user.services.studip.id);

                break;
            default:
                break;
        }
    })
});
