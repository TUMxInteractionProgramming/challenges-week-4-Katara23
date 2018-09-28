/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel = "#SevenContinents";

var currentLocation = {
    longitude: 34.02055,
    latitude: -118.28547,
    what3words: "marked.future.chose"
};

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);

    currentChannel = channelName;
    //console.log(currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelName.createdBy +'" target="_blank"><strong>' + channelName.createdBy + '</strong></a>';

    /* #6 #liking channels on #click */
    //Matches app bar star to channel star
    $('#channel-star').removeClass('fas far');
    let starType = channelName.starred ? 'fas' : 'far';
    $('#channel-star').addClass(starType);
    
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass('far fas');

    //current channel star class
    let appBarClass = $('#channel-star').attr('class');
    //change channel object property
    currentChannel.starred = (appBarClass == 'fa-star fas' ? true : false);

    //changes the star for the currently selected channel
    //current channel star
    let currentChannelStar = '#channels li:contains(' + currentChannel.name + ') .fa-star';
    //determine object star type
    let starType = currentChannel.starred ? 'fas' : 'far';
    //removes previous class on channel star
    $(currentChannelStar).removeClass('fas far');
    //adds new class on channel star
    $(currentChannelStar).addClass(starType);
}

function channelStar(channelName) {
    //current channel star
    let currentChannelStar = '#channels li:contains(' + channelName.name + ') .fa-star';
    //toggle star
    $(currentChannelStar).toggleClass('far fas');
    //current channel star class
    let channelStarClass = $(currentChannelStar).attr('class');

    //change channel object property
    channelName.starred = (channelStarClass == 'fa-star fas' ? true : false);
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

function Message(text) {
    let timeNow = Date.now();
    let timeIn15 = timeNow + 900000;

    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = (new Date(timeNow)).toLocaleString();
    this.expiresOn = (new Date(timeIn15)).toLocaleString();
    this.text = text;
    this.own = true;
}

function createMessageElement(messageObject) {
    let ownClass = messageObject.own ? ' own' : '';

    return '<div class="message' + ownClass + '">' + 
        '<h3><a href="http://w3w.co/' + messageObject.createdBy + '" target="_blank">' +
        '<strong>' + messageObject.createdBy + '</strong></a>' +
        messageObject.createdOn + ' <em>15 min. left</em></h3>' +
        '<p>' + messageObject.text + '</p>' +
        '<button>+5 min.</button>' + 
    '</div>';
}

function sendMessage() {
    //message from user input
    let text = $('#input').val();
    //create message object
    let userMessage = new Message(text);
    //append message to chat
    $('#messages').append(createMessageElement(userMessage))
    //clears input field
    $('#input').val('');
    
    //scrolls to the bottom of the div
    $('#messages').scrollTop($('#messages').prop("scrollHeight"));
}