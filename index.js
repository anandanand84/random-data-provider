var deasync = require('deasync');
var cheerio = require("cheerio");

var ACCEPTED_GENDER_VALUES = ['male','female','random'];
var DEFAULT_GENDER_VALUE  = 'random';

var ACCEPTED_COUNTRY_VALUES = ["au", "as", "bg", "br", "ca", "cyen", "cygk", "cz", "dk", "ee", "fi", "fr", "gr", "gl", "hu", "is", "it", "nl", "nz", "no", "pl", "pt", "sl", "za", "sp", "sw", "sz", "tn", "uk", "us", "uy"];
var DEFAULT_COUNTRY_VALUE = 'us';

var ACCEPTED_NAMESET_VALUES = ["us", "ar", "au", "br", "celat", "ch", "zhtw", "hr", "cs", "dk", "nl", "en", "er", "fi", "fr", "gr", "gl", "sp", "hobbit", "hu", "is", "ig", "it", "jpja", "jp", "tlh", "ninja", "no", "fa", "pl", "ru", "rucyr", "gd", "sl", "sw", "th", "vn"];
var DEFAULT_NAMESET_VALUE = 'us';

var validateParams = function(param, paramList, defaultvalue){
    param=param.toLowerCase();
    if(paramList.indexOf(param)!=-1){
        return param;
    }
    else{
        console.error('Param '+param+' is not a valid value, using default');
        return defaultvalue;
    }
}


var getHtml = function(options){

    var options = options || {};

    var gender  = options.gender ? validateParams(options.gender, ACCEPTED_GENDER_VALUES, DEFAULT_GENDER_VALUE) : DEFAULT_GENDER_VALUE;
    var country = options.country ? validateParams(options.country, ACCEPTED_COUNTRY_VALUES, DEFAULT_COUNTRY_VALUE) : DEFAULT_COUNTRY_VALUE;
    var nameset = options.nameset ? validateParams(options.nameset, ACCEPTED_NAMESET_VALUES, DEFAULT_NAMESET_VALUE) : DEFAULT_NAMESET_VALUE;

    var html;

    var http = require('http');

    var options = {
        host: 'www.fakenamegenerator.com',
        path: '/gen-'+gender+'-'+nameset+'-'+country+'.php'
    };

    callback = function(response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            html = str;
        });
    }

    http.request(options, callback).end();

    while(html==undefined){
        deasync.runLoopOnce();
    };

    return html;
}

var getRandomData = function(options){

    var randomData = {

    };

    var html =  getHtml(options);
    var $ = cheerio.load(html);

    var addressData = $('#details > div.content > div.info > div > div.address > div').html();

    var addresses = addressData.replace(/\n/g,"").trimLeft().split('<br>');
    var addressLine = addresses[0].trim();
    var cityStateSplit = addresses[1].split(',');
    var city = cityStateSplit[0];
    var stateZipSplit = cityStateSplit[1].split(' ');
    var state = stateZipSplit[1];
    var zipCode = stateZipSplit[2];

    randomData.name = $('#details > div.content > div.info > div > div.address > h3').text();
    randomData.addressLine = addressLine;
    randomData.city = city;
    randomData.state = state;
    randomData.zipCode = zipCode;
    randomData.mothersMaidenName = $('#details > div.content > div.info > div > div.extra > dl:nth-child(1) > dd').text();
    randomData.ssn = $('#details > div.content > div.info > div > div.extra > dl:nth-child(2) > dd').html().split('<div')[0].trim();
    randomData.geoCoordinates = $('#geo').text();
    randomData.phone = $('#details > div.content > div.info > div > div.extra > dl:nth-child(5) > dd').text();
    randomData.DOB = $('#details > div.content > div.info > div > div.extra > dl:nth-child(8) > dd').text();
    randomData.age = $('#details > div.content > div.info > div > div.extra > dl:nth-child(9) > dd').text();
    randomData.zodiac = $('#details > div.content > div.info > div > div.extra > dl:nth-child(10) > dd').text();
    randomData.emailAddress = $('#details > div.content > div.info > div > div.extra > dl:nth-child(12) > dd').html().split('<div')[0].trim();

    randomData.userName = $('#details > div.content > div.info > div > div.extra > dl:nth-child(13) > dd').text()
    randomData.passWord = $('#details > div.content > div.info > div > div.extra > dl:nth-child(14) > dd').text();
    randomData.website = $('#details > div.content > div.info > div > div.extra > dl:nth-child(15) > dd').text();
    randomData.cardNumber = $('#details > div.content > div.info > div > div.extra > dl:nth-child(18) > dd').text();
    randomData.expires = $('#details > div.content > div.info > div > div.extra > dl:nth-child(19) > dd').text();
    randomData.cvv2 = $('#details > div.content > div.info > div > div.extra > dl:nth-child(20) > dd').text();
    randomData.company = $('#details > div.content > div.info > div > div.extra > dl:nth-child(22) > dd').text();
    randomData.occupation = $('#details > div.content > div.info > div > div.extra > dl:nth-child(23) > dd').text();

    randomData.height = $('#details > div.content > div.info > div > div.extra > dl:nth-child(25) > dd').text();
    randomData.weight = $('#details > div.content > div.info > div > div.extra > dl:nth-child(26) > dd').text();
    randomData.bloodType = $('#details > div.content > div.info > div > div.extra > dl:nth-child(27) > dd').text();

    randomData.upsTrackingNumber = $('#details > div.content > div.info > div > div.extra > dl:nth-child(29) > dd').text();
    randomData.westernUnion = $('#details > div.content > div.info > div > div.extra > dl:nth-child(30) > dd').text();
    randomData.moneyGram = $('#details > div.content > div.info > div > div.extra > dl:nth-child(31) > dd').text();

    randomData.favoriteColor = $('#details > div.content > div.info > div > div.extra > dl:nth-child(33) > dd').text();
    randomData.vehicle = $('#details > div.content > div.info > div > div.extra > dl:nth-child(34) > dd').text();
    randomData.guid = $('#details > div.content > div.info > div > div.extra > dl:nth-child(35) > dd').text();

    //console.log(randomData);

}

module.exports = {
    getRandomData : getRandomData
}

//getRandomData();