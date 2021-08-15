# Vue创建实例的过程

```
        初始化事件、生命周期
                |
          beforeCreated
                |
        初始化注入的options和响应式
                |
             created
                |
              有无el------------
                |              |
                |y             |n
                |    y         |
                |--------是否调用vm.$mount
                |
              有无template-----------
                |                   |
                |y                  |n
                |                   |
    编译template进入render函数---编译el.outerHTML进入render函数
                |                   |
                 -------------------
                |
            beforeMount
                |
        创建vm.$el并替换原绑定节点
                |
                |  data改变---------beforeUpdate
                |     |                 |
             mounted--|                 |
                |     |                 |
                |   updated----------diff和渲染
                |
                |
          执行vm.$destory
                |
          beforeDestory
                |
          清除监听器、子组件、事件
                |
            destoryed
```
