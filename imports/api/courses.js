import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";
import { Students } from "./students";
import { Teachers } from "./teachers";

export const Courses = new Mongo.Collection("courses");

if (Meteor.isServer) {
  // classNames of one teacher are unique
  Courses.rawCollection().ensureIndex(
    { teacherId: 1, courseName: 1 },
    { unique: true }
  );
  // teacher
  Meteor.publish("classroomsByTeacher", () => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Courses.find({ teacherId: Meteor.userId() });
    }
    throw new Meteor.Error("Access denied!");
  });
  // teacher
  Meteor.publish("classroomByName", function(className) {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Courses.find({ teacherId: Meteor.userId(), className });
    }
    throw new Meteor.Error("Access denied!");
  });
  // admin
  Meteor.publish("courses", function() {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["yadmin"])) {
      return Courses.find({});
    }
    throw new Meteor.Error("Access denied!");
  });
  // pupil
  Meteor.publish("coursesOfStudent", function() {
    const student = Students.findOne({ userId: Meteor.userId() });
    if (student) {
      return Courses.find({ _id: student.classId });
    }
    throw new Meteor.Error("Access denied!");
  });
}

Meteor.methods({
  // teacher
  "course.insert": function(courseName, studipCourseId) {
    if (Meteor.isServer) {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
        if (Courses.findOne({ teacherId: Meteor.userId(), courseName }))
          throw new Meteor.Error("Class already exists!");
        const courseId = shortid.generate();
        // let packages = [
        //   "Autonomes Fahren",
        //   "Code Analyse",
        //   "Flussdiagramm",
        //   "Raetsel",
        //   "ItConsulting"
        // ];
        // let classroomTasks = Tasks.find({
        //   taskPackage: { $in: packages }
        // }).fetch();
        // let maxCredits = classroomTasks.reduce(
        //   (acc, elem) => (acc += elem.credits),
        //   0
        // );
        // let taskIds = classroomTasks.map(elem => elem.taskId);

        const students = [];
        Courses.insert({
          _id: classId,
          courseName,
          studipCourseId,
          pupils,
          tasks: [],
          teacherId: Meteor.userId()
        });
        Teachers.update(
          { userId: Meteor.userId() },
          { $addToSet: { courses: courseId } }
        );
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  },
  // admin, teacher
  "classrooms.delete": function(classId, teacherId) {
    let classroom = null;
    let teacher = null;
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["ppadmin"])) {
      classroom = Classrooms.findOne({ _id: classId });
      teacher = Teachers.findOne({ userId: teacherId });
      if (!teacher) throw new Meteor.Error("Teacher doesn't exist!");
    } else if (
      Meteor.userId() &&
      Roles.userIsInRole(Meteor.user(), ["teacher"])
    ) {
      teacher = Teachers.findOne({ userId: Meteor.userId() });
      classroom = Classrooms.findOne({ _id: classId });
    } else {
      throw new Meteor.Error("Access denied!");
    }
    if (!classroom) throw new Meteor.Error("Classroom doesn't exist!");
    if (!teacher.classrooms.includes(classId))
      throw new Meteor.Error("Classroom doesn't belong to teacher!");
    Teachers.update({ userId: teacherId }, { $pull: { classrooms: classId } });
    Companies.remove({ _id: { $in: classroom.companies } });
    Pupils.remove({ userId: { $in: classroom.pupils } });
    Meteor.users.remove({ _id: { $in: classroom.pupils } });
    Classrooms.remove({ _id: classId });
  },

  // teacher in classroom
  "classrooms.returnHelp": function(classId, taskId, companyId) {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      const teacher = Teachers.findOne({ userId: Meteor.userId() });
      if (!teacher.classrooms.includes(classId))
        throw new Meteor.Error("Classroom doesn't belong to teacher!");
      if (
        !Classrooms.update(
          { _id: classId },
          { $pull: { helpTasks: { taskId, companyId } } }
        ) ||
        !Companies.update(
          { _id: companyId, "currentTasks.taskId": taskId },
          {
            $set: {
              "currentTasks.$.taskState.status": "active"
            }
          }
        )
      )
        throw new Meteor.Error("No such help request!");
    } else {
      throw new Meteor.Error("Access denied!");
    }
  }
});
