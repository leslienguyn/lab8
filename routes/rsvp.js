var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response){
  var rsvpEmail = request.body.rsvpEmail;
  console.log(rsvpEmail); //prints to terminal whenever POST request is made

  data.rsvp.push(rsvpEmail); //add to current data
  response.send(rsvpEmail); //sends back data so browser knows it worked
};
