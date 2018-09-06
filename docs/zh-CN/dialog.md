- [toast](https://github.com/wclimb/wat/tree/master/zh-CN/toast.md)
- [dialog](https://github.com/wclimb/wat/tree/master/zh-CN/dialog.md)

# dialog 弹出框（全局调用）

模拟系统的消息弹出框组件，用于消息提示、操作处理。

## alert
```
<template>
  <button @click="open">弹出弹窗</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$dialog.alert('我是请提示')
      }
    }
  }
</script>
```
## confirm
```
<template>
  <button @click="open">弹出弹窗</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$dialog.confirm('我是请提示').then(res=>{
            // 点击了确定
        }).catch(res=>{
            // 点击了取消
        })
      }
    }
  }
</script>
```
## 完整实例演示
```
this.$dialog.confirm({
    title: '这是title',
    content: '这是内容',
    cancelBtnText:'取消',
    confirmBtnText:'确定',
    disabledClick: true,
    zIndex: 2000
}).then(res=>{
    // 点击了确定
}).catch(res=>{
    // 点击了取消
})
```
## options
| 参数   | 说明    |  类型  |  可选值 | 默认值|
| :----: | :----:   | :----: |:----: |:----: |
|   title    |   顶部title文字    |   string    |  -    |  提示    |
|   content    |   提示文字    |   string    |  -    |  -    |
|   cancelBtnText    |   左侧显示取消的文字    |   string    |  -    |  取消    |
|   confirmBtnText    |   右侧显示确定的文字    |   string    |  -    |  确定    |
|   disabledClick    |   背景是否可以点击隐藏    |   boolean    |  false    |  false/true    |
|   zIndex    |   层级    |   number    |  -    |  2000    |

