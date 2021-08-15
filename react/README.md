# 先聊聊浏览器底层架构

## 浏览器应用

  + 浏览器进程
    - UI线程
    - 文件读写（storage）线程
    - 网络线程
  + 渲染进程
    - 合并线程
    - 主线程
    - tile worker线程
  + GPU进程
    - GPU线程

## 浏览器渲染过程

合成线程：初始化事件和主线程 - 交给【主线程】- 将composite阶段生成的图块信息（绘制信息和在内存中的信息）生成合成器帧 - 交给【GPU线程】

主线程：监听事件触发 - requestAnimationFrame - html parser - recalc styles - layout（生成绘制记录表） - update layout（更新绘制记录表） - composite（根据绘制记录表生成图块，包括绘制信息和在内存中的位置，并交给合成线程）- requestIdleCallback

GPU线程：根据合成器帧渲染

## React架构

### Scheduler阶段

找任务：寻找任务并执行，直至没有任务或者不得不交出执行权（如设置了执行时间限制50ms），执行requestIdleCallback下一次继续

### Reconcile阶段

执行小任务，维护关系：执行当前任务（如传入的fiber），生成新的fiber关系链（sibling和parent），递归的过程是优先第一个child、sibling、parent

### Commit阶段

提交整个行为：将rootFiber进行最终的渲染
