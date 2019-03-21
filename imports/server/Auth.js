Meteor.methods({
  "yuoshi.auth": function(token, email, password) {
    console.log("auth");

    try {
      const result = HTTP.call(
        "GET",
        "http://localhost/studip/plugins.php/argonautsplugin/users/me",
        {
          headers: { Authorization: token }
        }
      );
      var userData = JSON.parse(result.content);
      var studipUserId = userData.data.id;
      console.log(studipUserId);
      if (Meteor.users.findOne({ username: email })) {
        var user = Meteor.users.findOne({ username: email });
      } else {
        const userId = Accounts.createUser({
          username: email,
          password: password
        });

        console.log("create");
      }
      var courseRawData = HTTP.call(
        "GET",
        "http://localhost/studip/plugins.php/argonautsplugin/users/" +
          studipUserId +
          "/courses",
        {
          headers: { Authorization: token }
        }
      );
      var courseData = JSON.parse(courseRawData.content);
      for (var i = 0; i < courseData.data.length; i++) {
        if (!Courses.findOne({ studipCourseId: courseData[i] })) {
        }
      }
      console.log(JSON.stringify(courseData));
      return result;
    } catch (e) {
      console.log("failed");
      console.log(e);
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  }
});
// curl 'http://localhost/studip/plugins.php/argonautsplugin/users/me' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Authorization: Basic cm9vdEBzdHVkaXA6dGVzdGluZw==' -H 'Connection: keep-alive' -H 'Upgrade-Insecure-Requests: 1' -H 'Cache-Control: max-age=0'
