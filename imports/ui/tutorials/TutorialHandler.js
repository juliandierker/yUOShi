export const TutorialHandler = {
  checkForStudentTutorial: function(student) {
    if (!student.tutorials.includes("studentIntro")) {
      return "studentIntro";
    }
    return null;
  },
  checkForTeacherTutorial: function(teacher) {
    if (teacher.tutorials.includes("teacherIntro")) {
      return "teacherIntro";
    }
    return null;
  }
};
