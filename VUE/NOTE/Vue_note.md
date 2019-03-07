# Vue  

## 1.Vue is的用处

```<body>
  <div id="root">
    <table class="table">
      <tbody>
        <tr>
          <tr is = 'row'></tr>  
          <tr is = 'row'></tr>
          <tr is = 'row'></tr>
          //说明 1 在这里不能直接写<row></row>直接写row的话，<tr><td>不会包
          含在<table>标签里面。同样的那些需要包含在另一个标签内的元素最好也用 is 来写，比如
          ul里面的 li ,select里的 option
        </tr>
      </tbody>
    </table>
  </div>
  <script>
   Vue.component('row', {
     data:function(){  //说明 2,组件里的data必须写成function,因为组件一般会多次调用。
       return {
         number:0
       }
     }
     template:`<tr><td> this is a row </td></tr>`
   })
   var vm = new Vue({
     el:'#root'
   })
  </script>
 ```

### 1.Vue ref的用处

***
ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：

关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。
***

```<body>
  <div id="root">
  <counter ref='counter1' @change='handleChange'></counter>
  <counter ref='counter2' @change='handleChange'></counter>
  <div>{{total}}</div>
  </div>
  <script>
   Vue.component('counter', {
     data:function(){
       return {number:0}
     },
     template:`<div @click='handleClick'>{{number}}</div>`,
     methods:{
        handleClick:function(){
          this.number++;
          this.$emit('change');
        }
     }
   })
   var vm = new Vue({
     el:'#root',
     data:{
       total:0
     },
     methods:{
      handleChange: function(){
           this.total = this.$refs.counter1.number + this.$refs.counter2.number;
       }
     }
   })
  </script>
  ```

  >父组件通过属性[props]向子组件传递数据。 子组件通过事件$emit('inc',2)向父组件传递数据
  >>子组件不能直接更改父组件的数据，如果要更改可以保存一个父组件的复本，然后改变复本的数据

  ```<div @click.native='handleClick'>{{number}}</div>
  ``` native可以给绑定原生事件

```<div id="root">
   <child-one>
     <template slot-scope='propers'>
       <ul>
         <li>{{propers.item}}</li>
       </ul>
     </template>
   </child-one>
   <child-two></child-two>
  <div>{{total}}</div>
  </div>
  <script>
   Vue.component('child-one', {
     data:function(){
       return {list:[1,2,3,4,5]}
     },
     template:`<div>child one <slot v-for = 'item of list' :item=item></slot></div>`,
     methods:{
     }
   })
    var vm = new Vue({
     el:'#root',
     data:{
       total:0
     },
     methods:{
      handleChange: function(){
           this.total = this.$refs.counter1.number + this.$refs.counter2.number;
       }
     }
   })
  </script>```
  >slot-scope='propers' Vue中的作用于插槽