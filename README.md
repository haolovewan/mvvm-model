# 这是一个模拟双向绑定的小demo

> 当然这个是我以自己的想法去做的一个设计，和vue用的高大上的原理还是有很大的出入的

### 主要思路
1. 获取input标签上Attr属性(h-model) 监听输入
2. 将监听到的数据，与变量一一对应，渲染到具有（h-bind）的dom属性的textContent中；这里借鉴了vue的思路，获取深层对象的值利用<code>new Function<code>

* 演示:
![演示片段](./images/演示1.gif)

* 完整演示:
![完整演示](./images/双向绑定.gif)
