var dstApp = angular.module("dstApp", []);

dstApp.controller("CraftCtrl", ['$scope', function($scope) {
    $scope.items = [{
            'name': 'Shovel',
            'materials': '2 Twigs, 2 Flint',
            'tab': 'Tools',
            'tier': 'Science Machine',
            'damage': '17',
            'durability': '25 uses',
            'perk': 'Used for digging',
            'stacks': 'No',
            'debug': 'Shovel',
        },
        {
            'name': 'Regal Shovel',
            'materials': '4 Twigs, 2 Gold Nugget',
            'tab': 'Tools',
            'tier': 'Alchemy Engine',
            'damage': '17',
            'durability': '100 uses',
            'perk': 'Used for digging',
            'stacks': 'No',
            'debug': 'goldenshovel',
        },

    ];

    $scope.addRow = function() {
        $scope.items.push({ 'name': $scope.name, 'materials': $scope.materials, 'tab': $scope.tab, 
            'tier': $scope.tier, 'damage': $scope.damage, 'durability': $scope.durability + ' uses', 
            'perk': $scope.perk, 'stacks': $scope.stacks, 'debug': $scope.debug  });
        
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
        
        return alert;
    };
}]);