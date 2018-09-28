/*
var channel = {
    name: '',
    createdOn:
        function() {
            let d = new Date();
            let options = {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                //year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            };
            return d.toLocaleString('en-US', options);
        },
    createdBy: '',
    starred: false,
    expiresIn: 0,
    messageCount: 0
};
*/

var yummy = {
    name: '#Yummy',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

var sevenContinents = {
    name: '#SevenContinents',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'cheeses.yard.applies',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};

var killerApp = {
    name: '#KillerApp',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'upgrading.never.helps',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

var firstPersonOnMars = {
    name: '#FirstPersonOnMars',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'upgrading.never.helps',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};

var octoberfest = {
    name: '#Octoberfest',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'upgrading.never.helps',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

function createChannelElement(channelObject) {
    //removes # from name
    let str = (channelObject.name).substr(1);
    //changes first letter to lowercase
    let lower = str[0].toLowerCase();
    //replaces original uppercase letter
    str = str.replace(str[0], lower);
    //determines star class
    let starClass = channelObject.starred ? 'fas' : 'far';
 
    let newElement = $([
    '<li onclick="switchChannel(' + str + ')">',
    '   ' + channelObject.name,
    '   <span class="channel-meta">',
    '       <span onclick="channelStar(' + str + ')" class="fa-star ' + starClass + '"></span>',
    '       <span class="fas fa-chevron-right"></span>',
    '   </span>',
    '</li>'
    ].join('\n'));

    return newElement;
}

function listChannels() {
    //Adds channel li to channels list
    //$('<li>').appendTo('ul');
    $('ul').append(createChannelElement(yummy));
    $('ul').append(createChannelElement(sevenContinents));
    $('ul').append(createChannelElement(killerApp));
    $('ul').append(createChannelElement(firstPersonOnMars));
    $('ul').append(createChannelElement(octoberfest));
}
