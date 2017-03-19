< script >
    angular.module('myApp', ['ui.bootstrap']).controller('modalDemo', function($scope, $modal, $log) { //
        $scope.items = ['html5', 'jq', 'FE-演示平台'];
        $scope.open = function(size) { //打开模态 
            var modalInstance = $modal.open({
                templateUrl: 'myModelContent.html', //创建的视图，即modal对应的html文件
                controller: 'ModalInstanceCtrl', // 初始化模态范围，即该modal的controller
                size: size, //大小配置不能自定义大小，只能是sm，md，lg等这些值
                resolve: { //定义一个成员并将他传递给$modal指定的控制器，相当于routes的一个reslove属性，如果需要传递一个objec对象，需要使用angular.copy()，注意黄色背景区域
                    items: function() {
                        return $scope.items;
                    }
                }
            })
            x.x.x.x.x //在这可以把父controller的变量进行传递，以便modal的controller使用

            eg: modalInstance.orderId = $scope.orderId;
            //在controller中可以使用$modalInstance.orderId来使用父控制器的$scope.orderId， 如果是二级的命名($scope.XX.XX) 则不需要通过这个变量传递直接在子控制器中使用即可

            modalInstance.result.then(function(selectedItem) { //$modalInstance.close()正常关闭后执行的函数
                $scope.selected = selectedItem;
            }, function() { //$modalInstance.dismiss('cancel')后执行的函数，取消或退出执行的函数
                $log.info('Modal dismissed at: ' + new Date())

            })
        }
    })
angular.module('myApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, items) { //依赖于$modalInstance必须先注入
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };
    $scope.ok = function() {
        $modalInstance.close($scope.selected.item); //关闭并返回当前选项
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel'); // 退出或者取消
    }
}) < /script>