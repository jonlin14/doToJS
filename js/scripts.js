$(function() {
    $('form#new-contact').submit(function(event) {
            var new_First_Name = $('input#new-first-name').val();
            var new_Last_Name = $('input#new-last-name').val();
            var new_Address = $('input#new-address').val();

            var newContact = { first_Name: new_First_Name,
                               last_Name: new_Last_Name,
                               address: new_Address };

            $("ul#contacts").append("<li><span class='contact'>" +
                                newContact.first_Name + " " +
                                newContact.last_Name + "</span></li>");

            $("input#new-first-name").val("");
            $("input#new-last-name").val("");
            $("input#new-address").val("");

            $(".contact").last().click(function() {
                $("#show-contact").show();
                $("#show-contact h2").text(newContact.first_Name + " " + newContact.last_Name);
                $(".first-name").text(newContact.first_Name);
                $(".last-name").text(newContact.last_Name);
                $(".address").text(newContact.address);
            });

            event.preventDefault();
    });
});
