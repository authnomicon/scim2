exports.parse = function(json) {
  
  var obj = {};
  
  profile.id = json.id;
  profile.username = json.username;
  profile.displayName = json.name;
  profile.name = { familyName: json.last_name,
                   givenName: json.first_name,
                   middleName: json.middle_name };
  
}
