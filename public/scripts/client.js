console.log('js linked');

var myApp = angular.module('myApp', []);

//images
var albumArray = [

    {
        image: 'img/babyofthelakeIV.jpg',
        caption: 'Scarlett loves aquatic wild life, the outdoors, and water in general. #babyofthelake',
        // // count: 0,
        visible: true,
        descVisible: false

    },
    {
        image: 'img/fuddlove.jpg',
        caption: 'apartment & selfie-stick!',
        count: 0,
        visible: true,
        descVisible: false
    },
    {
        image: 'img/emily&scarlett.jpg',
        caption: 'The niecelet and me! She\'s gumming a domino haha',
        count: 0,
        visible: true,
        descVisible: false
    },
    {
        image: 'img/erinswedding.jpg',
        caption: 'My sister Erin, her bridesmaids, and me.',
        count: 0,
        visible: true,
        descVisible: false
    },
    {
        image: 'img/photoboothloveIV.jpg',
        caption: 'Me and my bff gamer sk8er bf.',
        count: 0,
        visible: true,
        descVisible: false
    },
    {
        image: 'img/fabfive.jpg',
        caption: 'Group college pic! #gusties',
        count: 0,
        visible: true,
        descVisible: false
    },
    {
        image: 'img/purplepower.jpg',
        caption: 'Goin to the MN State Fair for the Prince party!',
        count: 0,
        visible: true,
        descVisible: false
    },

    {
        image: 'img/corefour.jpg',
        caption: 'My three best friends and me, attacked by the paparazzi @ President\'s Ball, 2012',
        count: 0,
        visible: true,
        descVisible: false
    }
] //end albumArray

myApp.controller('PicsController', function ($http) { //$http or $scope
    console.log('PicsController');

    var vm = this;
    vm.image = albumArray;

    vm.show = function (image) {
        console.log('photo function');
        if (albumArray.visible === true) {
            albumArray.descVisible
        }
    }
    vm.toggle = function (image) {
        image.visible = !image.visible;
        console.log(image.visible);
    }; //end toggle 

}); //end myApp.controller

myApp.controller('CommentController', function ($http) {
    var vm = this;
    vm.comments = [];
    vm.addComment = function () {
        console.log('in addComment:', vm.CommentIn);
        vm.comments.push(vm.CommentIn)
        
        console.log(vm.comments);
        //$http
        $http({
            type: 'PUT',
            url: '/comments',
            data: {comments: vm.comments}
        }).then( function( response ){
            // vm.CommentIn.val(''); //trying to empty input field
            console.log('back from the server with:', response);
            // vm.comments = response.data;
        }) //end $http
    }; //end vm.addComment function
}); //end Comment Controller