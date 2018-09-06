- [toast](https://github.com/wclimb/wat/tree/master/zh-CN/toast.md)
- [dialog](https://github.com/wclimb/wat/tree/master/zh-CN/dialog.md)

# toast 提示（全局调用）

模拟系统的消息提示框组件，用于消息提示、展示状态。

## 轻提示
```
<template>
  <button @click="open">轻提示</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$toast('我是请提示')
      }
    }
  }
</script>
```
## 轻提示位置

```
<template>
  <button @click="open">轻提示</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$toast.top('我是现在在顶部显示'); // 默认middle，值有top、middle、bottom
      }
    }
  }
</script>
```

## 显示成功失败

```
<template>
  <button @click="open">提示</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$toast.success('我现在是成功的状态'); // 值有success、fail、top、middle、bottom、loading
      }
    }
  }
</script>
```
## loading

```
<template>
  <button @click="open">loading</button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$toast.loading('我现在是成功的状态'); // 默认loading图标是circular; 
      }
    }
  }
</script>
```
## 完整功能展示
```
// 提示
this.$toast({
    type:'default',
    text:'我是提示文字',
    direction: 'top',
    zIndex: 3000,
    mask: true,
    disabledClick: false,
    onClose: () => {}
})
this.$toast.top('我是提示文字')

// loading
this.$toast({
    type:'loading',
    text:'我是加载提示文字',
    zIndex: 3000,
    mask: true,
    disabledClick: false,
    onClose: () => {}
})
this.$toast.loading('加载中...')

// 成功失败
this.$toast.success('成功')
this.$toast.fail('失败')

// 关闭所有弹窗
this.$toast.closeAll()
```
## options
| 参数   | 说明    |  类型  |  可选值 | 默认值|
| :----: | :----:   | :----: |:----: |:----: |
|   text    |   提示文字    |   string    |  -    |  -    |
|   duration    |   显示提示的时间,为`0`时不自动关闭    |   number    |  -    |  3000    |
|   mask    |   背景遮罩    |   boolean    |  false    |  false/true   |
|   disabledClick    |   背景是否可以点击    |   boolean    |  false    |  false/true    |
|   direction    |   位置    |   string    |  top/middle/bottom    |   middle   |
|   type    |   提示类型（有轻提示、loading、成功、失败）    |   string    |   default/loading/success/fail   |  default    |
|   zIndex    |   层级    |   number    |  -    |  2000    |
|   loadingType    |   loading的图标样式    |   string    |  circular/spinner    |  circular    |
|   onClose    |   结束的回到    |   function    |  -    |  -    |
|   closeAll    |   关闭所有弹窗， `this.$toast.closeAll()`   |   -    |  -    |  -    |