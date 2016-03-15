// Business logic
function Contact(first, last, email, phone) {
  this.firstName = first;
  this.lastName = last;
  this.emailAddress = email;
  this.phoneNumber = phone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmailAddress = $("input#new-email-address").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmailAddress, inputtedPhoneNumber);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-email-address").val("");
    $("input#new-phone-number").val("");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email-address").text(newContact.emailAddress);
      $(".phone-number").text(newContact.phoneNumber);
    });

  });
});
