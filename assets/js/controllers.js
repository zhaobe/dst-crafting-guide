var dstApp = angular.module("dstApp", []);

dstApp.controller("CraftCtrl", ['$scope', function($scope) {

    $scope.sortType = 'name'; //default sort by name
    $scope.sortReverse = false;

    $scope.items = [{
            'name': 'Axe',
            'materials': '1 Twig, 1 Flint',
            'tab': 'Tools',
            'tier': 'Always available',
            'damage': '27.2',
            'durability': '100 uses',
            'perk': 'Chops wood',
            'stacks': 'No',
            'debug': 'axe',
        },
        {
            'name': 'Pickaxe',
            'materials': '2 Twig, 2 Flint',
            'tab': 'Tools',
            'tier': 'Always available',
            'damage': '27.2',
            'durability': '33 uses',
            'perk': 'Mines rocks',
            'stacks': 'No',
            'debug': 'pickaxe',
        },
        {
            'name': 'Shovel',
            'materials': '2 Twig, 2 Flint',
            'tab': 'Tools',
            'tier': 'Science Machine',
            'damage': '17',
            'durability': '25 uses',
            'perk': 'Used for digging',
            'stacks': 'No',
            'debug': 'shovel',
        },
        {
            'name': 'Campfire',
            'materials': '2 Log, 3 Cut Grass',
            'tab': 'Light',
            'tier': 'Always available',
            'damage': '0',
            'durability': '2 min 15 sec',
            'perk': '',
            'stacks': 'No',
            'debug': 'campfire',
        },
        {
            'name': 'Fire Pit',
            'materials': '2 Log, 12 Rock',
            'tab': 'Light',
            'tier': 'Always available',
            'damage': '0',
            'durability': '',
            'perk': '',
            'stacks': 'No',
            'debug': '',
        },
        {
            'name': 'Torch',
            'materials': '2 Twig, 2 Cut Grass',
            'tab': 'Light',
            'tier': 'Always available',
            'damage': '17',
            'durability': '75 sec',
            'perk': '',
            'stacks': 'No',
            'debug': 'torch',
        },
        {
            'name': 'Trap',
            'materials': '2 Twig, 6 Cut Grass',
            'tab': 'Survival',
            'tier': 'Always available',
            'damage': '0',
            'durability': '8 uses',
            'perk': 'Captures Rabbits, Frogs, Spiders, Crabbits',
            'stacks': 'No',
            'debug': 'trap',
        },

    ];

    // hold rows as false except row that is being edited
    $scope.editData = {};

    // for the existing items in scope.items set editData to false
    for (var i = 0; i < $scope.items.length; i++) {
        $scope.editData[$scope.items[i].name] = false;
    }

    $scope.addRow = function() {
        $scope.items.push({
            'name': $scope.name,
            'materials': $scope.materials,
            'tab': $scope.tab,
            'tier': $scope.tier,
            'damage': $scope.damage,
            'durability': $scope.durability + ' uses',
            'perk': $scope.perk,
            'stacks': $scope.stacks,
            'debug': $scope.debug
        });

        $scope.alert = $scope.name + ' has been added.';

        $scope.name = '';
        $scope.materials = '';
        $scope.tab = '';
        $scope.tier = '';
        $scope.damage = '';
        $scope.durability = '';
        $scope.perk = '';
        $scope.stacks = '';
        $scope.debug = '';
        $scope.checkmark = true;
        $scope.edit = false;

        return alert;
    };

    $scope.removeRow = function(name) {
        var index = -1; // needed in case of all rows deleted or if first row gets deleted first all the time
        var arr = eval($scope.items);

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("There was an error removing the selected item");
        }
        // actually delete item from array, item in ng-repeat
        $scope.items.splice(index, 1);
    };

    $scope.editRow = function(items) {
        $scope.editData[items.name] = true;
    };

    $scope.updateRow = function(items) {
        $scope.editData[items.name] = false;
    };


}]);