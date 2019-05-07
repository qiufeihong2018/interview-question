key是为了提高diff算法找到对应节点的速度。
有时候没有key往往速度更快，那是因为没有key，组件也就没有唯一标识，页面可以‘就地复用’该组件，那么切换组件的速度就比有key标识快上很多。
但是会产生副作用。例如，不会产生过渡效果，当绑定数据出现状态错位。[这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出](https://cn.vuejs.org/v2/guide/list.html#key)

## 参考文献
[vue官网](https://cn.vuejs.org/v2/guide/list.html#key)

[第一题：key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)